
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
    answers: ["Me comeria", "Me amassaria", "Nossa que gostoso(Eu sei, rs)"]
  },
  {
    question: "Agora para desbloquear a melhor parte você precisa dar um beijinho no homem mais gostoso, lindo, forte, maromba, atleta, perfeito que você encontrar.",
    answers: ["*dando beijinho*", "Te quero Muitooo 😘", "Esse homem sou eu!"]
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
    document.getElementById("memorial").classList.remove("hidden");
  }
}

window.onload = showQuestion;

// Ativar música quando usuário clicar pela primeira vez
document.addEventListener("click", () => {
  const audio = document.getElementById("bgMusic");
  if (audio.muted) {
    audio.muted = false;
    audio.play().catch(e => console.log("Autoplay bloqueado: ", e));
  }
}, { once: true });