// 전역 변수
let currentExamQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let isPracticeMode = false;
let currentSessionData = null;

// DOM 요소 미리 찾기 (오류 방지)
const startScreen = document.getElementById('start-screen');
const examScreen = document.getElementById('exam-screen');
const resultScreen = document.getElementById('result-screen');
const historyScreen = document.getElementById('history-screen');
const historyDetailScreen = document.getElementById('history-detail-screen');

// 1. 초기화 및 이벤트 리스너 등록
document.addEventListener('DOMContentLoaded', () => {
    
    // 문제 수 선택 버튼
    const countBtns = document.querySelectorAll('.count-select button');
    countBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            countBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // 메인 화면 버튼들
    document.getElementById('startExamBtn').addEventListener('click', () => startExam(false));
    document.getElementById('startPracticeBtn').addEventListener('click', () => startExam(true));
    document.getElementById('historyBtn').addEventListener('click', showHistoryList);
    
    // 시험 화면 버튼들
    document.getElementById('prevBtn').addEventListener('click', goPrev);
    document.getElementById('nextBtn').addEventListener('click', goNext);
    document.getElementById('checkAnswerBtn').addEventListener('click', checkAnswer); // 연습모드 정답확인
    document.getElementById('quitBtn').addEventListener('click', finishExam); // 중도제출

    // 결과 화면 버튼
    document.getElementById('restartBtn').addEventListener('click', () => location.reload());

    // 오답노트 관련 버튼
    document.getElementById('backToStartBtn').addEventListener('click', showMainScreen);
    document.getElementById('clearHistoryBtn').addEventListener('click', clearHistory);
    document.getElementById('backToHistoryBtn').addEventListener('click', showHistoryList);
    
    // TXT 다운로드 버튼 (있을 경우에만 연결)
    const downloadBtn = document.getElementById('downloadTxtBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            if (currentSessionData) downloadTxt(currentSessionData);
        });
    }
});

// 2. 시험 시작 함수
function startExam(practiceMode) {
    if (!window.questions || window.questions.length === 0) {
        alert("문제 데이터가 로드되지 않았습니다. questions.js 파일을 확인해주세요.");
        return;
    }

    isPracticeMode = practiceMode;
    const activeBtn = document.querySelector('.count-select button.active');
    const count = parseInt(activeBtn.dataset.count);

    // 문제 섞어서 뽑기
    currentExamQuestions = [...window.questions].sort(() => Math.random() - 0.5).slice(0, count);
    currentIndex = 0;
    userAnswers = new Array(count).fill(null);

    // 화면 전환
    showScreen(examScreen);

    // 모드 표시
    const badge = document.getElementById('mode-badge');
    badge.innerText = isPracticeMode ? "🎓 연습 모드" : "📝 실전 모드";
    badge.style.background = isPracticeMode ? "#e8f5e9" : "#e7f5ff";
    badge.style.color = isPracticeMode ? "#2e7d32" : "#0056b3";

    renderQuestion();
}

// 3. 문제 렌더링
function renderQuestion() {
    const q = currentExamQuestions[currentIndex];
    
    // 진행도 표시
    document.getElementById('progress').innerText = `문제 ${currentIndex + 1} / ${currentExamQuestions.length}`;
    document.getElementById('question-title').innerText = q.title;

    // 연습모드용 피드백 숨기기
    document.getElementById('practice-feedback').classList.add('hidden');
    document.getElementById('checkAnswerBtn').classList.add('hidden');
    
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.classList.remove('hidden');

    // 보기 출력
    const optionsList = document.getElementById('options');
    optionsList.innerHTML = '';

    q.options.forEach(opt => {
        const li = document.createElement('li');
        li.innerText = opt;
        
        // 이미 선택한 답 표시
        if (userAnswers[currentIndex] === opt) {
            li.classList.add('selected');
        }

        li.onclick = () => selectOption(li, opt);
        optionsList.appendChild(li);
    });

    // 버튼 상태 관리
    document.getElementById('prevBtn').style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    
    // 모드별 버튼 설정
    if (isPracticeMode) {
        // 이미 푼 문제면 정답 확인 안 해도 됨
        if (userAnswers[currentIndex] && document.querySelector('.practice-correct')) {
             nextBtn.classList.remove('hidden');
        } else {
             document.getElementById('checkAnswerBtn').classList.remove('hidden');
             nextBtn.classList.add('hidden');
        }
    } else {
        nextBtn.innerText = (currentIndex === currentExamQuestions.length - 1) ? '최종 제출' : '다음';
    }
}

