const LEVEL_META = {
  a1: { title: "A1 · Iniciante", desc: "Primeiras palavras e frases", icon: "🌱", color: "#58cc02", hours: 100 },
  a2: { title: "A2 · Básico", desc: "Situações do dia a dia", icon: "🌿", color: "#1cb0f6", hours: 100 },
  b1: { title: "B1 · Intermediário", desc: "Opiniões, passado e rotina", icon: "🌳", color: "#ce82ff", hours: 200 },
  b2: { title: "B2 · Intermediário Superior", desc: "Fluência funcional", icon: "🌲", color: "#ffc800", hours: 100 },
  c1: { title: "C1 · Avançado", desc: "Expressões, debates e nuances", icon: "🏔️", color: "#ff4b4b", hours: 100 },
  c2: { title: "C2 · Fluente", desc: "Domínio total da língua", icon: "👑", color: "#f5a623", hours: 100 }
};

function buildLevels() {
  const allLessons = [...RAW_CONTENT, ...(typeof RAW_CONTENT_EXTRA !== "undefined" ? RAW_CONTENT_EXTRA : [])];
  const levelKeys = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const levels = [];

  levelKeys.forEach(lk => {
    const lid = lk.toLowerCase();
    const meta = LEVEL_META[lid];
    if (!meta) return;

    const lessonsForLevel = allLessons.filter(l => l.level === lk);
    const unitMap = {};
    lessonsForLevel.forEach(l => {
      if (!unitMap[l.unit]) unitMap[l.unit] = [];
      unitMap[l.unit].push(l);
    });

    const units = Object.keys(unitMap).sort((a, b) => a - b).map(uKey => {
      const uLessons = unitMap[uKey];
      const sorted = uLessons.sort((a, b) => {
        const na = parseInt(a.lessonId.replace(/\D/g, "").slice(-1));
        const nb = parseInt(b.lessonId.replace(/\D/g, "").slice(-1));
        return na - nb;
      });

      return {
        id: `${lid}_u${uKey}`,
        title: sorted[0] ? sorted[0].title : `Unidade ${uKey}`,
        lessons: sorted.map(l => ({
          id: l.lessonId,
          title: l.title,
          icon: l.icon || "📖",
          words: l.words,
          phrases: l.phrases || []
        }))
      };
    });

    levels.push({
      id: lid,
      title: meta.title,
      desc: meta.desc,
      icon: meta.icon,
      color: meta.color,
      hours: meta.hours,
      units
    });
  });

  return levels;
}

const LEVELS = buildLevels();

function getAllUnits() {
  return LEVELS.flatMap(level => level.units.map(u => ({ ...u, levelId: level.id })));
}

function getLessonById(id) {
  for (const level of LEVELS) {
    for (const unit of level.units) {
      const lesson = unit.lessons.find(l => l.id === id);
      if (lesson) return lesson;
    }
  }
  return null;
}

function getLevelForLesson(id) {
  return LEVELS.find(level => level.units.some(u => u.lessons.some(l => l.id === id)));
}

function getAllWords() {
  const words = [];
  LEVELS.forEach(level => level.units.forEach(u => u.lessons.forEach(l => words.push(...l.words))));
  return words;
}

function getOrderedLessons() {
  const list = [];
  LEVELS.forEach(level => level.units.forEach(u => u.lessons.forEach(l => list.push(l.id))));
  return list;
}

function getFirstLessonId() {
  return getOrderedLessons()[0];
}

function getLevelLessonIds(levelId) {
  const level = LEVELS.find(l => l.id === levelId);
  if (!level) return [];
  const ids = [];
  level.units.forEach(u => u.lessons.forEach(l => ids.push(l.id)));
  return ids;
}

function getContentStats() {
  const lessons = getOrderedLessons().length;
  const words = getAllWords().length;
  let phrases = 0;
  LEVELS.forEach(l => l.units.forEach(u => u.lessons.forEach(ls => phrases += ls.phrases.length)));
  let totalHours = 0;
  LEVELS.forEach(l => totalHours += l.hours);
  return { lessons, words, phrases, totalHours };
}
