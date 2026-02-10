/*************************************************
 * AWS SAA-C03 Mock Exam - app.js (SAFE VERSION)
 *************************************************/

let currentExamQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let isPracticeMode = false;
let currentSessionData = null;

/* =========================
   1. 초기화
========================= */
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("startExamBtn").onclick = () => startExam(false);
    document.getElementById("startPracticeBtn").onclick = () => startExam(true);

    document.getElementById("prevBtn").onclick = goPrev;
    document.getElementById("nextBtn").onclick = goNext;
    document.getElementById("checkAnswerBtn").onclick = checkAnswer;
    document.getElementById("quitBtn").onclick = finishExam;
});

/* =========================
   2. 시험 시작
========================= */
function startExam(practice) {
    if (!window.questions || window.questions.length === 0) {
        alert("문제 데이터가 없습니다.");
        return;
    }

    isPracticeMode = practice;
    const countBtn = document.querySelector(".count-select button.active");
    const count = countBtn ? Number(countBtn.dataset.count) : 30;

    const shuffled = [...window.questions].sort(() => Math.random() - 0.5);
    currentExamQuestions = shuffled.slice(0, count);

    currentIndex = 0;
    userAnswers = Array(count).fill(null);

    showScreen("exam-screen");
    renderQuestion();
}

/* =========================
   3. 문제 렌더링
========================= */
function renderQuestion() {
    const q = currentExamQuestions[currentIndex];
    const isMulti = Array.isArray(q.answer);

    document.getElementById("progress").innerText =
        `문제 ${currentIndex + 1} / ${currentExamQuestions.length}`;

    document.getElementById("question-title").innerHTML =
        q.title + (isMulti ? ` <span style="color:red">( ${q.answer.length}개 선택 )</span>` : "");

    const optionsUl = document.getElementById("options");
    optionsUl.innerHTML = "";

    const myAns = userAnswers[currentIndex] || (isMulti ? [] : null);

    q.options.forEach(opt => {
        const li = document.createElement("li");
        li.innerText = opt;

        if (isMulti && myAns.includes(opt)) li.classList.add("selected");
        if (!isMulti && myAns === opt) li.classList.add("selected");

        li.onclick = () => selectOption(opt, isMulti);
        optionsUl.appendChild(li);
    });

    // 버튼 상태 초기화
    const checkBtn = document.getElementById("checkAnswerBtn");
    const nextBtn = document.getElementById("nextBtn");
    const feedback = document.getElementById("practice-feedback");

    feedback.classList.add("hidden");

    if (isPracticeMode) {
        checkBtn.classList.remove("hidden");
        nextBtn.classList.add("hidden");
    } else {
        checkBtn.classList.add("hidden");
        nextBtn.classList.remove("hidden");
        nextBtn.innerText =
            currentIndex === currentExamQuestions.length - 1 ? "최종 제출" : "다음";
    }

    document.getElementById("prevBtn").style.visibility =
        currentIndex === 0 ? "hidden" : "visible";
}

/* =========================
   4. 보기 선택
========================= */
function selectOption(option, isMulti) {
    if (isPracticeMode === false) {
        // 실전 모드
    }

    if (isMulti) {
        let arr = userAnswers[currentIndex] || [];
        if (arr.includes(option)) {
            arr = arr.filter(a => a !== option);
        } else {
            if (arr.length >= currentExamQuestions[currentIndex].answer.length) {
                alert("선택 가능한 최대 개수입니다.");
                return;
            }
            arr.push(option);
        }
        userAnswers[currentIndex] = arr;
    } else {
        userAnswers[currentIndex] = option;
    }

    renderQuestion();
}

/* =========================
   5. 정답 확인 (연습모드)
========================= */
function checkAnswer() {
    if (!isPracticeMode) return;

    const q = currentExamQuestions[currentIndex];
    const myAns = userAnswers[currentIndex];
    const isMulti = Array.isArray(q.answer);

    if (!myAns || (isMulti && myAns.length === 0)) {
        alert("답을 선택하세요.");
        return;
    }

    const options = document.querySelectorAll("#options li");

    let isCorrect = false;

    if (isMulti) {
        isCorrect =
            [...myAns].sort().toString() === [...q.answer].sort().toString();
    } else {
        isCorrect = myAns === q.answer;
    }

    options.forEach(li => {
        const txt = li.innerText;
        if (q.answer.includes(txt)) li.classList.add("practice-correct");
        if (myAns.includes(txt) && !q.answer.includes(txt))
            li.classList.add("practice-wrong");
    });

    document.getElementById("feedback-msg").innerHTML =
        isCorrect ? "✅ 정답입니다!" : "❌ 틀렸습니다.";
    document.getElementById("feedback-explanation").innerText = q.explanation;
    document.getElementById("practice-feedback").classList.remove("hidden");

    document.getElementById("checkAnswerBtn").classList.add("hidden");
    document.getElementById("nextBtn").classList.remove("hidden");
}

/* =========================
   6. 이동
========================= */
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

/* =========================
   7. 시험 종료
========================= */
function finishExam() {
    if (!confirm("시험을 종료하시겠습니까?")) return;

    let correct = 0;

    currentExamQuestions.forEach((q, i) => {
        const myAns = userAnswers[i];
        if (!myAns) return;

        if (Array.isArray(q.answer)) {
            if ([...myAns].sort().toString() === [...q.answer].sort().toString())
                correct++;
        } else {
            if (myAns === q.answer) correct++;
        }
    });

    const score = Math.round(100 + (correct / currentExamQuestions.length) * 900);
    showResult(score, correct);
}

/* =========================
   8. 결과 화면
========================= */
function showResult(score, correct) {
    showScreen("result-screen");

    document.getElementById("score").innerHTML = `
        <div style="font-size:3rem;font-weight:800;color:#007aff">${score}점</div>
        <div>${correct} / ${currentExamQuestions.length} 정답</div>
    `;
}

/* =========================
   9. 화면 전환
========================= */
function showScreen(id) {
    document.querySelectorAll("#app > section").forEach(s =>
        s.classList.add("hidden")
    );
    document.getElementById(id).classList.remove("hidden");
}
