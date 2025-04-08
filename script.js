
const questions = [
  {
    question: "Quem é o mais lindo que você conhece?",
    answers: ["Eu", "Eu", "Eu, óbvio"]
  },
  {
    question: "Você está apaixonada nesse cara lindo?",
    answers: ["Tô perdidamente 💘", "Como não estar?", "Ele é irresistível"]
  },
  {
    question: "Se esse site fosse um brigadeiro, ele seria...",
    answers: ["Delicioso como você", "Doce igual ao meu amor", "Perfeito, óbvio"]
  },
  {
    question: "Agora para desbloquear a melhor parte você precisa dar um beijinho no homem mais gostoso, lindo, forte, maromba, atleta, ganhador do soletrando perfeito que você encontrar.",
    answers: ["*dando beijinho*", "Com o maior prazer 😘", "Esse homem sou eu!"]
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
