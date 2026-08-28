const LANG = { code: "it-IT", name: "italiano", flag: "🇮🇹" };
const STORAGE_KEY = "italolingo_state";
const MASTERY_ROUNDS = 4;
const MAX_HEARTS = 5;
const SRS_INTERVALS = [600000, 86400000, 259200000, 604800000, 1209600000, 2592000000, 7776000000];
const SRS_LABELS = ["10 min", "1 dia", "3 dias", "7 dias", "14 dias", "30 dias", "90 dias"];
const XP_TABLE = { select_it: 10, select_pt: 10, construct: 10, fill: 10, listen: 20, dictation: 15, speaking: 20 };

const State = {
  xp: 0,
  streak: 0,
  dailyXP: 0,
  completedLessons: [],
  mastery: {},
  lastPlayed: null,
  theme: "light",
  hearts: MAX_HEARTS,
  srs: {},
  tests: {},
  certificates: {},
  listenRate: 1,
  unitBonuses: [],

  load() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    this.xp = data.xp || 0;
    this.streak = data.streak || 0;
    this.completedLessons = data.completedLessons || [];
    this.mastery = data.mastery || {};
    this.dailyXP = data.dailyXP || 0;
    this.lastPlayed = data.lastPlayed;
    this.theme = data.theme || "light";
    this.hearts = typeof data.hearts === "number" ? data.hearts : MAX_HEARTS;
    this.srs = data.srs || {};
    this.tests = data.tests || {};
    this.certificates = data.certificates || {};
    this.listenRate = data.listenRate || 1;
    this.unitBonuses = data.unitBonuses || [];

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
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      xp: this.xp, streak: this.streak,
      dailyXP: this.dailyXP, completedLessons: this.completedLessons,
      mastery: this.mastery, lastPlayed: this.lastPlayed, theme: this.theme,
      hearts: this.hearts, srs: this.srs, tests: this.tests,
      certificates: this.certificates, listenRate: this.listenRate,
      unitBonuses: this.unitBonuses
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

  setListenRate(rate) {
    this.listenRate = rate;
    this.save();
  },

  loseHeart() {
    if (this.hearts > 0) this.hearts--;
    this.save();
    this.updateUI();
    return this.hearts;
  },

  refillHearts() {
    this.hearts = MAX_HEARTS;
    this.save();
    this.updateUI();
  },

  registerWord(w) {
    const k = dictKey(w.it);
    if (!k) return;
    if (!this.srs[k]) {
      this.srs[k] = { it: w.it, pt: w.pt, stage: 0, next: Date.now() + SRS_INTERVALS[0] };
    }
  },

  answerWord(it, correct) {
    const k = dictKey(it);
    if (!k) return;
    if (!this.srs[k]) {
      this.registerWord({ it, pt: "" });
    }
    const e = this.srs[k];
    if (correct) {
      e.stage = Math.min(e.stage + 1, SRS_INTERVALS.length - 1);
    } else {
      e.stage = 0;
    }
    e.next = Date.now() + SRS_INTERVALS[e.stage];
    this.save();
  },

  getDue() {
    const now = Date.now();
    return Object.values(this.srs).filter(e => e.next <= now);
  },

  dueCount() {
    return this.getDue().length;
  },

  recordTest(levelId, score) {
    let tier = null;
    if (score >= 95) tier = "Excelência";
    else if (score >= 85) tier = "Domínio";
    else if (score >= 70) tier = "Aprovado";

    if (tier) {
      this.tests[levelId] = { score, tier, passed: true };
      this.certificates[levelId] = { tier, date: new Date().toLocaleDateString("pt-BR") };
    } else {
      const prev = this.tests[levelId];
      this.tests[levelId] = { score, passed: false, tier: prev && prev.passed ? prev.tier : null };
    }
    this.save();
    return tier;
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

    const heartsEl = document.getElementById("stat-hearts");
    if (heartsEl) {
      heartsEl.textContent = this.hearts;
      heartsEl.classList.toggle("low", this.hearts <= 1);
    }
    set("lesson-hearts-display", this.hearts);

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

    const reviewBtn = document.getElementById("btn-review");
    if (reviewBtn) {
      const due = this.dueCount();
      reviewBtn.textContent = due > 0 ? `🔁 Revisar (${due})` : "🔁 Revisar";
    }
  }
};

function voiceFor(lang) {
  const voices = speechSynthesis.getVoices();
  return voices.find(v => v.lang === lang) || voices.find(v => v.lang.startsWith(lang.split("-")[0])) || null;
}

function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = LANG.code;
  const voice = voiceFor(LANG.code);
  if (voice) utter.voice = voice;
  utter.rate = 0.9 * (State.listenRate || 1);
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

function speakPt(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "pt-BR";
  const voice = voiceFor("pt-BR");
  if (voice) utter.voice = voice;
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

function normalizeFlat(s) {
  return normalize(s).replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}

function similarity(a, b) {
  const ta = normalizeFlat(a).split(" ").filter(Boolean);
  const tb = normalizeFlat(b).split(" ").filter(Boolean);
  if (!tb.length) return 0;
  let hits = 0;
  const pool = [...tb];
  ta.forEach(tok => {
    const i = pool.indexOf(tok);
    if (i > -1) {
      hits++;
      pool.splice(i, 1);
    }
  });
  return hits / tb.length;
}