// 4. 보기 선택
function selectOption(liElement, opt) {
    // 연습모드에서 이미 정답 확인했으면 수정 불가
    if (isPracticeMode && !document.getElementById('practice-feedback').classList.contains('hidden')) return;

    userAnswers[currentIndex] = opt;

    // UI 갱신
    const allOptions = document.querySelectorAll('#options li');
    allOptions.forEach(el => el.classList.remove('selected'));
    liElement.classList.add('selected');
}

// 5. 다음/이전 문제 이동
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

// 6. 연습모드 정답 확인
function checkAnswer() {
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

    // 정답/오답 표시
    options.forEach(li => {
        if (li.innerText === q.answer) li.classList.add('practice-correct');
        if (li.innerText === selectedAnswer && selectedAnswer !== q.answer) li.classList.add('practice-wrong');
    });

    // 메시지 표시
    if (selectedAnswer === q.answer) {
        msgBox.innerHTML = "<span class='msg-correct'>✅ 정답입니다!</span>";
    } else {
        msgBox.innerHTML = "<span class='msg-wrong'>❌ 틀렸습니다.</span>";
    }
    expBox.innerText = q.explanation;
    feedbackBox.classList.remove('hidden');

    // 버튼 교체
    document.getElementById('checkAnswerBtn').classList.add('hidden');
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.classList.remove('hidden');
    nextBtn.innerText = (currentIndex === currentExamQuestions.length - 1) ? '결과 보기' : '다음';
}

// 7. 시험 종료 및 결과 처리
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
    showResult(score, stats, wrongList);
}

// 8. 결과 화면 표시
function showResult(score, stats, wrongList) {
    showScreen(resultScreen);
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
        wrongList.forEach(w => {
            const div = document.createElement('div');
            div.className = 'wrong-item';
            div.innerHTML = `
                <div class="wrong-title"><span style="color:#007aff;">[${w.category}]</span> ${w.title}</div>
                <div class="wrong-detail" style="color:#ff4d4f;">❌ 내 선택: ${w.user}</div>
                <div class="wrong-detail" style="color:#28a745;">✅ 정답: ${w.correct}</div>
                <div class="wrong-exp">💡 ${w.exp}</div>
            `;
            wrongDiv.appendChild(div);
        });
    }
}

// 9. 데이터 저장
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

// 10. 오답노트 목록 표시
function showHistoryList() {
    showScreen(historyScreen);
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
                <span class="session-title">[${session.mode}] ${session.round}회차 (${session.date})</span>
            </div>
            <span class="session-score">${session.score}</span>
        `;
        div.onclick = () => showHistoryDetail(session);
        container.appendChild(div);
    });
}

function showHistoryDetail(session) {
    currentSessionData = session;
    showScreen(historyDetailScreen);
    document.getElementById('detail-title').innerText = `${session.round}회차 오답 노트`;
    
    const container = document.getElementById('history-detail-list');
    container.innerHTML = '';
    
    session.wrongList.forEach(w => {
        const div = document.createElement('div');
        div.className = 'wrong-item';
        div.innerHTML = `
            <div class="wrong-title"><span style="color:#007aff;">[${w.category}]</span> ${w.title}</div>
            <div class="wrong-detail" style="color:#ff4d4f;">❌ 내 선택: ${w.user}</div>
            <div class="wrong-detail" style="color:#28a745;">✅ 정답: ${w.correct}</div>
            <div class="wrong-exp">💡 ${w.exp}</div>
        `;
        container.appendChild(div);
    });
}

// 11. 화면 전환 유틸리티
function showScreen(screen) {
    [startScreen, examScreen, resultScreen, historyScreen, historyDetailScreen].forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
}

function showMainScreen() {
    showScreen(startScreen);
}

function clearHistory() {
    if(confirm('모든 기록을 삭제하시겠습니까?')) {
        localStorage.removeItem('aws_exam_sessions');
        showHistoryList();
    }
}

// 12. TXT 다운로드 기능
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
    a.download = `오답노트_${session.round}회차.txt`;
    a.click();
    window.URL.revokeObjectURL(url);
}
