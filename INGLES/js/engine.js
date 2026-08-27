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

const Engine = {
  lesson: null,
  queue: [],
  currentIndex: 0,
  isPractice: false,
  selectedAnswer: null,
  selectedWords: [],
  mistakes: 0,

  start(lesson, isPractice = false) {
    this.lesson = lesson;
    this.isPractice = isPractice;
    this.currentIndex = 0;
    this.mistakes = 0;
    this.queue = this.generateExercises();

    const errEl = document.getElementById("lesson-errors-display");
    if (errEl) errEl.textContent = "0";
    document.getElementById("lesson-progress-bar").style.width = "0%";

    document.getElementById("dashboard").classList.remove("active");
    document.getElementById("lesson-screen").classList.add("active");
    this.render();
  },

  generateExercises() {
    const exs = [];
    const words = this.lesson.words;
    const phrases = this.lesson.phrases || [];

    words.forEach(w => {
      exs.push({ type: "select_it", data: w });
      exs.push({ type: "select_pt", data: w });
    });

    phrases.forEach(p => {
      exs.push({ type: "construct", data: p });
      exs.push({ type: "listen", data: p });
    });

    const target = Math.min(exs.length, 16);
    return shuffle(exs).slice(0, target);
  },

  render() {
    if (this.currentIndex >= this.queue.length) return this.finish();

    const ex = this.queue[this.currentIndex];
    const area = document.getElementById("lesson-area");
    const footer = document.getElementById("lesson-footer");
    const btn = document.getElementById("btn-action");

    footer.className = "lesson-footer";
    btn.textContent = "Verificar";
    btn.className = "btn btn-green btn-lg";
    btn.disabled = true;
    document.getElementById("feedback-area").classList.remove("visible");

    this.selectedAnswer = null;
    this.selectedWords = [];

    const progress = (this.currentIndex / this.queue.length) * 100;
    document.getElementById("lesson-progress-bar").style.width = progress + "%";

    if (ex.type === "select_it" || ex.type === "select_pt") this.renderSelect(ex, area);
    else if (ex.type === "construct") this.renderConstruct(ex, area);
    else if (ex.type === "listen") this.renderListen(ex, area);
  },

  renderSelect(ex, area) {
    const isItToPt = ex.type === "select_it";
    const question = isItToPt ? ex.data.it : ex.data.pt;
    const correct = isItToPt ? ex.data.pt : ex.data.it;

    const pool = isItToPt ? getAllWords().map(w => w.pt) : getAllWords().map(w => w.it);
    const options = shuffle([correct, ...shuffle(pool.filter(o => o !== correct)).slice(0, 3)]);

    area.innerHTML = `
      <h2 class="exercise-title">${isItToPt ? "Selecione a tradução em português" : "Selecione a palavra em inglês"}</h2>
      <div class="question-row">
        <button class="speaker-btn" onclick="speak('${question.replace(/'/g, "\\'")}')">🔊</button>
        <span class="question-text">${question}</span>
      </div>
      <div class="options-list">
        ${options.map(o => `<div class="option-card" data-val="${o}">${o}</div>`).join("")}
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
        <span class="question-text">${ex.data.pt}</span>
      </div>
      <div class="answer-area" id="answer-area"></div>
      <div class="word-bank" id="word-bank">
        ${bank.map(w => `<div class="word-tile" data-word="${w}">${w}</div>`).join("")}
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
    area.innerHTML = this.selectedWords.map(w => `<div class="word-tile">${w}</div>`).join("");
    document.getElementById("btn-action").disabled = this.selectedWords.length === 0;
  },

  renderListen(ex, area) {
    area.innerHTML = `
      <h2 class="exercise-title">O que você ouviu?</h2>
      <div class="question-row" style="justify-content:center; flex-direction:column;">
        <button class="speaker-btn" style="width:80px;height:80px;font-size:2.5rem" onclick="speak('${ex.data.it.replace(/'/g, "\\'")}')">🔊</button>
        <p style="color:var(--text-muted); margin-top:10px">Toque para ouvir</p>
      </div>
      <div class="options-list">
        ${shuffle([ex.data.it, ...shuffle(getAllWords().map(w => w.it).filter(w => w !== ex.data.it)).slice(0, 2)]).map(o => `<div class="option-card" data-val="${o}">${o}</div>`).join("")}
      </div>
    `;

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

  check() {
    const ex = this.queue[this.currentIndex];
    let isCorrect = false;
    let correctAnswer = "";

    if (ex.type === "select_it" || ex.type === "select_pt" || ex.type === "listen") {
      correctAnswer = ex.type === "select_it" ? ex.data.pt : ex.data.it;
      isCorrect = this.selectedAnswer === correctAnswer;
    } else if (ex.type === "construct") {
      correctAnswer = ex.data.it;
      isCorrect = this.selectedWords.join(" ") === correctAnswer;
    }

    const footer = document.getElementById("lesson-footer");
    const btn = document.getElementById("btn-action");
    const fbArea = document.getElementById("feedback-area");
    const fbTitle = document.getElementById("feedback-title");
    const fbDesc = document.getElementById("feedback-desc");
    const fbIcon = document.getElementById("feedback-icon");

    if (isCorrect) {
      footer.classList.add("success");
      fbIcon.textContent = "✅";
      fbTitle.textContent = "Muito bem!";
      fbDesc.textContent = "";
      btn.textContent = "Continuar";
      btn.className = "btn btn-green btn-lg";
      SFX.correct();
      setTimeout(() => speak(ex.data.it), 300);
    } else {
      footer.classList.add("error");
      fbIcon.textContent = "❌";
      fbTitle.textContent = "Resposta correta:";
      fbDesc.textContent = correctAnswer;
      btn.textContent = "Continuar";
      btn.className = "btn btn-red btn-lg";
      SFX.wrong();
      this.mistakes++;
      const errEl = document.getElementById("lesson-errors-display");
      if (errEl) errEl.textContent = this.mistakes;
    }

    fbArea.classList.add("visible");
    btn.disabled = true;
    setTimeout(() => this.next(), isCorrect ? 1200 : 2200);
  },

  next() {
    this.currentIndex++;
    this.render();
  },

  finish() {
    const area = document.getElementById("lesson-area");
    const footer = document.getElementById("lesson-footer");
    footer.style.display = "none";
    document.getElementById("lesson-progress-bar").style.width = "100%";

    const xpEarned = this.isPractice ? 5 : 15;
    State.addXP(xpEarned);

    const isReview = String(this.lesson.id).startsWith("review_");
    if (!this.isPractice) {
      State.completeLesson(this.lesson.id);
      State.streak++;
      State.save();
      State.updateUI();
    } else {
      if (!isReview) {
        State.bumpMastery(this.lesson.id);
        State.save();
        State.updateUI();
      }
      showToast("Prática concluída!");
    }

    const accuracy = this.mistakes === 0 ? "100%" : Math.max(0, Math.round(((this.queue.length - this.mistakes) / this.queue.length) * 100)) + "%";

    area.innerHTML = `
      <div class="result-screen">
        <div class="result-icon">${this.mistakes === 0 ? "🏆" : "🎉"}</div>
        <h2 class="result-title">Lição concluída!</h2>
        <div class="result-stats">
          <div class="result-stat">
            <div class="val">+${xpEarned}</div>
            <div class="label">XP Total</div>
          </div>
          <div class="result-stat">
            <div class="val">${accuracy}</div>
            <div class="label">Precisão</div>
          </div>
        </div>
        <button class="btn btn-green btn-lg" onclick="Engine.exit()">Continuar</button>
      </div>
    `;
  },

  exit() {
    document.getElementById("lesson-screen").classList.remove("active");
    document.getElementById("dashboard").classList.add("active");
    document.getElementById("lesson-footer").style.display = "flex";
    App.renderPath();
  }
};
