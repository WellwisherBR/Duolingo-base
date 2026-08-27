const MASTERY_ROUNDS = 4;

const State = {
  xp: 0,
  streak: 0,
  dailyXP: 0,
  completedLessons: [],
  mastery: {},
  lastPlayed: null,
  theme: "light",

  load() {
    const data = JSON.parse(localStorage.getItem("italolingo_state") || "{}");
    this.xp = data.xp || 0;
    this.streak = data.streak || 0;
    this.completedLessons = data.completedLessons || [];
    this.mastery = data.mastery || {};
    this.dailyXP = data.dailyXP || 0;
    this.lastPlayed = data.lastPlayed;
    this.theme = data.theme || "light";

    const today = new Date().toDateString();
    if (this.lastPlayed !== today) {
      this.dailyXP = 0;
      if (this.lastPlayed) {
        const last = new Date(this.lastPlayed);
        const diff = Math.floor((new Date(today) - last) / 86400000);
        if (diff > 1) this.streak = 0;
      }
      this.lastPlayed = today;
      this.save();
    }
    this.applyTheme();
    this.updateUI();
  },

  save() {
    localStorage.setItem("italolingo_state", JSON.stringify({
      xp: this.xp, streak: this.streak,
      dailyXP: this.dailyXP, completedLessons: this.completedLessons,
      mastery: this.mastery, lastPlayed: this.lastPlayed, theme: this.theme
    }));
  },

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    this.applyTheme();
    this.save();
  },

  applyTheme() {
    document.documentElement.setAttribute("data-theme", this.theme);
    const btn = document.getElementById("btn-theme");
    if (btn) btn.textContent = this.theme === "dark" ? "☀️" : "🌙";
  },

  addXP(amount) {
    this.xp += amount;
    this.dailyXP += amount;
    this.save();
    this.updateUI();
  },

  completeLesson(id) {
    if (!this.completedLessons.includes(id)) {
      this.completedLessons.push(id);
    }
    this.bumpMastery(id);
    this.save();
  },

  bumpMastery(id) {
    const current = this.mastery[id] || 0;
    if (current < MASTERY_ROUNDS) this.mastery[id] = current + 1;
  },

  getLessonMastery(id) {
    return this.mastery[id] || 0;
  },

  isUnlocked(lessonId) {
    const order = getOrderedLessons();
    const idx = order.indexOf(lessonId);
    if (idx === -1) return false;
    if (idx === 0) return true;
    return this.completedLessons.includes(order[idx - 1]);
  },

  getFluency() {
    const order = getOrderedLessons();
    if (order.length === 0) return 0;
    let earned = 0;
    order.forEach(id => { earned += this.getLessonMastery(id); });
    const max = order.length * MASTERY_ROUNDS;
    return Math.round((earned / max) * 100);
  },

  getLevelHours(levelId) {
    const level = LEVELS.find(l => l.id === levelId);
    if (!level) return { done: 0, target: 0 };
    const ids = getLevelLessonIds(levelId);
    const maxPoints = ids.length * MASTERY_ROUNDS;
    let earned = 0;
    ids.forEach(id => { earned += this.getLessonMastery(id); });
    const done = maxPoints > 0 ? (earned / maxPoints) * level.hours : 0;
    return { done: Math.round(done), target: level.hours };
  },

  getCompletedHours() {
    let total = 0;
    LEVELS.forEach(level => {
      total += this.getLevelHours(level.id).done;
    });
    return Math.round(total);
  },

  updateUI() {
    const set = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };
    const setWidth = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.style.width = val + "%";
    };

    set("stat-xp", this.xp + " XP");
    set("stat-streak", this.streak);

    const pct = Math.min((this.dailyXP / 50) * 100, 100);
    setWidth("daily-goal-fill", pct);
    set("daily-xp", this.dailyXP);

    setWidth("fluency-fill", this.getFluency());
    set("fluency-text", this.getFluency() + "%");

    const ring = document.getElementById("fluency-ring");
    if (ring) {
      const circ = 2 * Math.PI * 52;
      ring.style.strokeDashoffset = circ - (circ * this.getFluency() / 100);
    }
  }
};

function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "it-IT";
  utter.rate = 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

function speakPt(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "pt-BR";
  utter.rate = 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2500);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalize(s) {
  return s.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
