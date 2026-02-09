let selectedQuestions = [];

function startExam(count) {
  selectedQuestions = shuffle([...QUESTIONS]).slice(0, count);

  const form = document.getElementById("exam-form");
  form.innerHTML = "";
  form.style.display = "block";
  document.getElementById("submitBtn").style.display = "block";
  document.getElementById("result").innerHTML = "";

  selectedQuestions.forEach((q, idx) => {
    const div = document.createElement("div");
    div.className = "question";

    div.innerHTML = `
      <p>${idx + 1}. ${q.question}</p>
      ${q.options.map((opt, i) =>
        `<label>
          <input type="radio" name="q${idx}" value="${i}" />
          ${opt}
        </label><br>`
      ).join("")}
    `;
    form.appendChild(div);
  });
}

function submitExam() {
  let score = 0;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<h2>결과</h2>";

  selectedQuestions.forEach((q, idx) => {
    const selected = document.querySelector(`input[name="q${idx}"]:checked`);
    const isCorrect = selected && Number(selected.value) === q.answer;

    if (isCorrect) score++;

    resultDiv.innerHTML += `
      <p class="${isCorrect ? "correct" : "wrong"}">
        ${idx + 1}번: ${isCorrect ? "정답" : "오답"}<br>
        정답: ${q.options[q.answer]}<br>
        해설: ${q.explanation}
      </p>
    `;
  });

  resultDiv.innerHTML =
    `<h3>점수: ${score} / ${selectedQuestions.length}</h3>` +
    resultDiv.innerHTML;
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
