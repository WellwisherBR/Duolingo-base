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
    const prev = LEVELS[idx - 1];
    const prevIds = getLevelLessonIds(prev.id);
    const allLessons = prevIds.every(id => State.completedLessons.includes(id));
    const testPassed = State.tests[prev.id] && State.tests[prev.id].passed;
    return allLessons && testPassed;
  },

  completedLevelsCount() {
    return LEVELS.filter(level => getLevelLessonIds(level.id).every(id => State.completedLessons.includes(id))).length;
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
              ${completed ? "Praticar" : "Começar"}
            </button>
          </div>
        `;

        if (unlocked) {
          node.onclick = () => {
            if (State.hearts <= 0) {
              showToast("❤️ Sem vidas! Faça uma revisão para recuperar.");
              return;
            }
            Engine.start(lesson, completed ? "practice" : "lesson");
          };
        }

        container.appendChild(node);
      });

      const unitDone = unit.lessons.every(l => State.completedLessons.includes(l.id));
      const challenge = document.createElement("div");
      challenge.className = "lesson-node challenge" + (unitDone ? " active" : " locked");
      challenge.style.setProperty("--level-color", "#ffc800");
      challenge.innerHTML = `
        <div class="node-circle">${unitDone ? "🎮" : "🔒"}</div>
        <div class="node-label">Desafio</div>
        <div class="tooltip">
          <strong>🎮 Desafio da unidade</strong>
          <br>${unitDone ? "Teste tudo o que aprendeu!" : "Complete as lições para desbloquear"}
          <button class="btn btn-green btn-block">${unitDone ? "Jogar +50 XP" : "Bloqueado"}</button>
        </div>
      `;
      if (unitDone) {
        challenge.onclick = () => {
          if (State.hearts <= 0) {
            showToast("❤️ Sem vidas! Faça uma revisão para recuperar.");
            return;
          }
          Engine.start(this.buildChallenge(unit), "challenge");
        };
      }
      container.appendChild(challenge);
    });

    container.appendChild(this.renderTestNode(level));
  },

  renderTestNode(level) {
    const ids = getLevelLessonIds(level.id);
    const allDone = ids.every(id => State.completedLessons.includes(id));
    const test = State.tests[level.id];

    const node = document.createElement("div");
    node.className = "lesson-node test" + (allDone ? " active" : " locked");
    if (test && test.passed) node.classList.add("passed");
    node.style.setProperty("--level-color", "#ff4b4b");
    node.innerHTML = `
      <div class="node-circle">${allDone ? "🏆" : "🔒"}</div>
      <div class="node-label">Prova ${level.id.toUpperCase()}${test && test.passed ? ` · ${test.tier} (${test.score}%)` : ""}</div>
      <div class="tooltip">
        <strong>🏆 Prova de domínio</strong>
        <br>${allDone ? "Listening · Gramática · Escrita" : "Complete todas as lições do nível para desbloquear"}
        ${test && test.passed ? `<br>Aprovado: ${test.tier} · ${test.score}%` : ""}
        <button class="btn btn-green btn-block">${allDone ? (test && test.passed ? "Refazer prova" : "Fazer prova") : "Bloqueado"}</button>
      </div>
    `;
    if (allDone) {
      node.onclick = () => this.startTest(level.id);
    }
    return node;
  },

  buildChallenge(unit) {
    const words = [];
    const phrases = [];
    unit.lessons.forEach(l => {
      words.push(...l.words);
      phrases.push(...(l.phrases || []));
    });
    return {
      id: "challenge_" + unit.id,
      title: "Desafio " + unit.title,
      icon: "🎮",
      words: shuffle(words).slice(0, 12),
      phrases: shuffle(phrases).slice(0, 6)
    };
  },

  startTest(levelId) {
    const level = LEVELS.find(l => l.id === levelId);
    if (!level) return;
    const words = [];
    const phrases = [];
    level.units.forEach(u => u.lessons.forEach(l => {
      words.push(...l.words);
      phrases.push(...(l.phrases || []));
    }));
    Engine.start({
      id: "test_" + levelId,
      title: "Prova " + levelId.toUpperCase(),
      icon: "🏆",
      words: shuffle(words).slice(0, 14),
      phrases: shuffle(phrases).slice(0, 8)
    }, "test", levelId);
  },

  startHeartRecovery() {
    const review = this.buildReviewLesson();
    if (!review) {
      State.refillHearts();
      Engine.exit();
      return;
    }
    Engine.start(review, "review");
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
        tab.onclick = () => showToast("Complete as lições e a prova do nível anterior para desbloquear!");
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

    State.updateUI();
  },

  getLevelProgress(level) {
    const ids = [];
    level.units.forEach(u => u.lessons.forEach(l => ids.push(l.id)));
    const done = ids.filter(id => State.completedLessons.includes(id)).length;
    return Math.round((done / ids.length) * 100);
  },

  buildReviewLesson() {
    const due = State.getDue();

    if (due.length > 0) {
      const words = shuffle(due).slice(0, 10).map(e => ({ it: e.it, pt: e.pt }));
      return {
        id: "review_" + Date.now(),
        title: "Revisão espaçada",
        icon: "🔁",
        words,
        phrases: []
      };
    }

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

  openCerts(focusLevelId) {
    const grid = document.getElementById("certs-grid");
    grid.innerHTML = "";
    LEVELS.forEach(level => {
      const cert = State.certificates[level.id];
      const card = document.createElement("div");
      card.className = "cert-card" + (cert ? " earned" : "");
      card.innerHTML = cert ? `
        <div class="cert-level">${level.icon} ${level.id.toUpperCase()}</div>
        <div>${level.title}</div>
        <div class="cert-tier">${cert.tier}</div>
        <div class="cert-date">${cert.date}</div>
        <div style="margin-top:8px;font-size:.75rem">Clique para imprimir</div>
      ` : `
        <div class="cert-level">🔒 ${level.id.toUpperCase()}</div>
        <div>${level.title}</div>
        <div class="cert-date">Passe na prova para obter</div>
      `;
      if (cert) card.onclick = () => this.printCert(level.id);
      grid.appendChild(card);
    });
    document.getElementById("certs-modal").classList.add("visible");
    if (focusLevelId && State.certificates[focusLevelId]) {
      this.printCert(focusLevelId);
    }
  },

  printCert(levelId) {
    const level = LEVELS.find(l => l.id === levelId);
    const cert = State.certificates[levelId];
    if (!level || !cert) return;
    const printArea = document.getElementById("cert-print");
    printArea.innerHTML = `
      <div class="cert-sheet">
        <div class="cert-flag">${LANG.flag}</div>
        <h1>Certificado de Conclusão</h1>
        <p class="cert-course">Curso de ${LANG.name.charAt(0).toUpperCase() + LANG.name.slice(1)} — Nível ${level.id.toUpperCase()}</p>
        <p class="cert-level-title">${level.title}</p>
        <p class="cert-desc">${level.desc}</p>
        <div class="cert-badge">${cert.tier}</div>
        <p class="cert-hours">${level.hours} horas de curso · Prova com ${State.tests[levelId].score}% de aproveitamento</p>
        <p class="cert-date">Emitido em ${cert.date}</p>
      </div>
    `;
    window.print();
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
      Engine.start(review, "review");
    };

    const reviewBtn = document.getElementById("btn-review");
    if (reviewBtn) reviewBtn.onclick = startPractice;

    const simBtn = document.getElementById("btn-sim");
    if (simBtn) simBtn.onclick = () => Sim.open();

    const certsBtn = document.getElementById("btn-certs");
    if (certsBtn) certsBtn.onclick = () => this.openCerts();

    const exitSim = document.getElementById("btn-exit-sim");
    if (exitSim) exitSim.onclick = () => Sim.exit();

    const closeCerts = document.getElementById("btn-close-certs");
    if (closeCerts) closeCerts.onclick = () => document.getElementById("certs-modal").classList.remove("visible");

    document.getElementById("certs-modal").addEventListener("click", (e) => {
      if (e.target.id === "certs-modal") e.currentTarget.classList.remove("visible");
    });
  }
};

const Sim = {
  scenario: null,
  step: 0,
  sessionXP: 0,
  answered: false,

  open() {
    const screen = document.getElementById("sim-screen");
    const content = document.getElementById("sim-content");
    document.getElementById("sim-title").textContent = "🌎 Simulações do mundo real";
    const unlockedLevels = App.completedLevelsCount();

    content.innerHTML = `
      <p class="sim-intro">Resolva situações reais conversando no idioma. Responda com suas palavras!</p>
      <div class="sim-grid">
        ${SIMULATIONS.map(sc => {
          const unlocked = unlockedLevels >= sc.minLevel;
          return `
            <div class="sim-card ${unlocked ? "" : "locked"}" data-id="${sc.id}">
              <div class="sim-icon">${sc.icon}</div>
              <div class="sim-name">${sc.title}</div>
              <div class="sim-meta">${sc.steps.length} interações · ${unlocked ? "disponível" : "🔒 complete mais níveis"}</div>
            </div>
          `;
        }).join("")}
      </div>
    `;

    content.querySelectorAll(".sim-card").forEach(card => {
      card.onclick = () => {
        const sc = SIMULATIONS.find(s => s.id === card.dataset.id);
        if (!sc) return;
        if (unlockedLevels < sc.minLevel) {
          showToast("🔒 Complete mais níveis para desbloquear esta simulação!");
          return;
        }
        this.start(sc);
      };
    });

    document.getElementById("dashboard").classList.remove("active");
    screen.classList.add("active");
  },

  start(scenario) {
    this.scenario = scenario;
    this.step = 0;
    this.sessionXP = 0;
    this.answered = false;

    const content = document.getElementById("sim-content");
    content.innerHTML = `
      <div class="sim-chat" id="sim-chat"></div>
      <div class="sim-input-row">
        <input type="text" id="sim-input" autocomplete="off" placeholder="Digite sua resposta...">
        <button class="btn btn-green" id="sim-send">Enviar</button>
      </div>
      <div class="sim-foot">
        <button class="btn btn-blue" id="sim-hint">💡 Dica</button>
        <button class="btn btn-red" id="sim-skip">Pular</button>
      </div>
    `;

    document.getElementById("sim-send").onclick = () => this.verify();
    document.getElementById("sim-input").addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.verify();
    });
    document.getElementById("sim-hint").onclick = () => this.showHint();
    document.getElementById("sim-skip").onclick = () => this.skip();

    this.aiTurn();
  },

  aiTurn() {
    const st = this.scenario.steps[this.step];
    this.answered = false;
    this.addBubble("ai", `${this.scenario.icon} ${st.ai}`);
    speak(st.ai);
    const input = document.getElementById("sim-input");
    if (input) {
      input.value = "";
      input.disabled = false;
      input.focus();
    }
  },

  addBubble(cls, text) {
    const chat = document.getElementById("sim-chat");
    if (!chat) return;
    const b = document.createElement("div");
    b.className = "bubble " + cls;
    b.textContent = text;
    chat.appendChild(b);
    b.scrollIntoView({ behavior: "smooth", block: "end" });
  },

  verify() {
    if (this.answered) return;
    const input = document.getElementById("sim-input");
    const ans = (input.value || "").trim();
    if (!ans) return;

    const st = this.scenario.steps[this.step];
    this.addBubble("user", ans);
    input.value = "";

    if (this.match(ans, st.accept)) {
      this.answered = true;
      this.sessionXP += 15;
      State.addXP(15);
      SFX.correct();
      this.addBubble("ok", "✅ Muito bem! +15 XP");
      setTimeout(() => this.advance(), 900);
    } else {
      SFX.wrong();
      this.addBubble("err", "❌ Tente novamente. " + (st.hint ? "Dica: " + st.hint : ""));
    }
  },

  match(ans, accept) {
    const a = normalize(ans);
    return accept.some(k => a.includes(normalize(k)));
  },

  showHint() {
    const st = this.scenario.steps[this.step];
    if (st.hint) this.addBubble("err", "💡 " + st.hint);
  },

  skip() {
    if (this.answered) return;
    const st = this.scenario.steps[this.step];
    this.answered = true;
    this.addBubble("err", `Resposta possível: "${st.accept[0]}"`);
    speak(st.accept[0]);
    setTimeout(() => this.advance(), 1200);
  },

  advance() {
    this.step++;
    if (this.step < this.scenario.steps.length) {
      this.aiTurn();
    } else {
      this.finish();
    }
  },

  finish() {
    this.sessionXP += 50;
    State.addXP(50);
    const chat = document.getElementById("sim-chat");
    chat.insertAdjacentHTML("beforeend", `
      <div class="bubble ok">🏆 Simulação concluída! +50 XP bônus</div>
      <div style="text-align:center;margin:16px 0">
        <button class="btn btn-green btn-lg" onclick="Sim.exit()">Voltar</button>
      </div>
    `);
    const row = document.querySelector(".sim-input-row");
    const foot = document.querySelector(".sim-foot");
    if (row) row.style.display = "none";
    if (foot) foot.style.display = "none";
  },

  exit() {
    document.getElementById("sim-screen").classList.remove("active");
    document.getElementById("dashboard").classList.add("active");
    speechSynthesis.cancel();
    App.renderPath();
    App.renderStats();
  }
};

function initWordPopup() {
  let popup = document.getElementById("word-popup");
  if (!popup) {
    popup = document.createElement("div");
    popup.id = "word-popup";
    popup.className = "word-popup";
    document.body.appendChild(popup);
  }
  let hideTimer = null;
  document.addEventListener("click", (e) => {
    const link = e.target.closest(".word-link");
    if (!link) {
      popup.classList.remove("visible");
      return;
    }
    const trans = link.dataset.trans;
    popup.textContent = trans;
    popup.classList.add("visible");
    const rect = link.getBoundingClientRect();
    const popRect = popup.getBoundingClientRect();
    let left = rect.left + rect.width / 2 - popRect.width / 2;
    left = Math.max(10, Math.min(left, window.innerWidth - popRect.width - 10));
    let top = rect.top - popRect.height - 10;
    if (top < 10) top = rect.bottom + 10;
    popup.style.left = left + "px";
    popup.style.top = top + "px";
    if (link.dataset.lang === "pt") speakPt(trans);
    else speak(trans);
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => popup.classList.remove("visible"), 2200);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  App.init();
  initWordPopup();
});
