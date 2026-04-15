// ─────────────────────────────────────────────
//  QUIZ
// ─────────────────────────────────────────────
const questions = [
  {
    question: "Quem é o mais lindo que você conhece?",
    answers: ["Eu", "O homem do seu lado", "Eu, óbvio"]
  },
  {
    question: "Você está apaixonada nesse cara lindo?",
    answers: ["Tô perdidamente 💘", "Como não estar?", "Ele é irresistível"]
  },
  {
    question: "Se eu fosse um miojo de feijão...",
    answers: ["Me comeria(laele)", "Me amassaria", "Nossa que gostoso (Eu sei, rs)"]
  },
  {
    question: "Agora para desbloquear a melhor parte você precisa dar um beijinho no homem mais gostoso, lindo, forte, maromba, atleta, perfeito que você encontrar.",
    answers: ["*dando beijinho* 😘", "Te quero Muitooo 💕", "Esse homem sou eu!"]
  }
];

let currentQuestion = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.answers.forEach(a => {
    const btn = document.createElement("button");
    btn.innerText = a;
    btn.onclick = nextQuestion;
    answersDiv.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quizContainer").classList.add("hidden");
    const memorial = document.getElementById("memorial");
    memorial.classList.remove("hidden");
    initBook();
  }
}

window.onload = showQuestion;

// Ativar música no primeiro clique
document.addEventListener("click", () => {
  const audio = document.getElementById("bgMusic");
  if (audio && audio.muted) {
    audio.muted = false;
    audio.play().catch(() => {});
  }
}, { once: true });


// ─────────────────────────────────────────────
//  PÁGINAS DO LIVRO
//  Para adicionar fotos:  { type: "photo", src: "assets/foto8.jpeg", caption: "Sua legenda aqui" }
//  Para adicionar vídeos: { type: "video", src: "assets/video1.mp4", caption: "Legenda do vídeo" }
//  Para remover legenda:  basta não incluir o campo caption (ou deixar vazio "")
// ─────────────────────────────────────────────
const pages = [
  // Capa
  { type: "cover" },

  // Fotos com legendas
  { type: "video", src: "assets/video3.mp4", caption: "O começo de tudo 💕" },
  { type: "photo", src: "assets/foto1.jpeg", caption: "" },
  { type: "photo", src: "assets/foto2.jpeg", caption: "" },
  { type: "photo", src: "assets/foto3.jpeg", caption: "" },
  { type: "photo", src: "assets/foto4.png",  caption: "" },
  { type: "photo", src: "assets/foto5.jpeg", caption: "Perdidamente apaixonado por essa mulher" },
  { type: "photo", src: "assets/foto6.png",  caption: "" },
  { type: "photo", src: "assets/foto7.jpeg", caption: "EEEEEE cachaça" },
  { type: "photo", src: "assets/foto8.jpeg", caption: "" },
  { type: "video", src: "assets/video2.mp4", caption: "" },
  { type: "photo", src: "assets/foto9.jpeg", caption: "" },
  { type: "photo", src: "assets/foto10.jpeg", caption: "" },
  { type: "photo", src: "assets/foto11.jpeg", caption: "" },
  { type: "video", src: "assets/video1.mp4", caption: "?" },
  { type: "photo", src: "assets/foto12.jpeg", caption: "Nóis de jumento" },
  { type: "photo", src: "assets/foto13.jpeg", caption: "Nossa primeira fotinha nos storys" },
  { type: "photo", src: "assets/foto14.jpeg", caption: "Dieta" },
  { type: "photo", src: "assets/foto15.jpeg", caption: "Faço fisioterapia e sou feliz" },
  { type: "photo", src: "assets/foto16.jpeg", caption: "Eu peço para fazer uma massagem" },
  { type: "photo", src: "assets/foto17.jpeg", caption: "Dia feliz" },
  { type: "photo", src: "assets/foto18.jpeg", caption: "Nosso lugar" },
  { type: "photo", src: "assets/foto19.jpeg", caption: "Podia ter postado essa" },
  { type: "photo", src: "assets/foto20.jpeg", caption: "💘" },
  { type: "photo", src: "assets/foto21.jpeg", caption: "GostosAAAAAAAAAAAA" },
  { type: "photo", src: "assets/foto22.jpeg", caption: "Gosto muito de vir aqui" },
  { type: "photo", src: "assets/foto23.jpeg", caption: "EuSiDivirto" },
  { type: "photo", src: "assets/foto24.jpeg", caption: "babylo" },
  { type: "photo", src: "assets/foto25.jpeg", caption: "" },
  { type: "photo", src: "assets/foto26.jpeg", caption: "grinch" },
  { type: "photo", src: "assets/foto27.jpeg", caption: "Vai me comer?" },
  { type: "photo", src: "assets/foto28.jpeg", caption: "" },
  { type: "photo", src: "assets/foto29.jpeg", caption: "" },
  { type: "photo", src: "assets/foto30.jpeg", caption: "" },
  { type: "video", src: "assets/video4.mp4", caption: "Muito nadador" },
  { type: "photo", src: "assets/foto31.jpeg", caption: "" },
  { type: "photo", src: "assets/foto32.jpeg", caption: "Nóis no TETEL rs" },
  { type: "video", src: "assets/video5.mp4", caption: "Tatuaria em meus pensamentos" },

  // Exemplo de vídeo — substitua o src pelo caminho real
  // { type: "video", src: "assets/video1.mp4", caption: "Um momento especial em movimento 🎬" },

  // Última página
  { type: "final" }
];


