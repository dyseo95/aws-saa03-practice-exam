let currentExamQuestions = [];
let currentIndex = 0;
let userAnswers = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("startExamBtn").onclick = startExam;
    document.getElementById("prevBtn").onclick = goPrev;
    document.getElementById("nextBtn").onclick = goNext;
    document.getElementById("checkAnswerBtn").onclick = checkAnswer;
    document.getElementById("quitBtn").onclick = finishExam;
    document.getElementById("exitToMainBtn").onclick = () => {
        if (confirm("메인으로 돌아가시겠습니까?")) showScreen("start-screen");
    };
});

function startExam() {
    const countBtn = document.querySelector(".count-select .active");
    const count = parseInt(countBtn.dataset.count);

    // 🔥 복수정답 40% 보장
    const multi = questions.filter(q => Array.isArray(q.answer));
    const single = questions.filter(q => !Array.isArray(q.answer));

    multi.sort(() => Math.random() - 0.5);
    single.sort(() => Math.random() - 0.5);

    const multiCount = Math.min(Math.floor(count * 0.4), multi.length);
    currentExamQuestions = [
        ...multi.slice(0, multiCount),
        ...single.slice(0, count - multiCount)
    ].sort(() => Math.random() - 0.5);

    userAnswers = new Array(count).fill(null);
    currentIndex = 0;

    showScreen("exam-screen");
    renderQuestion();
}

function renderQuestion() {
    const q = currentExamQuestions[currentIndex];
    const isMulti = Array.isArray(q.answer);

    document.getElementById("progress").innerText =
        `문제 ${currentIndex + 1} / ${currentExamQuestions.length}`;

    document.getElementById("question-title").innerHTML =
        q.title + (isMulti ? " <span style='color:red'>(복수 선택)</span>" : "");

    const ul = document.getElementById("options");
    ul.innerHTML = "";

    q.options.forEach(opt => {
        const li = document.createElement("li");
        li.innerText = opt;
        li.onclick = () => selectOption(li, opt, isMulti);
        ul.appendChild(li);
    });

    document.getElementById("practice-feedback").classList.add("hidden");
}

function selectOption(li, opt, isMulti) {
    if (isMulti) {
        let arr = userAnswers[currentIndex] || [];
        if (arr.includes(opt)) {
            arr = arr.filter(a => a !== opt);
            li.classList.remove("selected");
        } else {
            arr.push(opt);
            li.classList.add("selected");
        }
        userAnswers[currentIndex] = arr;
    } else {
        userAnswers[currentIndex] = opt;
        document.querySelectorAll("#options li").forEach(el => el.classList.remove("selected"));
        li.classList.add("selected");
    }
}

function checkAnswer() {
    const q = currentExamQuestions[currentIndex];
    const my = userAnswers[currentIndex];

    let correct = false;
    if (Array.isArray(q.answer)) {
        correct = my &&
            [...my].sort().toString() === [...q.answer].sort().toString();
    } else {
        correct = my === q.answer;
    }

    document.getElementById("practice-feedback").classList.remove("hidden");
    document.getElementById("feedback-msg").innerText =
        correct ? "✅ 정답입니다" : "❌ 틀렸습니다";
    document.getElementById("feedback-explanation").innerText = q.explanation;
}

function goNext() {
    if (currentIndex < currentExamQuestions.length - 1) {
        currentIndex++;
        renderQuestion();
    } else {
        finishExam();
    }
}

function goPrev() {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
    }
}

function finishExam() {
    let correct = 0;
    const wrong = [];

    currentExamQuestions.forEach((q, i) => {
        const my = userAnswers[i];
        let ok = false;

        if (Array.isArray(q.answer)) {
            ok = my && [...my].sort().toString() === [...q.answer].sort().toString();
        } else {
            ok = my === q.answer;
        }

        if (ok) correct++;
        else wrong.push({ title: q.title, correct: q.answer, user: my });
    });

    localStorage.setItem("aws_wrong_note", JSON.stringify(wrong));
    showResult(correct, currentExamQuestions.length);
}

function showResult(correct, total) {
    showScreen("result-screen");
    document.getElementById("score").innerText =
        `점수: ${Math.round(100 + (correct / total) * 900)}점`;

    const list = document.getElementById("wrong-list");
    list.innerHTML = "";

    const wrong = JSON.parse(localStorage.getItem("aws_wrong_note")) || [];
    wrong.forEach(w => {
        const div = document.createElement("div");
        div.innerText = `❌ ${w.title}`;
        list.appendChild(div);
    });
}

function showScreen(id) {
    document.querySelectorAll("#app section").forEach(s => s.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}
