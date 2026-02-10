let currentExamQuestions = [];
let currentIndex = 0;
let userAnswers = []; // 사용자가 선택한 답 (단일값 또는 배열)
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

    // 메인 버튼
    document.getElementById('startExamBtn').addEventListener('click', () => startExam(false));
    document.getElementById('startPracticeBtn').addEventListener('click', () => startExam(true));
    document.getElementById('historyBtn').addEventListener('click', showHistoryList);
    
    // 시험 네비게이션
    document.getElementById('prevBtn').addEventListener('click', goPrev);
    document.getElementById('nextBtn').addEventListener('click', goNext);
    document.getElementById('checkAnswerBtn').addEventListener('click', checkAnswer);
    document.getElementById('quitBtn').addEventListener('click', finishExam);

    // 결과/오답노트 버튼
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

// 1. 시험 시작
function startExam(practiceMode) {
    if (!window.questions || window.questions.length === 0) return alert("문제 데이터 오류!");

    isPracticeMode = practiceMode;
    const count = parseInt(document.querySelector('.count-select button.active').dataset.count);

    currentExamQuestions = [...window.questions].sort(() => Math.random() - 0.5).slice(0, count);
    currentIndex = 0;
    userAnswers = new Array(count).fill(null);

    showScreen(document.getElementById('exam-screen'));
    
    const badge = document.getElementById('mode-badge');
    badge.innerText = isPracticeMode ? "🎓 연습 모드" : "📝 실전 모드";
    badge.className = isPracticeMode ? 'badge practice-badge' : 'badge real-badge';

    renderQuestion();
}

