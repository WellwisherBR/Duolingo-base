const App = {
  activeLevelId: null,

  init() {
    State.load();
    this.activeLevelId = this.getCurrentLevelId();
    this.renderPath();
    this.renderStats();
    this.bindEvents();
  },

  getCurrentLevelId() {
    for (const level of LEVELS) {
      const ids = getLevelLessonIds(level.id);
      const allDone = ids.every(id => State.completedLessons.includes(id));
      if (!allDone) return level.id;
    }
    return LEVELS[LEVELS.length - 1].id;
  },

  isLevelUnlocked(levelId) {
    const idx = LEVELS.findIndex(l => l.id === levelId);
    if (idx === 0) return true;
    const prevIds = getLevelLessonIds(LEVELS[idx - 1].id);
    return prevIds.every(id => State.completedLessons.includes(id));
  },

  renderPath() {
    const container = document.getElementById("path-container");
    container.innerHTML = "";

    container.appendChild(this.renderLevelNav());

    const level = LEVELS.find(l => l.id === this.activeLevelId) || LEVELS[0];

    const levelHeader = document.createElement("div");
    levelHeader.className = "level-header";
    levelHeader.style.setProperty("--level-color", level.color);
    const lh = State.getLevelHours(level.id);
    const pct = this.getLevelProgress(level);
    levelHeader.innerHTML = `
      <div class="level-icon">${level.icon}</div>
      <div class="level-info">
        <div class="level-title">${level.title}</div>
        <div class="level-desc">${level.desc}</div>
        <div class="level-hours-bar"><div class="level-hours-fill" style="width:${lh.target > 0 ? (lh.done / lh.target) * 100 : 0}%"></div></div>
      </div>
      <div class="level-badge">${pct}% · ${lh.done}/${lh.target}h</div>
    `;
    container.appendChild(levelHeader);

    level.units.forEach(unit => {
      const unitLabel = document.createElement("div");
      unitLabel.className = "unit-header";
      const firstLesson = unit.lessons[0];
      if (!State.isUnlocked(firstLesson.id)) unitLabel.classList.add("locked");
      unitLabel.innerHTML = `<div class="unit-title">${unit.title}</div>`;
      container.appendChild(unitLabel);

      unit.lessons.forEach((lesson, lIdx) => {
        const unlocked = State.isUnlocked(lesson.id);
        const completed = State.completedLessons.includes(lesson.id);
        const mastery = Math.max(State.getLessonMastery(lesson.id), completed ? 1 : 0);
        const lessonProgress = Math.round((mastery / MASTERY_ROUNDS) * 100);

        const node = document.createElement("div");
        node.className = "lesson-node";
        if (!unlocked) node.classList.add("locked");
        else if (completed) node.classList.add("completed");
        else node.classList.add("active");

        node.style.setProperty("--level-color", level.color);
        const offset = lIdx % 3 === 0 ? "0px" : (lIdx % 3 === 1 ? "70px" : "-70px");
        node.style.transform = `translateX(${offset})`;

        node.innerHTML = `
          <div class="node-circle">${completed ? "⭐" : (unlocked ? lesson.icon : "🔒")}</div>
          <div class="node-progress"><div class="node-progress-fill" style="width:${lessonProgress}%"></div></div>
          <div class="node-label">${lesson.title}</div>
          <div class="tooltip">
            <strong>${lesson.title}</strong>
            ${completed ? "<br>Completo! Clique para praticar." : "<br>Começar lição"}
            <br>Progresso: ${lessonProgress}%
            <button class="btn btn-green btn-block">
              ${completed ? "Praticar +5 XP" : "Começar +15 XP"}
            </button>
          </div>
        `;

        if (unlocked) {
          node.onclick = () => {
            Engine.start(lesson, completed);
          };
        }

        container.appendChild(node);
      });
    });
  },

  renderLevelNav() {
    const nav = document.createElement("div");
    nav.className = "level-nav";

    LEVELS.forEach(level => {
      const unlocked = this.isLevelUnlocked(level.id);
      const pct = this.getLevelProgress(level);
      const tab = document.createElement("button");
      tab.className = "level-tab";
      if (!unlocked) tab.classList.add("locked");
      if (level.id === this.activeLevelId) tab.classList.add("current");
      tab.style.setProperty("--level-color", level.color);
      tab.title = level.title;

      tab.innerHTML = `
        <span class="tab-icon">${unlocked ? level.icon : "🔒"}</span>
        <span class="tab-label">${level.id.toUpperCase()}</span>
        <span class="tab-pct">${unlocked ? pct + "%" : ""}</span>
      `;

      if (unlocked) {
        tab.onclick = () => {
          this.activeLevelId = level.id;
          this.renderPath();
        };
      } else {
        tab.onclick = () => showToast("Complete o nível anterior para desbloquear!");
      }

      nav.appendChild(tab);
    });

    return nav;
  },

  renderStats() {
    const stats = getContentStats();
    const hoursEl = document.getElementById("stat-total-hours");
    const lessonsEl = document.getElementById("stat-total-lessons");
    const wordsEl = document.getElementById("stat-total-words");
    if (hoursEl) hoursEl.textContent = stats.totalHours + "h";
    if (lessonsEl) lessonsEl.textContent = stats.lessons;
    if (wordsEl) wordsEl.textContent = stats.words;

    const doneEl = document.getElementById("stat-completed-hours");
    if (doneEl) doneEl.textContent = State.getCompletedHours() + "h";
  },

  getLevelProgress(level) {
    const ids = [];
    level.units.forEach(u => u.lessons.forEach(l => ids.push(l.id)));
    const done = ids.filter(id => State.completedLessons.includes(id)).length;
    return Math.round((done / ids.length) * 100);
  },

  buildReviewLesson() {
    const completed = State.completedLessons
      .map(id => getLessonById(id))
      .filter(l => l);

    if (completed.length === 0) return null;

    const pool = [];
    const phrasePool = [];
    completed.forEach(l => {
      pool.push(...l.words);
      phrasePool.push(...l.phrases);
    });

    const words = shuffle(pool).slice(0, 10);
    const phrases = shuffle(phrasePool).slice(0, 2);

    return {
      id: "review_" + Date.now(),
      title: "Revisão",
      icon: "🔁",
      words,
      phrases
    };
  },

  bindEvents() {
    document.getElementById("btn-action").onclick = () => Engine.check();
    document.getElementById("btn-exit-lesson").onclick = () => Engine.exit();
    document.getElementById("btn-theme").onclick = () => State.toggleTheme();

    const startPractice = () => {
      const review = this.buildReviewLesson();
      if (!review) {
        showToast("Complete uma lição primeiro!");
        return;
      }
      Engine.start(review, true);
    };

    const reviewBtn = document.getElementById("btn-review");
    if (reviewBtn) reviewBtn.onclick = startPractice;
  }
};

document.addEventListener("DOMContentLoaded", () => App.init());
