let selectedCount = 60;
let examQuestions = [];
let answers = {};
let current = 0;

const startScreen = document.getElementById("start-screen");
const examScreen = document.getElementById("exam-screen");
const resultScreen = document.getElementById("result-screen");

document.querySelectorAll(".count-select button").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".count-select button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedCount = Number(btn.dataset.count);
  };
});

document.getElementById("startBtn").onclick = () => {
  if (!QUESTIONS || QUESTIONS.length === 0) {
    alert("문제 데이터가 없습니다");
    return;
  }

  examQuestions = [...QUESTIONS]
    .sort(() => 0.5 - Math.random())
    .slice(0, selectedCount);

  current = 0;
  answers = {};

  startScreen.classList.add("hidden");
  examScreen.classList.remove("hidden");

  render();
};

function render() {
  const q = examQuestions[current];

  document.getElementById("progress").innerText =
    `${current + 1} / ${examQuestions.length}`;

  document.getElementById("question-title").innerText = q.question;

  const options = document.getElementById("options");
  options.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const li = document.createElement("li");
    li.innerText = opt;
    if (answers[q.id] === idx) li.classList.add("selected");
    li.onclick = () => {
      answers[q.id] = idx;
      render();
    };
    options.appendChild(li);
  });

  document.getElementById("prevBtn").style.display =
    current === 0 ? "none" : "inline-block";

  document.getElementById("nextBtn").style.display =
    current === examQuestions.length - 1 ? "none" : "inline-block";

  document.getElementById("submitBtn").classList.toggle(
    "hidden",
    current !== examQuestions.length - 1
  );
}

document.getElementById("prevBtn").onclick = () => {
  current--;
  render();
};

document.getElementById("nextBtn").onclick = () => {
  current++;
  render();
};

document.getElementById("submitBtn").onclick = () => {
  examScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  let correct = 0;
  examQuestions.forEach(q => {
    if (answers[q.id] === q.answer) correct++;
  });

  document.getElementById("score").innerText =
    `점수: ${correct} / ${examQuestions.length}`;
};
