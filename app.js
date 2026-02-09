let currentExamQuestions = [];
let currentIndex = 0;
let userAnswers = [];

// 시작 버튼 이벤트
document.getElementById('startBtn').addEventListener('click', () => {
    const count = document.querySelector('.count-select button.active').dataset.count;
    currentExamQuestions = [...window.questions].sort(() => Math.random() - 0.5).slice(0, count);
    currentIndex = 0;
    userAnswers = new Array(currentExamQuestions.length).fill(null);
    
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('exam-screen').classList.remove('hidden');
    showQuestion();
});

// 문제 표시 함수
function showQuestion() {
    const q = currentExamQuestions[currentIndex];
    document.getElementById('progress').innerText = `${currentIndex + 1} / ${currentExamQuestions.length}`;
    
    // 핵심 가독성 수정: 줄바꿈 적용
    const titleElement = document.getElementById('question-title');
    titleElement.style.whiteSpace = "pre-line"; 
    titleElement.innerText = q.title;

    const optionsList = document.getElementById('options');
    optionsList.innerHTML = '';

    q.options.forEach(opt => {
        const li = document.createElement('li');
        li.innerText = opt;
        if (userAnswers[currentIndex] === opt) li.classList.add('selected');
        li.onclick = () => {
            userAnswers[currentIndex] = opt;
            showQuestion(); // 선택 시 시각적 업데이트
        };
        optionsList.appendChild(li);
    });

    // 버튼 제어
    document.getElementById('prevBtn').style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
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

// 다음/이전 버튼 이벤트
document.getElementById('nextBtn').onclick = () => { currentIndex++; showQuestion(); };
document.getElementById('prevBtn').onclick = () => { currentIndex--; showQuestion(); };

// 문제수 선택 로직
document.querySelectorAll('.count-select button').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.count-select button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    };
});
