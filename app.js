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
document.getElementById('historyBtn').onclick = showHistoryList;
document.getElementById('restartBtn').onclick = () => location.reload();

// 오답노트 관련 네비게이션
document.getElementById('backToStartBtn').onclick = () => {
    document.getElementById('history-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
};
document.getElementById('backToHistoryBtn').onclick = () => {
    document.getElementById('history-detail-screen').classList.add('hidden');
    document.getElementById('history-screen').classList.remove('hidden');
};
document.getElementById('clearHistoryBtn').onclick = () => {
    if(confirm('모든 회차의 기록을 삭제하시겠습니까?')) {
        localStorage.removeItem('aws_exam_sessions');
        showHistoryList();
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
document.getElementById('quitBtn').onclick = finishExam;

// 6. 시험 종료 및 결과 처리
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

    // 회차별 저장 로직 실행
    saveSession(score, currentExamQuestions.length, wrongList);
    
    // 결과 화면 렌더링
    renderResultScreen(score, stats, wrongList);
}

// 7. 회차별 저장 (Session Storage)
function saveSession(score, total, wrongList) {
    // 오답이 없어도 기록을 남길지 여부 (여기선 오답 없으면 저장 안 함 or 축하 메시지용으로 저장 가능. 현재는 오답 있을 때만 저장 추천)
    if (wrongList.length === 0) return;

    const sessions = JSON.parse(localStorage.getItem('aws_exam_sessions')) || [];
    
    const newSession = {
        id: Date.now(),
        round: sessions.length + 1, // 1회차, 2회차...
        date: new Date().toLocaleString(),
        score: `${score} / ${total}`,
        wrongList: wrongList
    };

    sessions.unshift(newSession); // 최신 회차가 위로 오게
    localStorage.setItem('aws_exam_sessions', JSON.stringify(sessions));
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

// 9. 오답노트 보관함 (회차 목록 보기)
function showHistoryList() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('history-screen').classList.remove('hidden');
    
    const sessions = JSON.parse(localStorage.getItem('aws_exam_sessions')) || [];
    const container = document.getElementById('history-sessions');
    container.innerHTML = '';

    if (sessions.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#666; padding:20px;">저장된 오답 기록이 없습니다.</p>';
        return;
    }

    sessions.forEach(session => {
        const div = document.createElement('div');
        div.className = 'session-item';
        div.innerHTML = `
            <div class="session-info">
                <span class="session-title">${session.round}회차 오답노트</span>
                <span class="session-date">${session.date}</span>
            </div>
            <span class="session-score">점수: ${session.score}</span>
        `;
        // 클릭 시 해당 회차 상세 보기로 이동
        div.onclick = () => showHistoryDetail(session);
        container.appendChild(div);
    });
}

// 10. 회차별 상세 보기
function showHistoryDetail(session) {
    document.getElementById('history-screen').classList.add('hidden');
    document.getElementById('history-detail-screen').classList.remove('hidden');

    document.getElementById('detail-title').innerText = `${session.round}회차 오답 노트`;
    
    const container = document.getElementById('history-detail-list');
    container.innerHTML = '';

    session.wrongList.forEach(w => {
        container.appendChild(createWrongItemElement(w));
    });
}

// 오답 아이템 HTML 생성 헬퍼
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
