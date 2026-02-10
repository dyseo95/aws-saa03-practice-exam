// ===============================
// 전역 상태
// ===============================
let currentExamQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let isPracticeMode = false;

// ===============================
// 초기화
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    // 문제 수 선택
    document.querySelectorAll(".count-select button").forEach(btn => {
        btn.addEventListener("click", () => {
            document
                .querySelectorAll(".count-select button")
                .forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });

    document.getElementById("startExamBtn")
        ?.addEventListener("click", () => startExam(false));

    document.getElementById("startPracticeBtn")
        ?.addEventListener("click", () => startExam(true));

    document.getElementById("prevBtn")?.addEventListener("click", goPrev);
    document.getElementById("nextBtn")?.addEventListener("click", goNext);
    document.getElementById("checkAnswerBtn")?.addEventListener("click", checkAnswer);
    document.getElementById("quitBtn")?.addEventListener("click", finishExam);

    document.getElementById("exitToMainBtn")?.addEventListener("click", () => {
        showScreen("start-screen");
    });
});

// ===============================
// 시험 시작
// ===============================
function startExam(practice) {
    if (!window.questions || window.questions.length === 0) {
        alert("문제 데이터가 없습니다.");
        return;
    }

    isPracticeMode = practice;

    const activeBtn = document.querySelector(".count-select button.active");
    const count = activeBtn ? parseInt(activeBtn.dataset.count) : 30;

    const multi = window.questions.filter(q => Array.isArray(q.answer));
    const single = window.questions.filter(q => !Array.isArray(q.answer));

    shuffle(multi);
    shuffle(single);

    const targetMulti = Math.min(Math.floor(count * 0.4), multi.length);

    let selected = [
        ...multi.slice(0, targetMulti),
        ...single.slice(0, count - targetMulti)
    ];

    // 🔥 문제 수 보정 (절대 줄어들지 않게)
    if (selected.length < count) {
        const remain = window.questions.filter(q => !selected.includes(q));
        shuffle(remain);
        selected = selected.concat(remain.slice(0, count - selected.length));
    }

    shuffle(selected);

    currentExamQuestions = selected;
    currentIndex = 0;
    userAnswers = new Array(currentExamQuestions.length).fill(null);

    showScreen("exam-screen");
    renderQuestion();
}

// ===============================
// 문제 렌더링
// ===============================
function renderQuestion() {
    const q = currentExamQuestions[currentIndex];
    const isMulti = Array.isArray(q.answer);

    document.getElementById("progress").innerText =
        `문제 ${currentIndex + 1} / ${currentExamQuestions.length}`;

    document.getElementById("question-title").innerHTML =
        q.title +
        (isMulti ? " <span style='color:#ff3b30'>(복수 선택)</span>" : "");

    const ul = document.getElementById("options");
    ul.innerHTML = "";

    const saved = userAnswers[currentIndex] || (isMulti ? [] : null);

    q.options.forEach(opt => {
        const li = document.createElement("li");
        li.innerText = opt;

        if (isMulti && saved.includes(opt)) li.classList.add("selected");
        if (!isMulti && saved === opt) li.classList.add("selected");

        li.onclick = () => selectOption(li, opt, isMulti);
        ul.appendChild(li);
    });

    document.getElementById("practice-feedback").classList.add("hidden");

    // ⭐ 연습 모드에서만 정답 확인 버튼
    if (isPracticeMode) {
        document.getElementById("checkAnswerBtn").classList.remove("hidden");
    } else {
        document.getElementById("checkAnswerBtn").classList.add("hidden");
    }
}

// ===============================
// 보기 선택
// ===============================
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
        document.querySelectorAll("#options li")
            .forEach(el => el.classList.remove("selected"));
        li.classList.add("selected");
    }
}

// ===============================
// 정답 확인 (연습모드)
// ===============================
function checkAnswer() {
    const q = currentExamQuestions[currentIndex];
    const my = userAnswers[currentIndex];

    if (!my || (Array.isArray(my) && my.length === 0)) {
        alert("답을 선택해주세요.");
        return;
    }

    let correct = false;
    if (Array.isArray(q.answer)) {
        correct =
            [...my].sort().toString() === [...q.answer].sort().toString();
    } else {
        correct = my === q.answer;
    }

    document.getElementById("practice-feedback").classList.remove("hidden");
    document.getElementById("feedback-msg").innerText =
        correct ? "✅ 정답입니다!" : "❌ 틀렸습니다.";
    document.getElementById("feedback-explanation").innerText = q.explanation;
}

// ===============================
// 이동
// ===============================
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

// ===============================
// 시험 종료
// ===============================
function finishExam() {
    if (!confirm("시험을 종료하시겠습니까?")) return;

    let correct = 0;
    const wrong = [];

    currentExamQuestions.forEach((q, i) => {
        const my = userAnswers[i];
        let ok = false;

        if (Array.isArray(q.answer)) {
            ok = my &&
                [...my].sort().toString() === [...q.answer].sort().toString();
        } else {
            ok = my === q.answer;
        }

        if (ok) correct++;
        else {
            wrong.push({
                title: q.title,
                correct: q.answer,
                user: my || "미선택",
                explanation: q.explanation
            });
        }
    });

    localStorage.setItem("aws_wrong_note", JSON.stringify(wrong));
    showResult(correct, currentExamQuestions.length);
}

// ===============================
// 결과
// ===============================
function showResult(correct, total) {
    showScreen("result-screen");

    const score = Math.round(100 + (correct / total) * 900);
    document.getElementById("score").innerText = `${score}점`;

    const list = document.getElementById("wrong-list");
    list.innerHTML = "";

    const wrong = JSON.parse(localStorage.getItem("aws_wrong_note")) || [];
    wrong.forEach(w => {
        const div = document.createElement("div");
        div.innerHTML = `
            <strong>❌ ${w.title}</strong><br/>
            내 선택: ${Array.isArray(w.user) ? w.user.join(", ") : w.user}<br/>
            정답: ${Array.isArray(w.correct) ? w.correct.join(", ") : w.correct}<br/>
            💡 ${w.explanation}
            <hr/>
        `;
        list.appendChild(div);
    });
}

// ===============================
// 화면 전환
// ===============================
function showScreen(id) {
    document.querySelectorAll("#app section")
        .forEach(s => s.classList.add("hidden"));
    document.getElementById(id)?.classList.remove("hidden");
}

// ===============================
// 유틸
// ===============================
function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}
