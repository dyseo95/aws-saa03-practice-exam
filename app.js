// 문제 수 선택 버튼 활성화 로직
const countButtons = document.querySelectorAll('.count-select button');

countButtons.forEach(btn => {
    btn.onclick = () => {
        // 1. 모든 버튼에서 'active' 클래스 제거
        countButtons.forEach(b => b.classList.remove('active'));
        
        // 2. 클릭된 버튼에만 'active' 클래스 추가
        btn.classList.add('active');
        
        console.log(`${btn.dataset.count}문제가 선택되었습니다.`); // 확인용
    };
});

// 시험 시작 버튼 클릭 시
document.getElementById('startBtn').onclick = () => {
    // 현재 active 상태인 버튼 찾기
    const activeBtn = document.querySelector('.count-select button.active');
    
    if (!activeBtn) {
        alert("문제 수를 선택해주세요!");
        return;
    }

    const count = parseInt(activeBtn.dataset.count);
    startExam(count); // 시험 시작 함수 호출
};

// 시험 시작 함수 (기존 로직 연결)
function startExam(count) {
    currentExamQuestions = [...window.questions].sort(() => Math.random() - 0.5).slice(0, count);
    currentIndex = 0;
    userAnswers = new Array(currentExamQuestions.length).fill(null);
    
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('exam-screen').classList.remove('hidden');
    showQuestion();
}
