const LEVEL_META = {
  a1: { title: "A1 · Iniciante", desc: "Primeiras palavras e frases", icon: "🌱", color: "#58cc02", hours: 100 },
  a2: { title: "A2 · Básico", desc: "Situações do dia a dia", icon: "🌿", color: "#1cb0f6", hours: 100 },
  b1: { title: "B1 · Intermediário", desc: "Opiniões, passado e rotina", icon: "🌳", color: "#ce82ff", hours: 200 },
  b2: { title: "B2 · Intermediário Superior", desc: "Fluência funcional", icon: "🌲", color: "#ffc800", hours: 100 },
  c1: { title: "C1 · Avançado", desc: "Expressões, debates e nuances", icon: "🏔️", color: "#ff4b4b", hours: 100 },
  c2: { title: "C2 · Fluente", desc: "Domínio total da língua", icon: "👑", color: "#f5a623", hours: 100 }
};

const LESSON_SIZE = 8;

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function getMergedContent() {
  const merged = {};
  const extra = typeof EXTRA_CONTENT !== "undefined" ? EXTRA_CONTENT : {};
  const ids = new Set([...Object.keys(CONTENT), ...Object.keys(extra)]);
  ids.forEach(lid => {
    merged[lid] = { ...(CONTENT[lid] || {}), ...(extra[lid] || {}) };
  });
  return merged;
}

function getMergedPhrases() {
  const merged = {};
  const extra = typeof EXTRA_PHRASES !== "undefined" ? EXTRA_PHRASES : {};
  const ids = new Set([...Object.keys(PHRASES), ...Object.keys(extra)]);
  ids.forEach(lid => {
    merged[lid] = [...(PHRASES[lid] || []), ...(extra[lid] || [])];
  });
  return merged;
}

function buildLevels() {
  const mergedContent = getMergedContent();
  const mergedPhrases = getMergedPhrases();
  const levels = [];

  Object.keys(LEVEL_META).forEach(lid => {
    const meta = LEVEL_META[lid];
    const topics = mergedContent[lid] || {};
    const phraseBank = mergedPhrases[lid] || [];
    let phraseCursor = 0;

    const units = Object.keys(topics).map((topicName, tIdx) => {
      const wordPairs = topics[topicName];
      const wordChunks = chunk(wordPairs, LESSON_SIZE);

      const lessons = wordChunks.map((wc, cIdx) => {
        const words = wc.map(([it, pt]) => ({ it, pt }));
        const phrases = [];
        if (phraseBank.length > 0) {
          const p = phraseBank[phraseCursor % phraseBank.length];
          phrases.push({ it: p[0], pt: p[1] });
          phraseCursor++;
        }
        return {
          id: `${lid}_t${tIdx}_l${cIdx}`,
          title: cIdx === 0 ? topicName : `${topicName} ${cIdx + 1}`,
          icon: topicIcon(topicName),
          words,
          phrases
        };
      });

      return { id: `${lid}_u${tIdx}`, title: topicName, lessons };
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

function topicIcon(name) {
  const icons = {
    "Saudações": "👋", "Apresentações": "🗣️", "Família": "👪", "Números": "🔢",
    "Cores": "🎨", "Comida": "🍕", "Bebidas": "🥤", "Animais": "🐶",
    "Casa": "🏠", "Dias": "📅", "Verbos": "⚙️", "Adjetivos": "✨",
    "Roupas": "👕", "Corpo": "🫀", "Viagem": "✈️", "Transporte": "🚆",
    "Hotel": "🏨", "Clima": "🌤️", "Rotina": "⏰", "Compras": "🛍️",
    "Cidade": "🏙️", "Hobbies": "🎮", "Esportes": "⚽", "Sentimentos": "💖",
    "Saúde": "🏥", "Horas": "⌚", "Trabalho": "💼", "Profissões": "👨‍⚕️",
    "Educação": "🎓", "Opiniões": "💬", "Passado": "🕰️", "Emoções": "🎭",
    "Relacionamentos": "❤️", "Tecnologia": "💻", "Meio Ambiente": "🌍", "Cozinha": "🍳",
    "Festas": "🎉", "Sociedade": "🏛️", "Economia": "📊", "Futuro": "🔮",
    "Subjuntivo": "🤔", "Arte": "🖼️", "Ciência": "🔬", "Mídia": "📰",
    "Expressões Idiomáticas": "🎪", "Negócios": "📈", "Argumentação": "⚖️",
    "Literatura": "📚", "Psicologia": "🧠", "Filosofia": "🏺", "Nuances": "✨",
    "Gírias": "🗯️", "Retórica": "🎤", "Acadêmico": "🎓", "Provérbios": "📜",
    "Frutas": "🍎", "Vegetais": "🥦", "Objetos": "🔑", "Ações": "🏃",
    "Restaurante": "🍽️", "Natureza": "🌳", "Direções": "🧭", "Avere": "💡",
    "Emergências": "🚨", "Móveis": "🛋️", "Remoto": "💻", "Sistema": "🏫",
    "Criativos": "🎨", "História": "🏛️", "Religião": "⛪", "Política": "🗳️",
    "Ambiente": "♻️", "Direito": "⚖️", "Pronúncia": "🗣️"
  };
  for (const key of Object.keys(icons)) {
    if (name.includes(key)) return icons[key];
  }
  return "📖";
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
