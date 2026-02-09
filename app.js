let currentExamQuestions = [];
let currentIndex = 0;
let userAnswers = [];

// 1. 문제 수 선택
const countBtns = document.querySelectorAll('.count-select button');
countBtns.forEach(btn => {
    btn.onclick = () => {
        countBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    };
});

// 2. 메인 화면 버튼 이벤트
document.getElementById('startBtn').onclick = startExam;
document.getElementById('historyBtn').onclick = showHistory;
document.getElementById('restartBtn').onclick = () => location.reload();
document.getElementById('backToStartBtn').onclick = () => {
    document.getElementById('history-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
};
document.getElementById('clearHistoryBtn').onclick = () => {
    if(confirm('정말 모든 오답 기록을 삭제하시겠습니까?')) {
        localStorage.removeItem('aws_wrong_notes');
        showHistory(); // 화면 갱신
    }
};

// 3. 시험 시작
function startExam() {
    const activeBtn = document.querySelector('.count-select button.active');
    const count = parseInt(activeBtn.dataset.count);
    
    currentExamQuestions = [...window.questions].sort(() => Math.random() - 0.5).slice(0, count);
    currentIndex = 0;
    userAnswers = new Array(count).fill(null);

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('exam-screen').classList.remove('hidden');
    showQuestion();
}

// 4. 문제 출력
function showQuestion() {
    const q = currentExamQuestions[currentIndex];
    document.getElementById('progress').innerText = `문제 ${currentIndex + 1} / ${currentExamQuestions.length}`;
    document.getElementById('question-title').innerText = q.title;

    const optionsList = document.getElementById('options');
    optionsList.innerHTML = '';

    q.options.forEach(opt => {
        const li = document.createElement('li');
        li.innerText = opt;
        if (userAnswers[currentIndex] === opt) li.classList.add('selected');
        li.onclick = () => {
            userAnswers[currentIndex] = opt;
            document.querySelectorAll('#options li').forEach(el => el.classList.remove('selected'));
            li.classList.add('selected');
        };
        optionsList.appendChild(li);
    });

    document.getElementById('prevBtn').style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    document.getElementById('nextBtn').innerText = (currentIndex === currentExamQuestions.length - 1) ? '최종 제출' : '다음';
}

// 5. 네비게이션 및 제출
document.getElementById('nextBtn').onclick = () => {
    if (currentIndex === currentExamQuestions.length - 1) finishExam();
    else { currentIndex++; showQuestion(); window.scrollTo(0,0); }
};
document.getElementById('prevBtn').onclick = () => { currentIndex--; showQuestion(); window.scrollTo(0,0); };
document.getElementById('quitBtn').onclick = finishExam; // 중도 제출 버튼

// 6. 시험 종료 및 결과 처리 (핵심)
function finishExam() {
    if (!confirm("시험을 종료하고 결과를 확인하시겠습니까?")) return;

    let score = 0;
    const stats = {};
    const wrongList = [];

    currentExamQuestions.forEach((q, idx) => {
        const isCorrect = userAnswers[idx] === q.answer;
        
        // 통계 집계
        if (!stats[q.category]) stats[q.category] = { total: 0, correct: 0 };
        stats[q.category].total++;

        if (isCorrect) {
            score++;
            stats[q.category].correct++;
        } else {
            // 오답 데이터 생성
            wrongList.push({
                id: q.id, // 중복 방지용 ID
                title: q.title,
                category: q.category,
                user: userAnswers[idx] || "미선택",
                correct: q.answer,
                exp: q.explanation,
                date: new Date().toLocaleDateString()
            });
        }
    });

    // 오답노트 로컬 스토리지에 자동 저장
    saveToHistory(wrongList);
    
    // 결과 화면 렌더링
    renderResultScreen(score, stats, wrongList);
}

// 7. 오답노트 저장 로직
function saveToHistory(newWrongItems) {
    if (newWrongItems.length === 0) return;
    
    const existingData = JSON.parse(localStorage.getItem('aws_wrong_notes')) || [];
    
    // 중복 제거 후 병합 (같은 문제는 최신 것으로 업데이트하거나 유지)
    newWrongItems.forEach(newItem => {
        // 이미 저장된 문제인지 제목으로 확인 (간단한 중복 방지)
        const exists = existingData.some(item => item.title === newItem.title);
        if (!exists) {
            existingData.unshift(newItem); // 최신 오답을 맨 앞에 추가
        }
    });
    
    localStorage.setItem('aws_wrong_notes', JSON.stringify(existingData));
}

// 8. 결과 화면 렌더링
function renderResultScreen(score, stats, wrongList) {
    document.getElementById('exam-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    document.getElementById('score').innerText = `총 ${currentExamQuestions.length}문제 중 ${score}문제를 맞혔습니다!`;

    // 카테고리 통계
    const statDiv = document.getElementById('category-stats');
    statDiv.innerHTML = '<h4>📊 카테고리별 정답률</h4>';
    for (const cat in stats) {
        const rate = Math.round((stats[cat].correct / stats[cat].total) * 100);
        statDiv.innerHTML += `<div class="stat-item"><span>${cat}</span> <strong>${rate}%</strong></div>`;
    }

    // 이번 시험 오답
    const wrongDiv = document.getElementById('wrong-list');
    wrongDiv.innerHTML = '';
    if (wrongList.length === 0) {
        wrongDiv.innerHTML = '<p style="text-align:center;">🎉 축하합니다! 모든 문제를 맞히셨습니다.</p>';
    } else {
        wrongList.forEach(w => wrongDiv.appendChild(createWrongItemElement(w)));
    }
}

// 9. 오답노트 보관함 보기
function showHistory() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('history-screen').classList.remove('hidden');
    
    const historyList = JSON.parse(localStorage.getItem('aws_wrong_notes')) || [];
    const container = document.getElementById('history-list');
    container.innerHTML = '';

    if (historyList.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#666; padding:20px;">저장된 오답 노트가 없습니다. 문제를 풀어보세요!</p>';
    } else {
        historyList.forEach(w => container.appendChild(createWrongItemElement(w)));
    }
}

// 오답 아이템 HTML 생성 헬퍼 함수
function createWrongItemElement(w) {
    const div = document.createElement('div');
    div.className = 'wrong-item';
    div.innerHTML = `
        <div class="wrong-title"><span style="color:#3498db;">[${w.category}]</span> ${w.title}</div>
        <div class="wrong-detail" style="color:#e74c3c;">❌ 내 선택: ${w.user}</div>
        <div class="wrong-detail" style="color:#27ae60;">✅ 정답: ${w.correct}</div>
        <div class="wrong-exp">💡 해설: ${w.exp}</div>
    `;
    return div;
}
