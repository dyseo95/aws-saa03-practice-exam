let currentExamQuestions = [];
let currentIndex = 0;
let userAnswers = [];

// 1. 문제 수 선택 버튼 UI (파란색 강조)
const countButtons = document.querySelectorAll('.count-select button');
countButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        countButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
    });
});

// 2. 시험 시작 버튼
document.getElementById('startBtn').onclick = () => {
    const activeBtn = document.querySelector('.count-select button.active');
    if (!activeBtn) {
        alert("문제 수를 먼저 선택해주세요!");
        return;
    }

    const count = parseInt(activeBtn.dataset.count);
    // 문제 랜덤 셔플 및 개수 추출
    currentExamQuestions = [...window.questions].sort(() => Math.random() - 0.5).slice(0, count);
    currentIndex = 0;
    userAnswers = new Array(currentExamQuestions.length).fill(null);

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('exam-screen').classList.remove('hidden');
    showQuestion();
};

// 3. 문제 표시 및 선택 로직
function showQuestion() {
    const q = currentExamQuestions[currentIndex];
    
    // 진행도 표시
    document.getElementById('progress').innerText = `${currentIndex + 1} / ${currentExamQuestions.length}`;
    
    // 문제 제목 출력
    const title = document.getElementById('question-title');
    title.style.whiteSpace = "pre-line"; 
    title.innerText = q.title;

    // 보기(Option) 생성
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

    // 버튼 제어 (이전 버튼 숨김/보임)
    document.getElementById('prevBtn').classList.toggle('hidden', currentIndex === 0);
    
    // 마지막 문제일 때 '다음' 버튼 대신 '제출' 버튼 강조 (단, 중도 제출은 항상 가능하도록 구현 가능)
    const nextBtn = document.getElementById('nextBtn');
    if (currentIndex === currentExamQuestions.length - 1) {
        nextBtn.innerText = "최종 제출";
    } else {
        nextBtn.innerText = "다음";
    }
}

// 네비게이션
document.getElementById('nextBtn').onclick = () => { 
    if (currentIndex === currentExamQuestions.length - 1) {
        finishExam();
    } else {
        currentIndex++; 
        showQuestion(); 
        window.scrollTo(0, 0); 
    }
};

document.getElementById('prevBtn').onclick = () => { 
    currentIndex--; 
    showQuestion(); 
    window.scrollTo(0, 0); 
};

// 중도 포기/제출 버튼 (기존 submitBtn 사용)
document.getElementById('submitBtn').onclick = () => finishExam();

// 4. 시험 종료 및 결과 분석 로직 (핵심 추가 파트)
function finishExam() {
    if (!confirm("시험을 종료하고 결과를 확인하시겠습니까?")) return;
    
    let score = 0;
    const stats = {}; // 카테고리별 통계용
    const wrongList = []; // 오답노트용

    currentExamQuestions.forEach((q, idx) => {
        const isCorrect = userAnswers[idx] === q.answer;
        
        // 카테고리별 계산
        if (!stats[q.category]) stats[q.category] = { total: 0, correct: 0 };
        stats[q.category].total++;
        
        if (isCorrect) {
            score++;
            stats[q.category].correct++;
        } else {
            // 오답 데이터 저장
            wrongList.push({
                title: q.title,
                userAnswer: userAnswers[idx] || "선택하지 않음",
                correctAnswer: q.answer,
                explanation: q.explanation
            });
        }
    });

    renderResults(score, stats, wrongList);
}

// 5. 결과 화면 출력
function renderResults(score, stats, wrongList) {
    document.getElementById('exam-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    
    // 점수 표시
    document.getElementById('score').innerText = `총 ${currentExamQuestions.length}문제 중 ${score}문제를 맞혔습니다!`;

    // 카테고리별 정답률 렌더링
    const statsContainer = document.getElementById('category-stats');
    statsContainer.innerHTML = '';
    for (const cat in stats) {
        const percent = Math.round((stats[cat].correct / stats[cat].total) * 100);
        const div = document.createElement('div');
        div.className = 'stat-item';
        div.innerHTML = `<span>${cat}</span> <strong>${percent}% (${stats[cat].correct}/${stats[cat].total})</strong>`;
        statsContainer.appendChild(div);
    }

    // 오답 노트 렌더링
    const wrongContainer = document.getElementById('wrong-list');
    wrongContainer.innerHTML = '';
    if (wrongList.length === 0) {
        wrongContainer.innerHTML = '<p style="text-align:center; color:blue;">축하합니다! 모든 문제를 맞히셨습니다.</p>';
    } else {
        wrongList.forEach(item => {
            const div = document.createElement('div');
            div.className = 'wrong-item'; // style.css에 정의된 디자인 사용
            div.innerHTML = `
                <div class="wrong-title">${item.title}</div>
                <div style="color:#e74c3c;">내 선택: ${item.userAnswer}</div>
                <div style="color:#27ae60; font-weight:bold;">정답: ${item.correctAnswer}</div>
                <div class="wrong-exp">💡 해설: ${item.explanation}</div>
            `;
            wrongContainer.appendChild(div);
        });
    }
}
