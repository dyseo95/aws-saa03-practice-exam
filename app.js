let currentExamQuestions = [];
let currentIndex = 0;
let userAnswers = []; // 사용자가 선택한 답 (단일값 또는 배열)
let isPracticeMode = false;
let currentSessionData = null;

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    const countBtns = document.querySelectorAll('.count-select button');
    countBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            countBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    document.getElementById('startExamBtn').addEventListener('click', () => startExam(false));
    document.getElementById('startPracticeBtn').addEventListener('click', () => startExam(true));
    document.getElementById('historyBtn').addEventListener('click', showHistoryList);
    
    document.getElementById('prevBtn').addEventListener('click', goPrev);
    document.getElementById('nextBtn').addEventListener('click', goNext);
    document.getElementById('checkAnswerBtn').addEventListener('click', checkAnswer);
    document.getElementById('quitBtn').addEventListener('click', finishExam);

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

function renderQuestion() {
    const q = currentExamQuestions[currentIndex];
    const isMulti = Array.isArray(q.answer) && q.answer.length > 1; // 다중 정답 여부 확인
    
    document.getElementById('progress').innerText = `문제 ${currentIndex + 1} / ${currentExamQuestions.length}`;
    
    let titleText = q.title;
    if (isMulti) titleText += ` <span style="color:#ff3b30; font-weight:bold; font-size:0.9em;">(${q.answer.length}개 선택)</span>`;
    document.getElementById('question-title').innerHTML = titleText;

    document.getElementById('practice-feedback').classList.add('hidden');
    document.getElementById('checkAnswerBtn').classList.add('hidden');
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.classList.remove('hidden');

    const optionsList = document.getElementById('options');
    optionsList.innerHTML = '';

    let currentAns = userAnswers[currentIndex];
    if (isMulti && !currentAns) currentAns = []; // 다중 선택 초기화

    q.options.forEach(opt => {
        const li = document.createElement('li');
        li.innerText = opt;
        
        if (isMulti) {
            if (currentAns.includes(opt)) li.classList.add('selected');
        } else {
            if (currentAns === opt) li.classList.add('selected');
        }

        li.onclick = () => selectOption(li, opt, isMulti);
        optionsList.appendChild(li);
    });

    document.getElementById('prevBtn').style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    
    if (isPracticeMode) {
        // 정답 확인 여부 체크 (UI 클래스로 확인)
        const isChecked = document.querySelector('.practice-correct') || document.querySelector('.practice-wrong');
        
        // 답을 선택했고 아직 확인 안 했으면 '정답 확인' 버튼 표시
        if ((isMulti ? currentAns.length > 0 : currentAns) && !isChecked) { 
             document.getElementById('checkAnswerBtn').classList.remove('hidden');
             nextBtn.classList.add('hidden');
        } else if (isChecked) { // 확인했으면 '다음' 버튼
             nextBtn.classList.remove('hidden');
        } else { // 선택 안 했으면 둘 다 숨김 (선택 시 표시됨)
             document.getElementById('checkAnswerBtn').classList.remove('hidden');
             nextBtn.classList.add('hidden');
        }
    } else {
        nextBtn.innerText = (currentIndex === currentExamQuestions.length - 1) ? '최종 제출' : '다음';
    }
}

function selectOption(liElement, opt, isMulti) {
    if (isPracticeMode && !document.getElementById('practice-feedback').classList.contains('hidden')) return;

    if (isMulti) {
        let ansArray = userAnswers[currentIndex] || [];
        if (ansArray.includes(opt)) {
            ansArray = ansArray.filter(a => a !== opt);
            liElement.classList.remove('selected');
        } else {
            // 정답 개수 제한 (선택적으로 해제 가능)
            const q = currentExamQuestions[currentIndex];
            if (ansArray.length >= q.answer.length) {
                alert(`최대 ${q.answer.length}개까지만 선택할 수 있습니다.`);
                return;
            }
            ansArray.push(opt);
            liElement.classList.add('selected');
        }
        userAnswers[currentIndex] = ansArray;
    } else {
        userAnswers[currentIndex] = opt;
        document.querySelectorAll('#options li').forEach(el => el.classList.remove('selected'));
        liElement.classList.add('selected');
    }
}

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
        // 배열 내용 비교 (정렬 후 문자열 변환 비교)
        const sortedMyAns = [...myAns].sort().toString();
        const sortedCorrect = [...q.answer].sort().toString();
        isCorrect = (sortedMyAns === sortedCorrect);

        options.forEach(li => {
            const txt = li.innerText;
            if (q.answer.includes(txt)) li.classList.add('practice-correct');
            if (myAns.includes(txt) && !q.answer.includes(txt)) li.classList.add('practice-wrong');
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
            if (myAns && Array.isArray(myAns)) {
                const sortedMy = [...myAns].sort().toString();
                const sortedAns = [...q.answer].sort().toString();
                isCorrect = (sortedMy === sortedAns);
            }
        } else {
            isCorrect = (myAns === q.answer);
        }
        
        if (!stats[q.category]) stats[q.category] = { total: 0, correct: 0 };
        stats[q.category].total++;

        if (isCorrect) {
            score++;
            stats[q.category].correct++;
        } else {
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
        container.innerHTML = '<p style="text-align:center; color:#666; padding:20px;">저장된 기록이 없습니다.</p>';
        return;
    }

    sessions.forEach(session => {
        const item = document.createElement('div');
        item.className = 'session-item';
        
        // 클릭하면 상세 보기 (삭제 버튼 제외)
        item.onclick = (e) => {
            if (!e.target.classList.contains('btn-delete-session')) {
                showHistoryDetail(session);
            }
        };

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

    // 개별 삭제 버튼 이벤트 연결
    document.querySelectorAll('.btn-delete-session').forEach(btn => {
        btn.onclick = (e) => {
            e.stopPropagation();
            const id = Number(e.target.dataset.id);
            deleteSession(id);
        };
    });
}

function deleteSession(id) {
    if (!confirm("정말 이 기록을 삭제하시겠습니까?")) return;
    let sessions = JSON.parse(localStorage.getItem('aws_exam_sessions')) || [];
    sessions = sessions.filter(s => s.id !== id);
    localStorage.setItem('aws_exam_sessions', JSON.stringify(sessions));
    showHistoryList();
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
