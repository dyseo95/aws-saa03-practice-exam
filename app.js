let selectedCount = 60;
let examQuestions = [];
let answers = {};
let current = 0;

const startScreen = document.getElementById("start-screen");
const examScreen = document.getElementById("exam-screen");
const resultScreen = document.getElementById("result-screen");

document.querySelectorAll(".count-select button").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".count-select button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedCount = Number(btn.dataset.count);
  };
});

document.getElementById("startBtn").onclick = () => {
  examQuestions = [...QUESTIONS].sort(() => 0.5 - Math.random()).slice(0, selectedCount);
  startScreen.classList.add("hidden");
  examScreen.classList.remove("hidden");
  render();
};

function render() {
  const q = examQuestions[current];
  document.getElementById("progress").innerText = `${current + 1} / ${examQuestions.length}`;
  document.getElementById("question-title").innerText = q.question;

  const options = document.getElementById("options");
  options.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const li = document.createElement("li");
    li.innerText = opt;
    if (answers[q.id] === idx) li.classList.add("selected");
    li.onclick = () => {
      answers[q.id] = idx;
      localStorage.setItem("aws-wrong-note", JSON.stringify(answers));
      render();
    };
    options.appendChild(li);
  });

  document.getElementById("prevBtn").style.display = current === 0 ? "none" : "block";
  document.getElementById("nextBtn").style.display = current === examQuestions.length - 1 ? "none" : "block";
  document.getElementById("submitBtn").classList.toggle("hidden", current !== examQuestions.length - 1);
}

document.getElementById("prevBtn").onclick = () => { current--; render(); };
document.getElementById("nextBtn").onclick = () => { current++; render(); };

document.getElementById("submitBtn").onclick = showResult;

function showResult() {
  examScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  let correct = 0;
  const categoryStats = {};

  examQuestions.forEach(q => {
    if (!categoryStats[q.category]) categoryStats[q.category] = { total: 0, correct: 0 };
    categoryStats[q.category].total++;

    if (answers[q.id] === q.answer) {
      correct++;
      categoryStats[q.category].correct++;
    }
  });

  document.getElementById("score").innerText =
    `점수: ${correct} / ${examQuestions.length} (${Math.round(correct / examQuestions.length * 100)}%)`;

  const stats = document.getElementById("category-stats");
  stats.innerHTML = "";
  Object.entries(categoryStats).forEach(([cat, s]) => {
    const li = document.createElement("li");
    li.innerText = `${cat}: ${Math.round(s.correct / s.total * 100)}%`;
    stats.appendChild(li);
  });

  const wrong = document.getElementById("wrong-list");
  wrong.innerHTML = "";
  examQuestions.forEach(q => {
    if (answers[q.id] !== q.answer) {
      const div = document.createElement("div");
      div.innerHTML = `
        <strong>${q.question}</strong><br>
        ❌ 선택: ${q.options[answers[q.id]] || "미응답"}<br>
        ✅ 정답: ${q.options[q.answer]}<br>
        💡 ${q.explanation}
        <hr>`;
      wrong.appendChild(div);
    }
  });
}