// ─────────────────────────────────────────────
//  LIVRO
// ─────────────────────────────────────────────
let currentPage = 0;
let isAnimating = false;

function initBook() {
  const book = document.getElementById("book");
  book.innerHTML = "";

  pages.forEach((p, i) => {
    const page = document.createElement("div");
    page.className = "page" + (i === 0 ? " active" : "");
    page.id = "page-" + i;

    if (p.type === "cover") {
      page.innerHTML = `
        <div class="page-cover">
          <span class="cover-heart">💖</span>
          <h2>Altar da onça pintuda & professor linguiça</h2>
          <p>Nossa história em imagens</p>
        </div>`;
    } else if (p.type === "final") {
      page.innerHTML = `
        <div class="page-final">
          <span style="font-size:2.5rem">💘</span>
          <h2>Fim? Nunca.</h2>
          <p>Cada foto é só um pedacinho<br>do tanto que te amo.</p>
        </div>`;
    } else if (p.type === "photo") {
      page.innerHTML = `
        <div class="page-inner">
          <span class="page-number">Página ${i} de ${pages.length - 1}</span>
          <div class="page-media">
            <img src="${p.src}" alt="foto ${i}" loading="lazy" />
          </div>
          ${p.caption ? `<p class="page-caption">${p.caption}</p>` : ""}
        </div>`;
    } else if (p.type === "video") {
      page.innerHTML = `
        <div class="page-inner">
          <span class="page-number">Página ${i} de ${pages.length - 1}</span>
          <div class="page-media">
            <video controls playsinline preload="metadata">
              <source src="${p.src}" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>
          ${p.caption ? `<p class="page-caption">${p.caption}</p>` : ""}
        </div>`;
    }

    book.appendChild(page);
  });

  buildDots();
  updateNav();
  initSwipe();
}

function goToPage(index, direction) {
  if (isAnimating || index < 0 || index >= pages.length) return;
  isAnimating = true;

  const oldPage = document.getElementById("page-" + currentPage);
  oldPage.classList.remove("active", "flip-prev");
  // pause any video on old page
  const oldVideo = oldPage.querySelector("video");
  if (oldVideo) oldVideo.pause();

  currentPage = index;

  const newPage = document.getElementById("page-" + currentPage);
  newPage.classList.remove("active", "flip-prev");
  newPage.classList.add(direction === "next" ? "active" : "flip-prev");

  // remove animation class after it ends so it can re-trigger
  newPage.addEventListener("animationend", () => {
    newPage.classList.add("active");
    newPage.classList.remove("flip-prev");
    isAnimating = false;
  }, { once: true });

  updateNav();
  buildDots();

  // hide swipe hint after first swipe
  const hint = document.getElementById("swipeHint");
  if (hint) hint.classList.add("gone");
}

function buildDots() {
  const container = document.getElementById("dots");
  container.innerHTML = "";
  pages.forEach((_, i) => {
    const d = document.createElement("div");
    d.className = "dot" + (i === currentPage ? " active" : "");
    d.onclick = () => goToPage(i, i > currentPage ? "next" : "prev");
    container.appendChild(d);
  });
}

function updateNav() {
  document.getElementById("btnPrev").disabled = currentPage === 0;
  document.getElementById("btnNext").disabled = currentPage === pages.length - 1;
  document.getElementById("pageIndicator").textContent =
    `${currentPage + 1} / ${pages.length}`;
}

// ── SWIPE ──
function initSwipe() {
  const area = document.getElementById("book");
  let startX = 0;
  let startY = 0;

  area.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  area.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goToPage(currentPage + 1, "next");
      else         goToPage(currentPage - 1, "prev");
    }
  }, { passive: true });

  // keyboard support
  document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") goToPage(currentPage + 1, "next");
    if (e.key === "ArrowLeft")  goToPage(currentPage - 1, "prev");
  });
}
