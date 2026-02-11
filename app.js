let currentExamQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let isPracticeMode = false;
let currentSessionData = null;

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 문제 수 선택
    const countBtns = document.querySelectorAll('.count-select button');
    countBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            countBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // 버튼 이벤트 연결
    document.getElementById('startExamBtn').addEventListener('click', () => startExam(false));
    document.getElementById('startPracticeBtn').addEventListener('click', () => startExam(true));
    document.getElementById('historyBtn').addEventListener('click', showHistoryList);
    
    document.getElementById('prevBtn').addEventListener('click', goPrev);
    document.getElementById('nextBtn').addEventListener('click', goNext);
    document.getElementById('checkAnswerBtn').addEventListener('click', checkAnswer);
    document.getElementById('quitBtn').addEventListener('click', finishExam);
    
    document.getElementById('exitToMainBtn').addEventListener('click', () => {
        if(confirm("메인으로 돌아가시겠습니까?")) showMainScreen();
    });

    document.getElementById('restartBtn').addEventListener('click', () => location.reload());
    document.getElementById('backToStartBtn').addEventListener('click', showMainScreen);
    document.getElementById('clearHistoryBtn').addEventListener('click', clearAllHistory);
    document.getElementById('backToHistoryBtn').addEventListener('click', showHistoryList);
    
    const downloadBtn = document.getElementById('downloadTxtBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            if (currentSessionData) downloadTxt(currentSessionData);
        });
    }
});

function startExam(practiceMode) {
    if (!window.questions || window.questions.length === 0) return alert("문제 데이터가 없습니다.");

    isPracticeMode = practiceMode;
    const countBtn = document.querySelector('.count-select button.active');
    const count = countBtn ? parseInt(countBtn.dataset.count) : 30;

    // 단순 셔플 및 자르기
    currentExamQuestions = [...window.questions].sort(() => Math.random() - 0.5).slice(0, count);
    currentIndex = 0;
    userAnswers = new Array(count).fill(null);

    showScreen(document.getElementById('exam-screen'));
    
    const badge = document.getElementById('mode-badge');
    badge.innerText = isPracticeMode ? "🎓 연습 모드" : "📝 실전 모드";
    badge.className = isPracticeMode ? 'badge practice-badge' : 'badge real-badge';

    renderQuestion();
}

function renderQuestion() {
    const q = currentExamQuestions[currentIndex];
    
    document.getElementById('progress').innerText = `문제 ${currentIndex + 1} / ${currentExamQuestions.length}`;
    document.getElementById('question-title').innerText = q.title;

    document.getElementById('practice-feedback').classList.add('hidden');
    document.getElementById('checkAnswerBtn').classList.add('hidden');
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.classList.remove('hidden');

    const optionsList = document.getElementById('options');
    optionsList.innerHTML = '';

    q.options.forEach(opt => {
        const li = document.createElement('li');
        li.innerText = opt;
        
        // ★ 단일 선택 하이라이트
        if (userAnswers[currentIndex] === opt) {
            li.classList.add('selected');
        }

        li.onclick = () => selectOption(li, opt);
        optionsList.appendChild(li);
    });

    document.getElementById('prevBtn').style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    
    if (isPracticeMode) {
        // 이미 정답 확인을 한 상태인지 체크
        const isChecked = document.querySelector('.practice-correct') || document.querySelector('.practice-wrong');
        
        if (userAnswers[currentIndex] && !isChecked) { 
             document.getElementById('checkAnswerBtn').classList.remove('hidden');
             nextBtn.classList.add('hidden');
        } else if (isChecked) {
             nextBtn.classList.remove('hidden');
        } else {
             document.getElementById('checkAnswerBtn').classList.remove('hidden');
             nextBtn.classList.add('hidden');
        }
    } else {
        nextBtn.innerText = (currentIndex === currentExamQuestions.length - 1) ? '최종 제출' : '다음';
    }
}

function selectOption(liElement, opt) {
    if (isPracticeMode && !document.getElementById('practice-feedback').classList.contains('hidden')) return;

    // ★ 무조건 단일 선택 (기존 값 덮어쓰기)
    userAnswers[currentIndex] = opt;
    
    document.querySelectorAll('#options li').forEach(el => el.classList.remove('selected'));
    liElement.classList.add('selected');
}

function checkAnswer() {
    const q = currentExamQuestions[currentIndex];
    const myAns = userAnswers[currentIndex];

    if (!myAns) return alert("답을 선택해주세요.");

    const options = document.querySelectorAll('#options li');
    // ★ 단순 문자열 비교
    const isCorrect = (myAns === q.answer);

    options.forEach(li => {
        if (li.innerText === q.answer) li.classList.add('practice-correct');
        if (li.innerText === myAns && !isCorrect) li.classList.add('practice-wrong');
    });

    const msgBox = document.getElementById('feedback-msg');
    const expBox = document.getElementById('feedback-explanation');
    
    msgBox.innerHTML = isCorrect ? "<span class='msg-correct'>✅ 정답입니다!</span>" : "<span class='msg-wrong'>❌ 틀렸습니다.</span>";
    expBox.innerText = q.explanation;
    
    document.getElementById('practice-feedback').classList.remove('hidden');
    document.getElementById('checkAnswerBtn').classList.add('hidden');
    document.getElementById('nextBtn').classList.remove('hidden');
}

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

