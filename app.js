let currentExamQuestions = [];
let currentIndex = 0;
let userAnswers = [];

// 1. 문제 수 선택 UI
const countButtons = document.querySelectorAll('.count-select button');
countButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        countButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
    });
});

// 2. 시험 시작
document.getElementById('startBtn').onclick = () => {
    const activeBtn = document.querySelector('.count-select button.active');
    if (!activeBtn) return alert("문제 수를 선택해주세요!");

    const count = parseInt(activeBtn.dataset.count);
    currentExamQuestions = [...window.questions].sort(() => Math.random() - 0.5).slice(0, count);
    currentIndex = 0;
    userAnswers = new Array(count).fill(null);

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('exam-screen').classList.remove('hidden');
    showQuestion();
};

// 3. 문제 출력
function showQuestion() {
    const q = currentExamQuestions[currentIndex];
    document.getElementById('progress').innerText = `${currentIndex + 1} / ${currentExamQuestions.length}`;
    
    const title = document.getElementById('question-title');
    title.style.whiteSpace = "pre-line"; 
    title.innerText = q.title;

    const optionsList = document.getElementById('options');
    optionsList.innerHTML = '';

    q.options.forEach(opt => {
        const li = document.createElement('li');
        li.innerText = opt;
        if (userAnswers[currentIndex] === opt) li.classList.add('selected');

        li.onclick = () => {
            userAnswers[currentIndex] = opt;
            const allItems = optionsList.querySelectorAll('li');
            allItems.forEach(item => item.classList.remove('selected'));
            li.classList.add('selected');
        };
        optionsList.appendChild(li);
    });

    document.getElementById('prevBtn').classList.toggle('hidden', currentIndex === 0);
    const isLast = currentIndex === currentExamQuestions.length - 1;
    document.getElementById('nextBtn').innerText = isLast ? "최종 제출" : "다음 문제";
}

// 네비게이션 및 중도 제출
document.getElementById('nextBtn').onclick = () => {
    if (currentIndex === currentExamQuestions.length - 1) finishExam();
    else { currentIndex++; showQuestion(); window.scrollTo(0, 0); }
};
document.getElementById('prevBtn').onclick = () => { currentIndex--; showQuestion(); window.scrollTo(0, 0); };
document.getElementById('submitBtn').onclick = () => finishExam(); // 중도 포기/제출용

// 4. 시험 종료 및 결과 분석
function finishExam() {
    if (!confirm("시험을 종료하고 결과를 확인하시겠습니까?")) return;

    let score = 0;
    const stats = {};
    const wrongList = [];

    currentExamQuestions.forEach((q, idx) => {
        const isCorrect = userAnswers[idx] === q.answer;
        if (!stats[q.category]) stats[q.category] = { total: 0, correct: 0 };
        stats[q.category].total++;

        if (isCorrect) {
            score++;
            stats[q.category].correct++;
        } else {
            wrongList.push({
                title: q.title,
                category: q.category,
                user: userAnswers[idx] || "미선택",
                correct: q.answer,
                exp: q.explanation
            });
        }
    });

    renderResults(score, stats, wrongList);
}

// 5. 결과 화면 출력
function renderResults(score, stats, wrongList) {
    document.getElementById('exam-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('score').innerText = `총 ${currentExamQuestions.length}문제 중 ${score}문제를 맞혔습니다!`;

    // 카테고리별 정답률
    const statsContainer = document.getElementById('category-stats');
    statsContainer.innerHTML = '<h4>📊 카테고리별 분석</h4>';
    for (const cat in stats) {
        const rate = Math.round((stats[cat].correct / stats[cat].total) * 100);
        statsContainer.innerHTML += `<div style="display:flex; justify-content:space-between; padding:8px; border-bottom:1px solid #eee;">
            <span>${cat}</span> <strong>${rate}%</strong></div>`;
    }

    // 오답 노트
    const wrongContainer = document.getElementById('wrong-list');
    wrongContainer.innerHTML = '<h4>❌ 오답 노트</h4>';
    wrongList.forEach(w => {
        wrongContainer.innerHTML += `
            <div style="background:#fff5f5; border-left:5px solid #e74c3c; padding:15px; margin-bottom:15px; border-radius:8px;">
                <div style="font-weight:bold; margin-bottom:5px;">[${w.category}] ${w.title}</div>
                <div style="color:#e74c3c; font-size:0.9rem;">내 선택: ${w.user}</div>
                <div style="color:#27ae60; font-weight:bold; font-size:0.9rem;">정답: ${w.correct}</div>
                <div style="color:#666; font-size:0.85rem; margin-top:8px; border-top:1px dashed #ccc; padding-top:8px;">💡 해설: ${w.exp}</div>
            </div>`;
    });
}
