let currentExamQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let isPracticeMode = false;
let currentSessionData = null; // 현재 보고 있는 오답노트 데이터 저장용

// 1. 문제 수 선택
const countBtns = document.querySelectorAll('.count-select button');
countBtns.forEach(btn => {
    btn.onclick = () => {
        countBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    };
});

// 2. 메인 버튼 이벤트
document.getElementById('startExamBtn').onclick = () => initExam(false);
document.getElementById('startPracticeBtn').onclick = () => initExam(true);
document.getElementById('historyBtn').onclick = showHistoryList;
document.getElementById('restartBtn').onclick = () => location.reload();

// 네비게이션
document.getElementById('backToStartBtn').onclick = () => {
    document.getElementById('history-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
};

document.getElementById('backToHistoryBtn').onclick = () => {
    document.getElementById('history-detail-screen').classList.add('hidden');
    document.getElementById('history-screen').classList.remove('hidden');
};

document.getElementById('clearHistoryBtn').onclick = () => {
    if(confirm('모든 기록을 삭제하시겠습니까?')) {
        localStorage.removeItem('aws_exam_sessions');
        showHistoryList();
    }
};

// ★ [추가된 기능] TXT 다운로드 버튼 이벤트 연결
document.getElementById('downloadTxtBtn').onclick = () => {
    if (currentSessionData) {
        downloadTxt(currentSessionData);
    }
};

// 3. 시험 초기화
function initExam(practice) {
    isPracticeMode = practice;
    const activeBtn = document.querySelector('.count-select button.active');
    const count = parseInt(activeBtn.dataset.count);
    
    currentExamQuestions = [...window.questions].sort(() => Math.random() - 0.5).slice(0, count);
    currentIndex = 0;
    userAnswers = new Array(count).fill(null);

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('exam-screen').classList.remove('hidden');
    
    const badge = document.getElementById('mode-badge');
    badge.innerText = isPracticeMode ? "🎓 연습 모드" : "📝 실전 모드";
    badge.style.background = isPracticeMode ? "#e8f5e9" : "#e7f5ff";
    badge.style.color = isPracticeMode ? "#2e7d32" : "#0056b3";

    showQuestion();
}

// 4. 문제 출력
function showQuestion() {
    const q = currentExamQuestions[currentIndex];
    document.getElementById('progress').innerText = `문제 ${currentIndex + 1} / ${currentExamQuestions.length}`;
    document.getElementById('question-title').innerText = q.title;

    document.getElementById('practice-feedback').classList.add('hidden');
    document.getElementById('checkAnswerBtn').classList.add('hidden');
    document.getElementById('nextBtn').classList.remove('hidden');

    const optionsList = document.getElementById('options');
    optionsList.innerHTML = '';

    q.options.forEach(opt => {
        const li = document.createElement('li');
        li.innerText = opt;
        
        if (userAnswers[currentIndex] === opt) {
            li.classList.add('selected');
        }

        li.onclick = () => {
            if (isPracticeMode && !document.getElementById('practice-feedback').classList.contains('hidden')) return;

            userAnswers[currentIndex] = opt;
            document.querySelectorAll('#options li').forEach(el => el.classList.remove('selected'));
            li.classList.add('selected');
        };
        optionsList.appendChild(li);
    });

    document.getElementById('prevBtn').style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    
    const nextBtn = document.getElementById('nextBtn');
    
    if (isPracticeMode) {
        document.getElementById('checkAnswerBtn').classList.remove('hidden');
        nextBtn.classList.add('hidden');
    } else {
        nextBtn.innerText = (currentIndex === currentExamQuestions.length - 1) ? '최종 제출' : '다음';
    }
}

// 5. 정답 확인 (연습 모드)
document.getElementById('checkAnswerBtn').onclick = () => {
    const selectedAnswer = userAnswers[currentIndex];
    if (!selectedAnswer) {
        alert("보기를 선택해주세요!");
        return;
    }

    const q = currentExamQuestions[currentIndex];
    const options = document.querySelectorAll('#options li');
    const feedbackBox = document.getElementById('practice-feedback');
    const msgBox = document.getElementById('feedback-msg');
    const expBox = document.getElementById('feedback-explanation');

    options.forEach(li => {
        if (li.innerText === q.answer) {
            li.classList.add('practice-correct');
        }
        if (li.innerText === selectedAnswer && selectedAnswer !== q.answer) {
            li.classList.add('practice-wrong');
        }
    });

    if (selectedAnswer === q.answer) {
        msgBox.innerHTML = "<span class='msg-correct'>✅ 정답입니다!</span>";
    } else {
        msgBox.innerHTML = "<span class='msg-wrong'>❌ 틀렸습니다.</span>";
    }
    expBox.innerText = q.explanation;
    feedbackBox.classList.remove('hidden');

    document.getElementById('checkAnswerBtn').classList.add('hidden');
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.classList.remove('hidden');
    nextBtn.innerText = (currentIndex === currentExamQuestions.length - 1) ? '결과 보기' : '다음';
};

// 6. 네비게이션
document.getElementById('nextBtn').onclick = () => {
    if (currentIndex === currentExamQuestions.length - 1) {
        finishExam();
    } else {
        currentIndex++;
        showQuestion();
        window.scrollTo(0,0);
    }
};

document.getElementById('prevBtn').onclick = () => {
    currentIndex--;
    showQuestion();
    window.scrollTo(0,0);
};

document.getElementById('quitBtn').onclick = finishExam;

// 7. 시험 종료
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

    saveSession(score, currentExamQuestions.length, wrongList);
    renderResultScreen(score, stats, wrongList);
}

