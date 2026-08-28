const SFX = {
  ctx: null,
  getCtx() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    return this.ctx;
  },
  correct() {
    const ctx = this.getCtx();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.type = "sine";
    o.frequency.setValueAtTime(523, ctx.currentTime);
    o.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
    o.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
    g.gain.setValueAtTime(0.3, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
    o.start(ctx.currentTime);
    o.stop(ctx.currentTime + 0.4);
  },
  wrong() {
    const ctx = this.getCtx();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.type = "square";
    o.frequency.setValueAtTime(200, ctx.currentTime);
    o.frequency.setValueAtTime(150, ctx.currentTime + 0.15);
    g.gain.setValueAtTime(0.2, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
    o.start(ctx.currentTime);
    o.stop(ctx.currentTime + 0.35);
  }
};

const SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
const SPEED_OPTIONS = [
  { rate: 0.75, icon: "🐢" },
  { rate: 1, icon: "🚶" },
  { rate: 1.25, icon: "🏃" },
  { rate: 1.5, icon: "🏎️" }
];

const Engine = {
  lesson: null,
  queue: [],
  currentIndex: 0,
  mode: "lesson",
  levelId: null,
  selectedAnswer: null,
  selectedWords: [],
  mistakes: 0,
  sessionXP: 0,

  start(lesson, mode = "lesson", levelId = null) {
    this.lesson = lesson;
    this.mode = mode;
    this.levelId = levelId;
    this.currentIndex = 0;
    this.mistakes = 0;
    this.sessionXP = 0;
    this.queue = this.generateExercises();

    if (this.mode === "lesson") {
      (this.lesson.words || []).forEach(w => State.registerWord(w));
    }

    const errEl = document.getElementById("lesson-errors-display");
    if (errEl) errEl.textContent = "0";
    document.getElementById("lesson-progress-bar").style.width = "0%";
    document.getElementById("lesson-progress-text").textContent = "0%";

    document.getElementById("dashboard").classList.remove("active");
    const simScreen = document.getElementById("sim-screen");
    if (simScreen) simScreen.classList.remove("active");
    document.getElementById("lesson-screen").classList.add("active");
    this.render();
  },

  generateExercises() {
    const exs = [];
    const words = this.lesson.words || [];
    const phrases = this.lesson.phrases || [];

    words.forEach(w => {
      exs.push({ type: "select_it", data: w });
      exs.push({ type: "select_pt", data: w });
    });

    phrases.forEach(p => {
      exs.push({ type: "construct", data: p });
      exs.push({ type: "listen", data: p });
      exs.push({ type: "dictation", data: p });
      exs.push({ type: "speaking", data: p });
      const fill = this.makeFill(p);
      if (fill) exs.push(fill);
    });

    let target = 16;
    if (this.mode === "challenge" || this.mode === "test") target = 20;
    if (this.mode === "review") target = Math.min(12, Math.max(exs.length, 1));

    const selected = shuffle(exs).slice(0, Math.min(target, exs.length));

    const ensure = type => {
      if (selected.some(e => e.type === type)) return;
      const pool = exs.filter(e => e.type === type);
      if (pool.length && selected.length) selected[selected.length - 1] = shuffle(pool)[0];
    };
    ensure("fill");
    if (this.mode === "test") {
      ensure("listen");
      ensure("dictation");
    }
    return selected;
  },

  render() {
    if (this.currentIndex >= this.queue.length) return this.finish();

    const ex = this.queue[this.currentIndex];
    const area = document.getElementById("lesson-area");
    const footer = document.getElementById("lesson-footer");
    const btn = document.getElementById("btn-action");

    footer.className = "lesson-footer";
    footer.style.display = "flex";
    btn.textContent = "Verificar";
    btn.className = "btn btn-green btn-lg";
    btn.disabled = true;
    document.getElementById("feedback-area").classList.remove("visible");

    this.selectedAnswer = null;
    this.selectedWords = [];

    const progress = Math.round(((this.currentIndex + 1) / this.queue.length) * 100);
    document.getElementById("lesson-progress-bar").style.width = progress + "%";
    document.getElementById("lesson-progress-text").textContent = progress + "%";

    if (ex.type === "select_it" || ex.type === "select_pt") this.renderSelect(ex, area);
    else if (ex.type === "construct") this.renderConstruct(ex, area);
    else if (ex.type === "listen") this.renderListen(ex, area);
    else if (ex.type === "fill") this.renderFill(ex, area);
    else if (ex.type === "dictation") this.renderDictation(ex, area);
    else if (ex.type === "speaking") this.renderSpeaking(ex, area);
  },

  speedPills(replayText) {
    return `<div class="speed-pills">${SPEED_OPTIONS.map(o =>
      `<button class="speed-pill ${State.listenRate === o.rate ? "active" : ""}" data-rate="${o.rate}" data-replay="${escapeHtml(replayText)}">${o.icon} ${o.rate}x</button>`
    ).join("")}</div>`;
  },

  bindSpeedPills(container) {
    container.querySelectorAll(".speed-pill").forEach(pill => {
      pill.onclick = () => {
        State.setListenRate(parseFloat(pill.dataset.rate));
        container.querySelectorAll(".speed-pill").forEach(p => p.classList.toggle("active", p === pill));
        speak(pill.dataset.replay);
      };
    });
  },

  renderSelect(ex, area) {
    const isItToPt = ex.type === "select_it";
    const question = isItToPt ? ex.data.it : ex.data.pt;
    const correct = isItToPt ? ex.data.pt : ex.data.it;

    const pool = isItToPt ? getAllWords().map(w => w.pt) : getAllWords().map(w => w.it);
    const options = shuffle([correct, ...shuffle(pool.filter(o => o !== correct)).slice(0, 3)]);

    area.innerHTML = `
      <h2 class="exercise-title">${isItToPt ? "Selecione a tradução em português" : `Selecione a palavra em ${LANG.name}`}</h2>
      <div class="question-row">
        <button class="speaker-btn" onclick="${isItToPt ? "speak" : "speakPt"}('${question.replace(/'/g, "\\'")}')">🔊</button>
        <span class="question-text">${translatableHtml(question, isItToPt ? "target" : "pt")}</span>
      </div>
      <div class="options-list">
        ${options.map(o => `<div class="option-card" data-val="${escapeHtml(o)}">${escapeHtml(o)}</div>`).join("")}
      </div>
    `;

    area.querySelectorAll(".option-card").forEach(card => {
      card.onclick = () => {
        area.querySelectorAll(".option-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        this.selectedAnswer = card.dataset.val;
        document.getElementById("btn-action").disabled = false;
        if (isItToPt) speakPt(card.dataset.val);
        else speak(card.dataset.val);
      };
    });
  },

  renderConstruct(ex, area) {
    const words = ex.data.it.split(" ");
    const bank = shuffle(words);

    area.innerHTML = `
      <h2 class="exercise-title">Traduza esta frase</h2>
      <div class="question-row">
        <button class="speaker-btn" onclick="speakPt('${ex.data.pt.replace(/'/g, "\\'")}')">🔊</button>
        <span class="question-text">${translatableHtml(ex.data.pt, "pt")}</span>
      </div>
      <div class="answer-area" id="answer-area"></div>
      <div class="word-bank" id="word-bank">
        ${bank.map(w => `<div class="word-tile" data-word="${escapeHtml(w)}">${escapeHtml(w)}</div>`).join("")}
      </div>
    `;

    area.querySelectorAll("#word-bank .word-tile").forEach(tile => {
      tile.onclick = () => {
        if (tile.classList.contains("selected")) return;
        tile.classList.add("selected");
        this.selectedWords.push(tile.dataset.word);
        this.updateConstructUI();
        speak(tile.dataset.word);
      };
    });

    document.getElementById("answer-area").onclick = (e) => {
      if (e.target.classList.contains("word-tile")) {
        const word = e.target.textContent;
        const idx = this.selectedWords.indexOf(word);
        if (idx > -1) {
          this.selectedWords.splice(idx, 1);
          const bankTile = Array.from(area.querySelectorAll("#word-bank .word-tile")).find(t => t.dataset.word === word && t.classList.contains("selected"));
          if (bankTile) bankTile.classList.remove("selected");
          this.updateConstructUI();
        }
      }
    };
  },

  updateConstructUI() {
    const area = document.getElementById("answer-area");
    area.innerHTML = this.selectedWords.map(w => `<div class="word-tile">${escapeHtml(w)}</div>`).join("");
    document.getElementById("btn-action").disabled = this.selectedWords.length === 0;
  },

  makeFill(p) {
    const tokens = p.it.split(/\s+/);
    const candidates = [];
    tokens.forEach((t, i) => {
      const clean = cleanWord(t);
      if (clean.length >= 3) candidates.push(i);
    });
    if (!candidates.length) return null;
    const blankIndex = candidates[Math.floor(Math.random() * candidates.length)];
    return { type: "fill", data: { full: p.it, pt: p.pt, tokens, blankIndex, answer: cleanWord(tokens[blankIndex]) } };
  },

  renderFill(ex, area) {
    const sentenceHtml = ex.data.tokens.map((token, i) => {
      if (i === ex.data.blankIndex) {
        const prefixMatch = token.match(/^[^A-Za-zÀ-ÿ'’-]+/);
        const suffixMatch = token.match(/[^A-Za-zÀ-ÿ'’-]+$/);
        const prefix = prefixMatch ? prefixMatch[0] : "";
        const suffix = suffixMatch ? suffixMatch[0] : "";
        const width = Math.max(4, ex.data.answer.length + 2);
        return `${escapeHtml(prefix)}<input type="text" id="fill-input" class="fill-input" autocomplete="off" style="width:${width}ch">${escapeHtml(suffix)}`;
      }
      return translatableHtml(token, "target");
    }).join(" ");

    area.innerHTML = `
      <h2 class="exercise-title">Complete a frase</h2>
      <div class="question-row">
        <button class="speaker-btn" onclick="speak('${ex.data.full.replace(/'/g, "\\'")}')">🔊</button>
        <span class="question-text">${translatableHtml(ex.data.pt, "pt")}</span>
      </div>
      <div class="fill-sentence">${sentenceHtml}</div>
    `;

    const input = document.getElementById("fill-input");
    input.addEventListener("input", () => {
      this.selectedAnswer = input.value.trim();
      document.getElementById("btn-action").disabled = !this.selectedAnswer;
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !document.getElementById("btn-action").disabled) this.check();
    });
    setTimeout(() => input.focus(), 100);
  },

  renderListen(ex, area) {
    area.innerHTML = `
      <h2 class="exercise-title">O que você ouviu?</h2>
      <div class="question-row" style="justify-content:center; flex-direction:column;">
        <button class="speaker-btn" style="width:80px;height:80px;font-size:2.5rem" onclick="speak('${ex.data.it.replace(/'/g, "\\'")}')">🔊</button>
        <p style="color:var(--text-muted); margin-top:10px">Toque para ouvir</p>
      </div>
      ${this.speedPills(ex.data.it)}
      <div class="options-list">
        ${shuffle([ex.data.it, ...shuffle(getAllWords().map(w => w.it).filter(w => w !== ex.data.it)).slice(0, 2)]).map(o => `<div class="option-card" data-val="${escapeHtml(o)}">${escapeHtml(o)}</div>`).join("")}
      </div>
    `;

    this.bindSpeedPills(area);
    setTimeout(() => speak(ex.data.it), 500);

    area.querySelectorAll(".option-card").forEach(card => {
      card.onclick = () => {
        area.querySelectorAll(".option-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        this.selectedAnswer = card.dataset.val;
        document.getElementById("btn-action").disabled = false;
        speak(card.dataset.val);
      };
    });
  },

  renderDictation(ex, area) {
    area.innerHTML = `
      <h2 class="exercise-title">✍️ Escreva o que você ouviu</h2>
      <div class="question-row" style="justify-content:center; flex-direction:column;">
        <button class="speaker-btn" style="width:80px;height:80px;font-size:2.5rem" onclick="speak('${ex.data.it.replace(/'/g, "\\'")}')">🔊</button>
        <p style="color:var(--text-muted); margin-top:10px">Toque para ouvir novamente</p>
      </div>
      ${this.speedPills(ex.data.it)}
      <div class="dictation-row">
        <input type="text" id="dictation-input" class="fill-input dictation-input" autocomplete="off" placeholder="Digite aqui...">
      </div>
    `;

    this.bindSpeedPills(area);
    const input = document.getElementById("dictation-input");
    input.addEventListener("input", () => {
      this.selectedAnswer = input.value.trim();
      document.getElementById("btn-action").disabled = !this.selectedAnswer;
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !document.getElementById("btn-action").disabled) this.check();
    });
    setTimeout(() => { speak(ex.data.it); input.focus(); }, 400);
  },

  renderSpeaking(ex, area) {
    area.innerHTML = `
      <h2 class="exercise-title">🗣️ Fale a frase</h2>
      <div class="question-row">
        <button class="speaker-btn" onclick="speak('${ex.data.it.replace(/'/g, "\\'")}')">🔊</button>
        <span class="question-text">${translatableHtml(ex.data.it, "target")}</span>
      </div>
      <p class="exercise-sub">Ouça e repita em voz alta</p>
      <button class="mic-btn" id="mic-btn">🎤</button>
      <p class="mic-status" id="mic-status">${SR ? "Toque no microfone e fale" : "Reconhecimento de voz indisponível — digite a frase abaixo"}</p>
      <div id="speaking-fallback" class="${SR ? "hidden" : ""}">
        <div class="dictation-row">
          <input type="text" id="speaking-input" class="fill-input dictation-input" autocomplete="off" placeholder="Digite a frase...">
        </div>
      </div>
    `;

    const micBtn = document.getElementById("mic-btn");
    if (SR) micBtn.onclick = () => this.listenSpeech(ex);
    else micBtn.classList.add("disabled");

    const input = document.getElementById("speaking-input");
    if (input) {
      input.addEventListener("input", () => {
        this.selectedAnswer = input.value.trim();
        document.getElementById("btn-action").disabled = !this.selectedAnswer;
      });
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !document.getElementById("btn-action").disabled) this.check();
      });
      setTimeout(() => input.focus(), 100);
    }

    setTimeout(() => speak(ex.data.it), 400);
  },

  listenSpeech(ex) {
    const btn = document.getElementById("mic-btn");
    const status = document.getElementById("mic-status");
    const rec = new SR();
    rec.lang = LANG.code;
    rec.interimResults = false;
    rec.maxAlternatives = 1;

    btn.classList.add("recording");
    status.textContent = "Ouvindo...";

    rec.onresult = (ev) => {
      const said = ev.results[0][0].transcript;
      this.selectedAnswer = said;
      btn.classList.remove("recording");
      status.textContent = "Você disse: \"" + said + "\"";
      document.getElementById("btn-action").disabled = false;
      setTimeout(() => this.check(), 500);
    };

    rec.onerror = (ev) => {
      btn.classList.remove("recording");
      if (ev.error === "not-allowed" || ev.error === "service-not-allowed") {
        status.textContent = "Microfone bloqueado — digite a frase abaixo";
        const fb = document.getElementById("speaking-fallback");
        if (fb) fb.classList.remove("hidden");
        const input = document.getElementById("speaking-input");
        if (input) input.focus();
      } else {
        status.textContent = "Não consegui ouvir. Tente novamente.";
      }
    };

    rec.onend = () => btn.classList.remove("recording");

    try {
      rec.start();
    } catch (e) {
      status.textContent = "Digite a frase abaixo";
      const fb = document.getElementById("speaking-fallback");
      if (fb) fb.classList.remove("hidden");
    }
  },

  check() {
    const ex = this.queue[this.currentIndex];
    let isCorrect = false;
    let correctAnswer = "";
    let extraNote = "";

    if (ex.type === "select_it" || ex.type === "select_pt" || ex.type === "listen") {
      correctAnswer = ex.type === "select_it" ? ex.data.pt : ex.data.it;
      isCorrect = this.selectedAnswer === correctAnswer;
    } else if (ex.type === "construct") {
      correctAnswer = ex.data.it;
      isCorrect = this.selectedWords.join(" ") === correctAnswer;
    } else if (ex.type === "fill") {
      correctAnswer = ex.data.answer;
      isCorrect = normalize(cleanWord(this.selectedAnswer || "")) === normalize(cleanWord(correctAnswer));
    } else if (ex.type === "dictation") {
      correctAnswer = ex.data.it;
      isCorrect = normalizeFlat(this.selectedAnswer || "") === normalizeFlat(correctAnswer);
    } else if (ex.type === "speaking") {
      correctAnswer = ex.data.it;
      const score = similarity(this.selectedAnswer || "", correctAnswer);
      isCorrect = score >= 0.6;
      extraNote = this.selectedAnswer ? `Você disse: "${this.selectedAnswer}"` : "";
    }

    const isWordEx = ex.type === "select_it" || ex.type === "select_pt";
    if (isWordEx) State.answerWord(ex.data.it, isCorrect);

    const footer = document.getElementById("lesson-footer");
    const btn = document.getElementById("btn-action");
    const fbArea = document.getElementById("feedback-area");
    const fbTitle = document.getElementById("feedback-title");
    const fbDesc = document.getElementById("feedback-desc");
    const fbIcon = document.getElementById("feedback-icon");

    const xp = XP_TABLE[ex.type] || 10;

    if (isCorrect) {
      this.sessionXP += xp;
      State.addXP(xp);
      footer.classList.add("success");
      fbIcon.textContent = "✅";
      fbTitle.textContent = `Muito bem! +${xp} XP`;
      fbDesc.textContent = extraNote;
      btn.textContent = "Continuar";
      btn.className = "btn btn-green btn-lg";
      SFX.correct();
      setTimeout(() => {
        if (ex.type === "select_it") speakPt(ex.data.pt);
        else if (ex.type === "fill") speak(ex.data.full);
        else if (ex.type !== "speaking") speak(ex.data.it);
      }, 300);
    } else {
      footer.classList.add("error");
      fbIcon.textContent = "❌";
      fbTitle.textContent = "Resposta correta:";
      fbDesc.textContent = correctAnswer + (extraNote ? ` · ${extraNote}` : "");
      btn.textContent = "Continuar";
      btn.className = "btn btn-red btn-lg";
      SFX.wrong();
      setTimeout(() => {
        if (ex.type === "select_it") speakPt(correctAnswer);
        else speak(correctAnswer);
      }, 300);
      this.mistakes++;
      const errEl = document.getElementById("lesson-errors-display");
      if (errEl) errEl.textContent = this.mistakes;

      if (this.mode === "lesson" || this.mode === "challenge") {
        const left = State.loseHeart();
        if (left <= 0) {
          fbArea.classList.add("visible");
          setTimeout(() => this.outOfHearts(), 1200);
          return;
        }
      }
    }

    fbArea.classList.add("visible");
    btn.disabled = true;
    setTimeout(() => this.next(), isCorrect ? 1200 : 2200);
  },

  outOfHearts() {
    const area = document.getElementById("lesson-area");
    document.getElementById("lesson-footer").style.display = "none";
    area.innerHTML = `
      <div class="result-screen">
        <div class="result-icon">💔</div>
        <h2 class="result-title">Suas vidas acabaram!</h2>
        <p class="result-sub">Faça uma revisão para recuperar suas vidas.</p>
        <button class="btn btn-green btn-lg" onclick="App.startHeartRecovery()">🔁 Fazer revisão</button>
        <button class="btn btn-blue btn-lg" onclick="Engine.exit()" style="margin-top:10px">Sair</button>
      </div>
    `;
  },

  next() {
    this.currentIndex++;
    this.render();
  },

  finish() {
    if (this.mode === "test") return this.finishTest();

    const area = document.getElementById("lesson-area");
    const footer = document.getElementById("lesson-footer");
    footer.style.display = "none";
    document.getElementById("lesson-progress-bar").style.width = "100%";
    document.getElementById("lesson-progress-text").textContent = "100%";

    const isReview = String(this.lesson.id).startsWith("review_");

    if (this.mode === "lesson") {
      State.completeLesson(this.lesson.id);
      State.streak++;
      State.save();
      this.awardUnitBonus();
      State.updateUI();
    } else if (this.mode === "challenge") {
      this.sessionXP += 50;
      State.addXP(50);
      State.bumpMastery(this.lesson.id);
      State.save();
      State.updateUI();
      showToast("🎮 Desafio concluído! +50 XP");
    } else if (this.mode === "review" || this.mode === "practice") {
      if (!isReview) State.bumpMastery(this.lesson.id);
      if (State.hearts < MAX_HEARTS) {
        State.refillHearts();
        showToast("❤️ Vidas recuperadas!");
      } else {
        showToast("Revisão concluída!");
      }
      State.save();
      State.updateUI();
    }

    const accuracy = this.mistakes === 0 ? "100%" : Math.max(0, Math.round(((this.queue.length - this.mistakes) / this.queue.length) * 100)) + "%";
    const dueLeft = State.dueCount();

    area.innerHTML = `
      <div class="result-screen">
        <div class="result-icon">${this.mistakes === 0 ? "🏆" : "🎉"}</div>
        <h2 class="result-title">${this.mode === "challenge" ? "Desafio concluído!" : (this.mode === "review" ? "Revisão concluída!" : "Lição concluída!")}</h2>
        <div class="result-stats">
          <div class="result-stat">
            <div class="val">+${this.sessionXP}</div>
            <div class="label">XP ganho</div>
          </div>
          <div class="result-stat">
            <div class="val">${accuracy}</div>
            <div class="label">Precisão</div>
          </div>
          <div class="result-stat">
            <div class="val">${dueLeft}</div>
            <div class="label">palavras p/ revisar</div>
          </div>
        </div>
        <button class="btn btn-green btn-lg" onclick="Engine.exit()">Continuar</button>
      </div>
    `;
  },

  awardUnitBonus() {
    for (const level of LEVELS) {
      for (const unit of level.units) {
        if (!unit.lessons.some(l => l.id === this.lesson.id)) continue;
        const ids = unit.lessons.map(l => l.id);
        if (ids.every(id => State.completedLessons.includes(id)) && !State.unitBonuses.includes(unit.id)) {
          State.unitBonuses.push(unit.id);
          State.addXP(100);
          this.sessionXP += 100;
          State.save();
          showToast("🏆 Unidade concluída! +100 XP");
        }
      }
    }
  },

  finishTest() {
    const area = document.getElementById("lesson-area");
    document.getElementById("lesson-footer").style.display = "none";
    document.getElementById("lesson-progress-bar").style.width = "100%";
    document.getElementById("lesson-progress-text").textContent = "100%";

    const total = this.queue.length;
    const score = total > 0 ? Math.round(((total - this.mistakes) / total) * 100) : 0;
    const tier = State.recordTest(this.levelId, score);

    if (tier) {
      SFX.correct();
      area.innerHTML = `
        <div class="result-screen">
          <div class="result-icon">🏆</div>
          <h2 class="result-title">Prova concluída!</h2>
          <div class="result-stats">
            <div class="result-stat">
              <div class="val">${score}%</div>
              <div class="label">pontuação</div>
            </div>
            <div class="result-stat">
              <div class="val">${tier}</div>
              <div class="label">resultado</div>
            </div>
          </div>
          <p class="result-sub">${tier === "Excelência" ? "Desempenho perfeito! 🌟" : tier === "Domínio" ? "Excelente domínio do nível!" : "Você foi aprovado neste nível!"}</p>
          <button class="btn btn-green btn-lg" onclick="App.openCerts('${this.levelId}')">🎓 Ver certificado</button>
          <button class="btn btn-blue btn-lg" onclick="Engine.exit()" style="margin-top:10px">Continuar</button>
        </div>
      `;
    } else {
      SFX.wrong();
      area.innerHTML = `
        <div class="result-screen">
          <div class="result-icon">📝</div>
          <h2 class="result-title">Quase lá...</h2>
          <div class="result-stats">
            <div class="result-stat">
              <div class="val">${score}%</div>
              <div class="label">pontuação</div>
            </div>
            <div class="result-stat">
              <div class="val">70%</div>
              <div class="label">mínimo</div>
            </div>
          </div>
          <p class="result-sub">Revise as lições e tente novamente.</p>
          <button class="btn btn-green btn-lg" onclick="App.startTest('${this.levelId}')">Tentar novamente</button>
          <button class="btn btn-blue btn-lg" onclick="Engine.exit()" style="margin-top:10px">Sair</button>
        </div>
      `;
    }
  },

  exit() {
    document.getElementById("lesson-screen").classList.remove("active");
    document.getElementById("dashboard").classList.add("active");
    document.getElementById("lesson-footer").style.display = "flex";
    App.renderPath();
    App.renderStats();
    State.updateUI();
  }
};
