let currentExamQuestions = [];
let currentIndex = 0;
let userAnswers = [];

// 1. 문제수 선택 로직 (버튼 UI 활성화)
document.querySelectorAll('.count-select button').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.count-select button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    };
});

// 2. 시험 시작 버튼
document.getElementById('startBtn').onclick = () => {
    const activeBtn = document.querySelector('.count-select button.active');
    const count = parseInt(activeBtn.dataset.count);
    
    // 문제 섞기 및 추출
    currentExamQuestions = [...window.questions].sort(() => Math.random() - 0.5).slice(0, count);
    currentIndex = 0;
    userAnswers = new Array(currentExamQuestions.length).fill(null);
    
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('exam-screen').classList.remove('hidden');
    showQuestion();
};

// 3. 문제 출력 및 클릭 이벤트 바인딩
function showQuestion() {
    const q = currentExamQuestions[currentIndex];
    const progress = document.getElementById('progress');
    const title = document.getElementById('question-title');
    const optionsList = document.getElementById('options');

    // 상단 진행도 및 문제 내용
    progress.innerText = `${currentIndex + 1} / ${currentExamQuestions.length}`;
    title.style.whiteSpace = "pre-line"; 
    title.innerText = q.title;

    // 보기 목록 생성
    optionsList.innerHTML = '';
    q.options.forEach(opt => {
        const li = document.createElement('li');
        li.innerText = opt;
        
        // 이전에 선택한 답이면 강조
        if (userAnswers[currentIndex] === opt) {
            li.classList.add('selected');
        }

        // 클릭 이벤트: 정답 선택 시 로직
        li.onclick = () => {
            userAnswers[currentIndex] = opt; // 답안 저장
            
            // 시각적으로 선택 표시 업데이트
            const allItems = optionsList.querySelectorAll('li');
            allItems.forEach(item => item.classList.remove('selected'));
            li.classList.add('selected');
            
            console.log(`선택된 답: ${opt}`); // 디버깅용
        };
        optionsList.appendChild(li);
    });

    // 하단 버튼 제어
    document.getElementById('prevBtn').style.display = currentIndex === 0 ? 'none' : 'inline-block';
    
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

// 4. 네비게이션 버튼 이벤트
document.getElementById('nextBtn').onclick = () => {
    if (currentIndex < currentExamQuestions.length - 1) {
        currentIndex++;
        showQuestion();
        window.scrollTo(0, 0); // 화면 상단으로 이동
    }
};

document.getElementById('prevBtn').onclick = () => {
    if (currentIndex > 0) {
        currentIndex--;
        showQuestion();
        window.scrollTo(0, 0);
    }
};

// 5. 제출 로직 (결과 화면)
document.getElementById('submitBtn').onclick = () => {
    if (!confirm("시험을 종료하시겠습니까?")) return;

    let score = 0;
    currentExamQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.answer) score++;
    });

    document.getElementById('exam-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('score').innerText = `총 ${currentExamQuestions.length}문제 중 ${score}문제를 맞혔습니다!`;
};