// 8. 저장
function saveSession(score, total, wrongList) {
    if (wrongList.length === 0 && !confirm("오답이 없습니다. 기록을 저장할까요?")) return;

    const sessions = JSON.parse(localStorage.getItem('aws_exam_sessions')) || [];
    const newSession = {
        id: Date.now(),
        round: sessions.length + 1,
        mode: isPracticeMode ? '연습' : '실전',
        date: new Date().toLocaleString(),
        score: `${score} / ${total}`,
        wrongList: wrongList
    };

    sessions.unshift(newSession);
    localStorage.setItem('aws_exam_sessions', JSON.stringify(sessions));
}

// 9. 결과 화면
function renderResultScreen(score, stats, wrongList) {
    document.getElementById('exam-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');

    document.getElementById('score').innerText = `총 ${currentExamQuestions.length}문제 중 ${score}문제를 맞혔습니다!`;

    const statDiv = document.getElementById('category-stats');
    statDiv.innerHTML = '<h4>📊 카테고리별 정답률</h4>';
    for (const cat in stats) {
        const rate = Math.round((stats[cat].correct / stats[cat].total) * 100);
        statDiv.innerHTML += `<div class="stat-item"><span>${cat}</span> <strong>${rate}%</strong></div>`;
    }

    const wrongDiv = document.getElementById('wrong-list');
    wrongDiv.innerHTML = '';
    if (wrongList.length === 0) {
        wrongDiv.innerHTML = '<p style="text-align:center;">🎉 완벽합니다! 모든 문제를 맞히셨습니다.</p>';
    } else {
        wrongList.forEach(w => wrongDiv.appendChild(createWrongItemElement(w)));
    }
}

// 10. 오답노트 목록
function showHistoryList() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('history-screen').classList.remove('hidden');
    
    const sessions = JSON.parse(localStorage.getItem('aws_exam_sessions')) || [];
    const container = document.getElementById('history-sessions');
    container.innerHTML = '';

    if (sessions.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#666; padding:20px;">저장된 기록이 없습니다.</p>';
        return;
    }

    sessions.forEach(session => {
        const div = document.createElement('div');
        div.className = 'session-item';
        div.innerHTML = `
            <div class="session-info">
                <span class="session-title">[${session.mode || '실전'}] ${session.round}회차 오답노트</span>
                <span class="session-date">${session.date}</span>
            </div>
            <span class="session-score">${session.score}</span>
        `;
        div.onclick = () => showHistoryDetail(session);
        container.appendChild(div);
    });
}

function showHistoryDetail(session) {
    // 현재 세션 데이터를 전역 변수에 저장 (다운로드 시 사용)
    currentSessionData = session;

    document.getElementById('history-screen').classList.add('hidden');
    document.getElementById('history-detail-screen').classList.remove('hidden');
    document.getElementById('detail-title').innerText = `${session.round}회차 오답 노트`;
    
    const container = document.getElementById('history-detail-list');
    container.innerHTML = '';
    session.wrongList.forEach(w => container.appendChild(createWrongItemElement(w)));
}

// ★ [추가된 함수] TXT 다운로드 기능
function downloadTxt(session) {
    let content = `[AWS SAA-C03 오답노트]\n`;
    content += `회차: ${session.round}회차 (${session.mode} 모드)\n`;
    content += `일시: ${session.date}\n`;
    content += `점수: ${session.score}\n`;
    content += `--------------------------------------------------\n\n`;

    session.wrongList.forEach((w, index) => {
        content += `[문제 ${index + 1}] (${w.category})\n`;
        content += `Q. ${w.title}\n\n`;
        content += `❌ 나의 선택: ${w.user}\n`;
        content += `✅ 정답: ${w.correct}\n\n`;
        content += `💡 해설:\n${w.exp}\n`;
        content += `==================================================\n\n`;
    });

    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `오답노트_${session.round}회차_${new Date().toISOString().slice(0,10)}.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
}

function createWrongItemElement(w) {
    const div = document.createElement('div');
    div.className = 'wrong-item';
    div.innerHTML = `
        <div class="wrong-title"><span style="color:#007aff;">[${w.category}]</span> ${w.title}</div>
        <div class="wrong-detail" style="color:#ff4d4f;">❌ 내 선택: ${w.user}</div>
        <div class="wrong-detail" style="color:#28a745;">✅ 정답: ${w.correct}</div>
        <div class="wrong-exp">💡 ${w.exp}</div>
    `;
    return div;
}