function finishExam() {
    if (!confirm("결과를 확인하시겠습니까?")) return;

    let score = 0;
    const stats = {};
    const wrongList = [];

    currentExamQuestions.forEach((q, idx) => {
        const myAns = userAnswers[idx];
        // ★ 단순 문자열 비교
        const isCorrect = (myAns === q.answer);
        
        if (!stats[q.category]) stats[q.category] = { total: 0, correct: 0 };
        stats[q.category].total++;

        if (isCorrect) {
            score++;
            stats[q.category].correct++;
        } else {
            wrongList.push({
                title: q.title,
                category: q.category,
                user: myAns || "미선택",
                correct: q.answer,
                exp: q.explanation
            });
        }
    });

    saveSession(score, currentExamQuestions.length, wrongList);
    showResult(score, currentExamQuestions.length, stats, wrongList);
}

function showResult(score, total, stats, wrongList) {
    showScreen(document.getElementById('result-screen'));
    
    // ★ 단순 점수 표시
    document.getElementById('score').innerHTML = `
        <div style="font-size:2rem; font-weight:bold; color:#007aff;">${score}점</div>
        <div>(총 ${total}문제 중 ${score}개 정답)</div>
    `;

    const statDiv = document.getElementById('category-stats');
    statDiv.innerHTML = '<h4>📊 정답률</h4>';
    for (const cat in stats) {
        const rate = Math.round((stats[cat].correct / stats[cat].total) * 100);
        statDiv.innerHTML += `<div class="stat-item"><span>${cat}</span> <strong>${rate}%</strong></div>`;
    }

    const wrongDiv = document.getElementById('wrong-list');
    wrongDiv.innerHTML = '';
    if (wrongList.length === 0) {
        wrongDiv.innerHTML = '<p style="text-align:center;">🎉 완벽합니다!</p>';
    } else {
        wrongList.forEach(w => {
            const div = document.createElement('div');
            div.className = 'wrong-item';
            div.innerHTML = `
                <div class="wrong-title">[${w.category}] ${w.title}</div>
                <div class="wrong-detail" style="color:#ff4d4f;">❌ 내 선택: ${w.user}</div>
                <div class="wrong-detail" style="color:#28a745;">✅ 정답: ${w.correct}</div>
                <div class="wrong-exp">💡 ${w.exp}</div>
            `;
            wrongDiv.appendChild(div);
        });
    }
}

function saveSession(score, total, wrongList) {
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

function showHistoryList() {
    showScreen(document.getElementById('history-screen'));
    const sessions = JSON.parse(localStorage.getItem('aws_exam_sessions')) || [];
    const container = document.getElementById('history-sessions');
    container.innerHTML = '';

    if (sessions.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#666;">기록이 없습니다.</p>';
        return;
    }

    sessions.forEach(session => {
        const item = document.createElement('div');
        item.className = 'session-item';
        item.innerHTML = `
            <div class="session-info">
                <span class="session-title">${session.round}회차 (${session.date})</span>
            </div>
            <span class="session-score">${session.score}</span>
        `;
        item.onclick = () => showHistoryDetail(session);
        container.appendChild(item);
    });
}

function clearAllHistory() {
    if(confirm('모든 기록을 삭제하시겠습니까?')) {
        localStorage.removeItem('aws_exam_sessions');
        showHistoryList();
    }
}

function showHistoryDetail(session) {
    currentSessionData = session;
    showScreen(document.getElementById('history-detail-screen'));
    document.getElementById('detail-title').innerText = `${session.round}회차 오답 노트`;
    
    const container = document.getElementById('history-detail-list');
    container.innerHTML = '';
    
    session.wrongList.forEach(w => {
        const div = document.createElement('div');
        div.className = 'wrong-item';
        div.innerHTML = `
            <div class="wrong-title">[${w.category}] ${w.title}</div>
            <div class="wrong-detail" style="color:#ff4d4f;">❌ 내 선택: ${w.user}</div>
            <div class="wrong-detail" style="color:#28a745;">✅ 정답: ${w.correct}</div>
            <div class="wrong-exp">💡 ${w.exp}</div>
        `;
        container.appendChild(div);
    });
}

function showMainScreen() {
    showScreen(document.getElementById('start-screen'));
}

function showScreen(screen) {
    const screens = document.querySelectorAll('#app > section');
    screens.forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
}

function downloadTxt(session) {
    let content = `[오답노트] ${session.round}회차\n점수: ${session.score}\n\n`;
    session.wrongList.forEach((w, i) => {
        content += `[문제 ${i+1}] ${w.title}\n❌ 선택: ${w.user}\n✅ 정답: ${w.correct}\n💡 해설:\n${w.exp}\n\n================\n\n`;
    });
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = `오답노트_${session.round}회차.txt`;
    a.click();
}
