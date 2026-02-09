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
    currentExamQuestions = [...window.questions].sort(() => Math.random() - 0.5).slice(0, count);
    currentIndex = 0;
    userAnswers = new Array(currentExamQuestions.length).fill(null);

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('exam-screen').classList.remove('hidden');
    showQuestion();
};

// 3. 문제 표시 (문제 출력 안 됨 해결)
function showQuestion() {
    const q = currentExamQuestions[currentIndex];
    
    // 진행도 표시
    document.getElementById('progress').innerText = `${currentIndex + 1} / ${currentExamQuestions.length}`;
    
    // 문제 제목 출력
    const title = document.getElementById('question-title');
    title.innerText = q.title;

    // 보기(Option) 생성 및 클릭 이벤트
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

    // 버튼 제어
    document.getElementById('prevBtn').classList.toggle('hidden', currentIndex === 0);
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    if (currentIndex === currentExamQuestions.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

// 네비게이션
document.getElementById('nextBtn').onclick = () => { currentIndex++; showQuestion(); window.scrollTo(0, 0); };
document.getElementById('prevBtn').onclick = () => { currentIndex--; showQuestion(); window.scrollTo(0, 0); };

// 제출
document.getElementById('submitBtn').onclick = () => {
    if (!confirm("시험을 제출하시겠습니까?")) return;
    
    let score = 0;
    currentExamQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.answer) score++;
    });

    document.getElementById('exam-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('score').innerText = `총 ${currentExamQuestions.length}문제 중 ${score}문제를 맞혔습니다!`;
};
