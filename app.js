// ==========================================
// 전역 상태
// ==========================================
let currentExamQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let isPracticeMode = false;
let currentSessionData = null;

// ==========================================
// 공통 정답 판별 함수 (⭐ 핵심)
// ==========================================
function isAnswerCorrect(question, userAnswer) {
    if (!userAnswer) return false;

    const correct = question.answer;

    // 복수 정답
    if (Array.isArray(correct)) {
        if (!Array.isArray(userAnswer)) return false;
        if (userAnswer.length !== correct.length) return false;
        return correct.every(ans => userAnswer.includes(ans));
    }

    // 단일 정답
    return userAnswer === correct;
}

// ==========================================
// 초기화
// ==========================================
document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.count-select button').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.count-select button')
                .forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    document.getElementById('startExamBtn').onclick = () => startExam(false);
    document.getElementById('startPracticeBtn').onclick = () => startExam(true);
    document.getElementById('historyBtn').onclick = showHistoryList;

    document.getElementById('prevBtn').onclick = goPrev;
    document.getElementById('nextBtn').onclick = goNext;
    document.getElementById('checkAnswerBtn').onclick = checkAnswer;
    document.getElementById('quitBtn').onclick = finishExam;

    document.getElementById('restartBtn').onclick = () => location.reload();

    const downloadBtn = document.getElementById('downloadTxtBtn');
    if (downloadBtn) {
        downloadBtn.onclick = () => currentSessionData && downloadTxt(currentSessionData);
    }
});

// ==========================================
// 시험 시작
// ==========================================
function startExam(practiceMode) {
    if (!window.questions || window.questions.length === 0) {
        alert("문제 데이터가 없습니다.");
        return;
    }

    isPracticeMode = practiceMode;
    const countBtn = document.querySelector('.count-select button.active');
    const count = countBtn ? Number(countBtn.dataset.count) : 30;

    const all = [...window.questions];
    const multi = all.filter(q => Array.isArray(q.answer));
    const single = all.filter(q => !Array.isArray(q.answer));

    multi.sort(() => Math.random() - 0.5);
    single.sort(() => Math.random() - 0.5);

    const multiCount = Math.min(Math.floor(count * 0.4), multi.length);
    let selected = [
        ...multi.slice(0, multiCount),
        ...single.slice(0, count - multiCount)
    ];

    selected.sort(() => Math.random() - 0.5);

    if (!practiceMode && count === 65) {
        const dummyIdx = selected
            .map((_, i) => i)
            .sort(() => Math.random() - 0.5)
            .slice(0, 15);

        selected = selected.map((q, i) => ({
            ...q,
            isDummy: dummyIdx.includes(i)
        }));
    } else {
        selected = selected.map(q => ({ ...q, isDummy: false }));
    }

    currentExamQuestions = selected;
    currentIndex = 0;
    userAnswers = new Array(selected.length).fill(null);

    showScreen(document.getElementById('exam-screen'));
    renderQuestion();
}

// ==========================================
// 문제 렌더링
// ==========================================
function renderQuestion() {
    const q = currentExamQuestions[currentIndex];
    const isMulti = Array.isArray(q.answer);

    document.getElementById('progress').innerText =
        `문제 ${currentIndex + 1} / ${currentExamQuestions.length}`;

    document.getElementById('question-title').innerHTML =
        q.title + (isMulti ? ` <span style="color:red;">(${q.answer.length}개 선택)</span>` : '');

    const options = document.getElementById('options');
    options.innerHTML = '';

    const saved = userAnswers[currentIndex] || (isMulti ? [] : null);

    q.options.forEach(opt => {
        const li = document.createElement('li');
        li.innerText = opt;

        if (isMulti && saved.includes(opt)) li.classList.add('selected');
        if (!isMulti && saved === opt) li.classList.add('selected');

        li.onclick = () => selectOption(li, opt, isMulti);
        options.appendChild(li);
    });

    document.getElementById('practice-feedback').classList.add('hidden');
    document.getElementById('checkAnswerBtn').classList.toggle('hidden', !isPracticeMode);
}

// ==========================================
// 보기 선택
// ==========================================
function selectOption(li, opt, isMulti) {
    if (isPracticeMode &&
        !document.getElementById('practice-feedback').classList.contains('hidden')) return;

    if (isMulti) {
        let arr = userAnswers[currentIndex] || [];
        if (arr.includes(opt)) {
            arr = arr.filter(a => a !== opt);
            li.classList.remove('selected');
        } else {
            if (arr.length >= currentExamQuestions[currentIndex].answer.length) {
                alert("선택 개수를 초과했습니다.");
                return;
            }
            arr.push(opt);
            li.classList.add('selected');
        }
        userAnswers[currentIndex] = arr;
    } else {
        userAnswers[currentIndex] = opt;
        document.querySelectorAll('#options li')
            .forEach(el => el.classList.remove('selected'));
        li.classList.add('selected');
    }
}

// ==========================================
// 정답 확인 (연습 모드)
// ==========================================
function checkAnswer() {
    const q = currentExamQuestions[currentIndex];
    const my = userAnswers[currentIndex];
    if (!my || (Array.isArray(my) && my.length === 0)) {
        alert("답을 선택하세요.");
        return;
    }

    const correct = isAnswerCorrect(q, my);
    const options = document.querySelectorAll('#options li');

    options.forEach(li => {
        const txt = li.innerText;
        if (Array.isArray(q.answer)) {
            if (q.answer.includes(txt)) li.classList.add('practice-correct');
            if (my.includes(txt) && !q.answer.includes(txt)) li.classList.add('practice-wrong');
        } else {
            if (txt === q.answer) li.classList.add('practice-correct');
            if (txt === my && my !== q.answer) li.classList.add('practice-wrong');
        }
    });

    document.getElementById('feedback-msg').innerHTML =
        correct ? "✅ 정답입니다!" : "❌ 틀렸습니다.";
    document.getElementById('feedback-explanation').innerText = q.explanation;
    document.getElementById('practice-feedback').classList.remove('hidden');
}

// ==========================================
// 이동
// ==========================================
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

// ==========================================
// 시험 종료 및 채점
// ==========================================
function finishExam() {
    if (!confirm("시험을 종료하시겠습니까?")) return;

    let correct = 0;
    let validCorrect = 0;
    let validTotal = 0;
    const wrongList = {};
    const stats = {};

    currentExamQuestions.forEach((q, i) => {
        const ok = isAnswerCorrect(q, userAnswers[i]);

        if (!stats[q.category]) stats[q.category] = { total: 0, correct: 0 };
        stats[q.category].total++;

        if (!q.isDummy) validTotal++;

        if (ok) {
            correct++;
            stats[q.category].correct++;
            if (!q.isDummy) validCorrect++;
        }
    });

    const score = Math.round(100 + (validCorrect / validTotal) * 900);
    showResult(score, correct, currentExamQuestions.length, stats);
}

// ==========================================
// 결과 화면
// ==========================================
function showResult(score, correct, total, stats) {
    showScreen(document.getElementById('result-screen'));
    document.getElementById('score').innerHTML =
        `<div style="font-size:3rem;font-weight:800;">${score}점</div>
         <div>${total}문제 중 ${correct}문제 정답</div>`;

    const statBox = document.getElementById('category-stats');
    statBox.innerHTML = '';
    for (const c in stats) {
        const r = Math.round((stats[c].correct / stats[c].total) * 100);
        statBox.innerHTML += `<div>${c} : ${r}%</div>`;
    }
}

// ==========================================
// 화면 전환
// ==========================================
function showScreen(screen) {
    document.querySelectorAll('#app > section')
        .forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
}