// 2. 문제 렌더링 (다중 선택 UI 지원)
function renderQuestion() {
    const q = currentExamQuestions[currentIndex];
    // 정답이 배열이면 다중 선택 문제
    const isMulti = Array.isArray(q.answer) && q.answer.length > 1;
    
    document.getElementById('progress').innerText = `문제 ${currentIndex + 1} / ${currentExamQuestions.length}`;
    
    // 문제 제목에 (N개 선택) 표시
    let titleText = q.title;
    if (isMulti) titleText += ` <span style="color:#ff3b30; font-size:0.9em;">(${q.answer.length}개 선택)</span>`;
    document.getElementById('question-title').innerHTML = titleText;

    // 초기화
    document.getElementById('practice-feedback').classList.add('hidden');
    document.getElementById('checkAnswerBtn').classList.add('hidden');
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.classList.remove('hidden');

    const optionsList = document.getElementById('options');
    optionsList.innerHTML = '';

    // 현재 저장된 사용자 답안 가져오기
    let currentAns = userAnswers[currentIndex];
    // 다중 선택인데 답이 없으면 빈 배열로 초기화
    if (isMulti && !currentAns) currentAns = [];

    q.options.forEach(opt => {
        const li = document.createElement('li');
        li.innerText = opt;
        
        // 선택 상태 표시 (단일 vs 다중)
        if (isMulti) {
            if (currentAns.includes(opt)) li.classList.add('selected');
        } else {
            if (currentAns === opt) li.classList.add('selected');
        }

        li.onclick = () => selectOption(li, opt, isMulti);
        optionsList.appendChild(li);
    });

    document.getElementById('prevBtn').style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    
    // 연습모드 버튼 제어
    if (isPracticeMode) {
        // 이미 푼 문제(정답 확인됨)인지 체크
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

// 3. 보기 선택 로직 (다중 선택 지원)
function selectOption(liElement, opt, isMulti) {
    if (isPracticeMode && !document.getElementById('practice-feedback').classList.contains('hidden')) return;

    if (isMulti) {
        // 다중 선택: 배열에 추가/삭제 (Toggle)
        let ansArray = userAnswers[currentIndex] || [];
        
        if (ansArray.includes(opt)) {
            ansArray = ansArray.filter(a => a !== opt); // 선택 해제
            liElement.classList.remove('selected');
        } else {
            ansArray.push(opt); // 선택 추가
            liElement.classList.add('selected');
        }
        userAnswers[currentIndex] = ansArray;
    } else {
        // 단일 선택
        userAnswers[currentIndex] = opt;
        document.querySelectorAll('#options li').forEach(el => el.classList.remove('selected'));
        liElement.classList.add('selected');
    }
}

// 4. 정답 확인 (연습 모드)
function checkAnswer() {
    const q = currentExamQuestions[currentIndex];
    const myAns = userAnswers[currentIndex];
    const isMulti = Array.isArray(q.answer);

    if (!myAns || (isMulti && myAns.length === 0)) {
        alert("답을 선택해주세요.");
        return;
    }

    const options = document.querySelectorAll('#options li');
    let isCorrect = false;

    if (isMulti) {
        // 배열 비교 (순서 무관하게 정렬 후 문자열 비교)
        const sortedMyAns = [...myAns].sort().toString();
        const sortedCorrect = [...q.answer].sort().toString();
        isCorrect = (sortedMyAns === sortedCorrect);

        options.forEach(li => {
            const txt = li.innerText;
            if (q.answer.includes(txt)) li.classList.add('practice-correct'); // 정답 표시
            if (myAns.includes(txt) && !q.answer.includes(txt)) li.classList.add('practice-wrong'); // 내가 틀린 것
        });
    } else {
        isCorrect = (myAns === q.answer);
        options.forEach(li => {
            if (li.innerText === q.answer) li.classList.add('practice-correct');
            if (li.innerText === myAns && myAns !== q.answer) li.classList.add('practice-wrong');
        });
    }

    const msgBox = document.getElementById('feedback-msg');
    const expBox = document.getElementById('feedback-explanation');
    const feedbackBox = document.getElementById('practice-feedback');

    if (isCorrect) {
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

// 5. 시험 종료 및 채점
function finishExam() {
    if (!confirm("시험을 종료하고 결과를 확인하시겠습니까?")) return;

    let score = 0;
    const stats = {};
    const wrongList = [];

    currentExamQuestions.forEach((q, idx) => {
        const myAns = userAnswers[idx];
        const isMulti = Array.isArray(q.answer);
        let isCorrect = false;

        if (isMulti) {
            // 다중 정답 비교
            if (myAns && Array.isArray(myAns)) {
                const sortedMy = [...myAns].sort().toString();
                const sortedAns = [...q.answer].sort().toString();
                isCorrect = (sortedMy === sortedAns);
            }
        } else {
            isCorrect = (myAns === q.answer);
        }
        
        // 통계
        if (!stats[q.category]) stats[q.category] = { total: 0, correct: 0 };
        stats[q.category].total++;

        if (isCorrect) {
            score++;
            stats[q.category].correct++;
        } else {
            // 오답 노트 데이터 구성
            let userStr = isMulti ? (myAns ? myAns.join(", ") : "미선택") : (myAns || "미선택");
            let ansStr = isMulti ? q.answer.join(", ") : q.answer;

            wrongList.push({
                title: q.title,
                category: q.category,
                user: userStr,
                correct: ansStr,
                exp: q.explanation
            });
        }
    });

    saveSession(score, currentExamQuestions.length, wrongList);
    showResult(score, stats, wrongList);
}

// 6. 결과 화면
function showResult(score, stats, wrongList) {
    showScreen(document.getElementById('result-screen'));
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

// 7. 데이터 저장
function saveSession(score, total, wrongList) {
    const sessions = JSON.parse(localStorage.getItem('aws_exam_sessions')) || [];
    const newSession = {
        id: Date.now(), // 고유 ID (삭제 시 사용)
        round: sessions.length + 1,
        mode: isPracticeMode ? '연습' : '실전',
        date: new Date().toLocaleString(),
        score: `${score} / ${total}`,
        wrongList: wrongList
    };
    sessions.unshift(newSession);
    localStorage.setItem('aws_exam_sessions', JSON.stringify(sessions));
}

// 8. 오답노트 목록 & 개별 삭제 기능
function showHistoryList() {
    showScreen(document.getElementById('history-screen'));
    const sessions = JSON.parse(localStorage.getItem('aws_exam_sessions')) || [];
    const container = document.getElementById('history-sessions');
    container.innerHTML = '';

    if (sessions.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#666; padding:20px;">저장된 기록이 없습니다.</p>';
        return;
    }

    sessions.forEach(session => {
        const item = document.createElement('div');
        item.className = 'session-item';
        
        // 클릭하면 상세 보기
        item.onclick = (e) => {
            showHistoryDetail(session);
        };

        // 내용 구성 (삭제 버튼 포함)
        item.innerHTML = `
            <div class="session-info">
                <span class="session-title">[${session.mode}] ${session.round}회차 (${session.date})</span>
            </div>
            <div class="session-right">
                <span class="session-score">${session.score}</span>
                <button class="btn-delete-session" data-id="${session.id}">🗑️</button>
            </div>
        `;
        
        container.appendChild(item);
    });

    // 삭제 버튼 이벤트 리스너 (이벤트 버블링 방지)
    document.querySelectorAll('.btn-delete-session').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation(); // 부모(item)의 클릭 이벤트 방지
            const id = Number(e.target.dataset.id);
            deleteSession(id);
        };
    });
}

// 9. 개별 세션 삭제
function deleteSession(id) {
    if (!confirm("정말 이 기록을 삭제하시겠습니까?")) return;

    let sessions = JSON.parse(localStorage.getItem('aws_exam_sessions')) || [];
    sessions = sessions.filter(s => s.id !== id);
    localStorage.setItem('aws_exam_sessions', JSON.stringify(sessions));
    
    showHistoryList(); // 목록 갱신
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
            <div class="wrong-title"><span style="color:#007aff;">[${w.category}]</span> ${w.title}</div>
            <div class="wrong-detail" style="color:#ff4d4f;">❌ 내 선택: ${w.user}</div>
            <div class="wrong-detail" style="color:#28a745;">✅ 정답: ${w.correct}</div>
            <div class="wrong-exp">💡 ${w.exp}</div>
        `;
        container.appendChild(div);
    });
}

function showScreen(screen) {
    const screens = document.querySelectorAll('#app > section');
    screens.forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
}

function downloadTxt(session) {
    let content = `[AWS SAA-C03 오답노트]\n회차: ${session.round}회차\n일시: ${session.date}\n점수: ${session.score}\n\n`;
    session.wrongList.forEach((w, i) => {
        content += `[문제 ${i+1}] ${w.title}\n❌ 선택: ${w.user}\n✅ 정답: ${w.correct}\n💡 해설:\n${w.exp}\n\n================\n\n`;
    });
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = `오답노트_${session.round}회차.txt`;
    a.click();
}
