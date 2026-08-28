const LEVEL_META = {
  a1: { title: "A1 · Iniciante", desc: "Primeiras palavras e frases", icon: "🌱", color: "#58cc02", hours: 100 },
  a2: { title: "A2 · Básico", desc: "Situações do dia a dia", icon: "🌿", color: "#1cb0f6", hours: 100 },
  b1: { title: "B1 · Intermediário", desc: "Opiniões, passado e rotina", icon: "🌳", color: "#ce82ff", hours: 200 },
  b2: { title: "B2 · Intermediário Superior", desc: "Fluência funcional", icon: "🌲", color: "#ffc800", hours: 100 },
  c1: { title: "C1 · Avançado", desc: "Expressões, debates e nuances", icon: "🏔️", color: "#ff4b4b", hours: 100 },
  c2: { title: "C2 · Fluente", desc: "Domínio total da língua", icon: "👑", color: "#f5a623", hours: 100 }
};

function legacyToPhrase(pair) {
  let it = String(pair[0]).trim();
  let pt = String(pair[1]).trim();
  if (!/[.!?…]$/.test(it)) it = it.charAt(0).toUpperCase() + it.slice(1) + ".";
  else it = it.charAt(0).toUpperCase() + it.slice(1);
  pt = pt.charAt(0).toUpperCase() + pt.slice(1);
  if (!/[.!?…]$/.test(pt)) pt += ".";
  return { it, pt };
}

function convertLegacyContent() {
  const sources = [];
  if (typeof CONTENT !== "undefined") sources.push(CONTENT);
  if (typeof EXTRA_CONTENT !== "undefined") sources.push(EXTRA_CONTENT);
  const raw = [];
  const levelOrder = ["a1", "a2", "b1", "b2", "c1", "c2"];
  const unitCounters = { a1: 0, a2: 0, b1: 0, b2: 0, c1: 0, c2: 0 };
  const icons = ["📖", "🗣️", "🧩", "🏠", "🍝", "🎭", "🚆", "🛍️", "🎨", "🌍"];
  const lessonsByLevel = { a1: 5, a2: 6, b1: 7, b2: 8, c1: 9, c2: 10 };

  sources.forEach(src => {
    levelOrder.forEach(lid => {
      const lessons = src[lid];
      if (!lessons) return;
      const LESSONS_PER_TOPIC = lessonsByLevel[lid] || 5;
      Object.keys(lessons).forEach(title => {
        unitCounters[lid]++;
        const unitNum = unitCounters[lid];
        const pairs = lessons[title];
        const allPhrases = pairs
          .filter(p => String(p[0]).trim().split(/\s+/).length >= 2)
          .map(legacyToPhrase);

        const chunkSize = Math.max(1, Math.ceil(pairs.length / LESSONS_PER_TOPIC));
        const chunks = [];
        for (let i = 0; i < pairs.length; i += chunkSize) {
          chunks.push(pairs.slice(i, i + chunkSize));
        }

        chunks.forEach((chunk, cIdx) => {
          const words = chunk.map(p => ({ it: p[0], pt: p[1] }));
          const phrases = [];
          if (allPhrases.length > 0) {
            const phraseIdx = cIdx % allPhrases.length;
            if (cIdx < allPhrases.length) phrases.push(allPhrases[phraseIdx]);
          }
          raw.push({
            level: lid.toUpperCase(),
            unit: unitNum,
            lessonId: `${lid.toUpperCase()}-U${unitNum}L${cIdx + 1}`,
            title: chunks.length > 1 ? `${title} ${cIdx + 1}` : title,
            icon: icons[(unitNum - 1) % icons.length],
            words,
            phrases
          });
        });
      });
    });
  });
  return raw;
}

function getRawContent() {
  if (typeof RAW_CONTENT !== "undefined") return RAW_CONTENT;
  return convertLegacyContent();
}

function getRawContentExtra() {
  if (typeof RAW_CONTENT_EXTRA !== "undefined") return RAW_CONTENT_EXTRA;
  return [];
}

function buildLevels() {
  const allLessons = [...getRawContent(), ...getRawContentExtra()];
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
        const na = parseInt((a.lessonId.match(/L(\d+)$/) || [0, 0])[1]);
        const nb = parseInt((b.lessonId.match(/L(\d+)$/) || [0, 0])[1]);
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

function cleanWord(s) {
  return String(s).replace(/[^A-Za-zÀ-ÿ''-]/g, "");
}

function dictKey(s) {
  return cleanWord(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const DICT = { targetToPt: {}, ptToTarget: {} };

function addDict(map, key, val) {
  const k = dictKey(key);
  if (k && !map[k]) map[k] = val;
}

function alignTokens(targetText, ptText) {
  const t = targetText.split(/\s+/).map(cleanWord).filter(Boolean);
  const p = ptText.split(/\s+/).map(cleanWord).filter(Boolean);
  if (t.length === p.length && t.length > 1) {
    for (let i = 0; i < t.length; i++) {
      addDict(DICT.targetToPt, t[i], p[i]);
      addDict(DICT.ptToTarget, p[i], t[i]);
    }
  }
}

function buildDictionary() {
  getAllWords().forEach(w => {
    addDict(DICT.targetToPt, w.it, w.pt);
    addDict(DICT.ptToTarget, w.pt, w.it);
    alignTokens(w.it, w.pt);
  });
  LEVELS.forEach(level => level.units.forEach(unit => unit.lessons.forEach(lesson => {
    (lesson.phrases || []).forEach(p => {
      addDict(DICT.targetToPt, p.it, p.pt);
      addDict(DICT.ptToTarget, p.pt, p.it);
      alignTokens(p.it, p.pt);
    });
  })));
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function translatableHtml(text, sourceLang) {
  const map = sourceLang === "target" ? DICT.targetToPt : DICT.ptToTarget;
  const transLang = sourceLang === "target" ? "pt" : "target";
  return String(text).split(/(\s+)/).map(part => {
    if (!part.trim()) return escapeHtml(part);
    const clean = cleanWord(part);
    const trans = map[dictKey(clean)];
    if (!clean || !trans) return escapeHtml(part);
    return escapeHtml(part).replace(escapeHtml(clean), `<span class="word-link" data-trans="${escapeHtml(trans)}" data-lang="${transLang}">${escapeHtml(clean)}</span>`);
  }).join("");
}

buildDictionary();
