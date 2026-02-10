let currentExamQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let isPracticeMode = false;
let currentSessionData = null;

// ==========================================
// 1. 초기화 및 이벤트 리스너
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
    // [1] 문제 수 선택
    const countBtns = document.querySelectorAll('.count-select button');
    countBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            countBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // [2] 메인 버튼
    document.getElementById('startExamBtn').addEventListener('click', () => startExam(false));
    document.getElementById('startPracticeBtn').addEventListener('click', () => startExam(true));
    document.getElementById('historyBtn').addEventListener('click', showHistoryList);
    
    // [3] 시험 화면 버튼
    document.getElementById('prevBtn').addEventListener('click', goPrev);
    document.getElementById('nextBtn').addEventListener('click', goNext);
    document.getElementById('checkAnswerBtn').addEventListener('click', checkAnswer);
    document.getElementById('quitBtn').addEventListener('click', finishExam);
    
    // 메인으로 나가기
    const exitBtn = document.getElementById('exitToMainBtn');
    if (exitBtn) {
        exitBtn.addEventListener('click', () => {
            if (confirm("문제 풀이를 중단하고 메인으로 돌아가시겠습니까?\n(현재 진행 상황은 저장되지 않습니다)")) {
                showMainScreen();
            }
        });
    }

    // [4] 결과 화면 버튼
    document.getElementById('restartBtn').addEventListener('click', () => location.reload());
    
    // [5] 오답노트 관련
    const backStartBtn = document.getElementById('backToStartBtn');
    if (backStartBtn) backStartBtn.addEventListener('click', showMainScreen);

    const clearHistoryBtn = document.getElementById('clearHistoryBtn');
    if (clearHistoryBtn) clearHistoryBtn.addEventListener('click', clearAllHistory);

    const backHistoryBtn = document.getElementById('backToHistoryBtn');
    if (backHistoryBtn) backHistoryBtn.addEventListener('click', showHistoryList);
    
    const downloadBtn = document.getElementById('downloadTxtBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            if (currentSessionData) downloadTxt(currentSessionData);
        });
    }
});


// ==========================================
// 2. 시험 로직
// ==========================================

function startExam(practiceMode) {
    if (!window.questions || window.questions.length === 0) return alert("문제 데이터 오류!");

    isPracticeMode = practiceMode;
    const countBtn = document.querySelector('.count-select button.active');
    const count = countBtn ? parseInt(countBtn.dataset.count) : 30;

    // -----------------------------------------------------------
    // ★ [핵심] 복수 정답 확률 높이기 로직
    // -----------------------------------------------------------
    
    // 1. 전체 문제를 복수형(multi)과 단일형(single)으로 분리
    const allQuestions = window.questions;
    const multiQuestions = allQuestions.filter(q => Array.isArray(q.answer) && q.answer.length > 1);
    const singleQuestions = allQuestions.filter(q => !Array.isArray(q.answer) || q.answer.length <= 1);

    // 2. 각각 무작위로 섞음
    multiQuestions.sort(() => Math.random() - 0.5);
    singleQuestions.sort(() => Math.random() - 0.5);

    // 3. 비율 설정 (예: 전체의 40%는 복수 정답 문제로 채움)
    // 데이터가 부족하면 있는 만큼만 가져옴
    const targetMultiCount = Math.min(Math.floor(count * 0.4), multiQuestions.length);
    const targetSingleCount = count - targetMultiCount;

    // 4. 문제 합치기 (복수형 + 단일형)
    let selectedQuestions = [
        ...multiQuestions.slice(0, targetMultiCount),
        ...singleQuestions.slice(0, targetSingleCount)
    ];

    // 만약 단일형 문제가 부족해서 개수가 모자라면, 남은 복수형에서 더 채움 (혹은 그 반대)
    if (selectedQuestions.length < count) {
        const remainingNeeded = count - selectedQuestions.length;
        const remainingMulti = multiQuestions.slice(targetMultiCount);
        selectedQuestions = selectedQuestions.concat(remainingMulti.slice(0, remainingNeeded));
    }

    // 5. 최종 셔플 (복수/단일 문제가 뭉쳐있지 않도록 다시 섞기)
    selectedQuestions.sort(() => Math.random() - 0.5);

    // -----------------------------------------------------------
    // ★ 실전 모드(65문제)일 때 더미 문제(채점 제외) 로직
    // -----------------------------------------------------------
    if (!isPracticeMode && count === 65) {
        const indices = Array.from({ length: count }, (_, i) => i);
        // 인덱스를 섞어서 앞의 15개 선택
        const dummyIndices = indices.sort(() => Math.random() - 0.5).slice(0, 15);
        
        selectedQuestions = selectedQuestions.map((q, idx) => ({
            ...q,
            isDummy: dummyIndices.includes(idx) // 더미 여부 플래그
        }));
    } else {
        selectedQuestions = selectedQuestions.map(q => ({ ...q, isDummy: false }));
    }

    currentExamQuestions = selectedQuestions;
    currentIndex = 0;
    userAnswers = new Array(count).fill(null);

    showScreen(document.getElementById('exam-screen'));
    
    const badge = document.getElementById('mode-badge');
    if (!isPracticeMode && count === 65) {
        badge.innerText = "🔥 실전 시뮬레이션";
        badge.className = "badge real-badge";
    } else {
        badge.innerText = isPracticeMode ? "🎓 연습 모드" : "📝 테스트";
        badge.className = isPracticeMode ? 'badge practice-badge' : 'badge real-badge';
    }

    renderQuestion();
}

function renderQuestion() {
    const q = currentExamQuestions[currentIndex];
    const isMulti = Array.isArray(q.answer) && q.answer.length > 1;
    
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
    if (isMulti && !currentAns) currentAns = [];

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
        const isChecked = document.querySelector('.practice-correct') || document.querySelector('.practice-wrong');
        
        if ((isMulti ? currentAns.length > 0 : currentAns) && !isChecked) { 
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

function selectOption(liElement, opt, isMulti) {
    if (isPracticeMode && !document.getElementById('practice-feedback').classList.contains('hidden')) return;

    if (isMulti) {
        let ansArray = userAnswers[currentIndex] || [];
        if (ansArray.includes(opt)) {
            ansArray = ansArray.filter(a => a !== opt);
            liElement.classList.remove('selected');
        } else {
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

    let correctCount = 0; 
    let validCorrectCount = 0; 
    let validTotalCount = 0; 
    
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

        if (!q.isDummy) {
            validTotalCount++;
        }

        if (isCorrect) {
            correctCount++;
            stats[q.category].correct++;
            
            if (!q.isDummy) validCorrectCount++;
        } else {
            let userStr = isMulti ? (myAns ? myAns.join(", ") : "미선택") : (myAns || "미선택");
            let ansStr = isMulti ? q.answer.join(", ") : q.answer;

            wrongList.push({
                title: q.title,
                category: q.category,
                user: userStr,
                correct: ansStr,
                exp: q.explanation,
                isDummy: q.isDummy
            });
        }
    });

    // 점수 계산 (기본 100점 + 알파)
    let awsScore = 0;
    const scoringBase = validTotalCount > 0 ? validTotalCount : currentExamQuestions.length;
    const scoringCorrect = validTotalCount > 0 ? validCorrectCount : correctCount;
    awsScore = Math.round(100 + (scoringCorrect / scoringBase) * 900);

    saveSession(awsScore, correctCount, currentExamQuestions.length, wrongList);
    showResult(awsScore, correctCount, currentExamQuestions.length, stats, wrongList, validTotalCount);
}


// ==========================================
// 3. 결과 및 오답노트
// ==========================================

function showResult(awsScore, correctCount, total, stats, wrongList, validTotalCount) {
    showScreen(document.getElementById('result-screen'));
    
    const scoreElement = document.getElementById('score');
    scoreElement.innerHTML = ''; 

    const scoreText = document.createElement('div');
    scoreText.style.fontSize = "1.0rem";
    scoreText.style.color = "#555";
    scoreText.style.marginBottom = "20px";
    
    let detailText = `(총 ${total}문제 중 ${correctCount}문제 정답)`;
    
    if (total === 65 && !isPracticeMode) {
        detailText = `<span style="color:#ff3b30; font-weight:bold;">(채점 대상: ${validTotalCount}문제 / 더미 제외: 15문제)</span><br>실제 채점 정답: ${Math.round((awsScore-100)/18)}개 (추정)`;
    }

    scoreText.innerHTML = `
        <div style="font-size: 2.8rem; color:#007aff; font-weight:800; margin-bottom:10px;">${awsScore}점</div>
        <div style="line-height:1.5;">${detailText}</div>
    `;
    scoreElement.appendChild(scoreText);

    if (total === 65 && !isPracticeMode) {
        const passScore = 720; 
        const badge = document.createElement('div');
        
        if (awsScore >= passScore) {
            badge.className = 'pass-badge';
            badge.innerText = "🎉 합격 (PASS)";
        } else {
            badge.className = 'fail-badge';
            badge.innerText = "😢 불합격 (FAIL)";
        }
        scoreElement.prepend(badge); 
    }

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
            
            let dummyBadge = "";
            if (w.isDummy) {
                dummyBadge = `<span style="background:#eee; color:#666; font-size:0.8em; padding:2px 6px; border-radius:4px; margin-left:5px;">⚠️ 채점 제외(Dummy)</span>`;
            }

            div.innerHTML = `
                <div class="wrong-title">
                    <span style="color:#007aff;">[${w.category}]</span> ${w.title} ${dummyBadge}
                </div>
                <div class="wrong-detail" style="color:#ff4d4f;">❌ 내 선택: ${w.user}</div>
                <div class="wrong-detail" style="color:#28a745;">✅ 정답: ${w.correct}</div>
                <div class="wrong-exp">💡 ${w.exp}</div>
            `;
            wrongDiv.appendChild(div);
        });
    }
}

function saveSession(awsScore, correctCount, total, wrongList) {
    const sessions = JSON.parse(localStorage.getItem('aws_exam_sessions')) || [];
    const newSession = {
        id: Date.now(),
        round: sessions.length + 1,
        mode: isPracticeMode ? '연습' : (total === 65 ? '실전' : '테스트'),
        date: new Date().toLocaleString(),
        scoreDisplay: `${awsScore}점`,
        score: awsScore,
        total: total,
        correct: correctCount,
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
        
        item.onclick = (e) => {
            if (!e.target.classList.contains('btn-delete-session')) {
                showHistoryDetail(session);
            }
        };

        const scoreText = session.scoreDisplay || session.score;

        item.innerHTML = `
            <div class="session-info">
                <span class="session-title">[${session.mode}] ${session.round}회차 (${session.date})</span>
            </div>
            <div class="session-right">
                <span class="session-score" style="color:#007aff;">${scoreText}</span>
                <button class="btn-delete-session" data-id="${session.id}" title="기록 삭제">🗑️</button>
            </div>
        `;
        container.appendChild(item);
    });

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
    if(confirm('모든 기록을 영구적으로 삭제하시겠습니까?')) {
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
        
        let dummyBadge = "";
        if (w.isDummy) {
            dummyBadge = `<span style="background:#eee; color:#666; font-size:0.8em; padding:2px 6px; border-radius:4px; margin-left:5px;">⚠️ 채점 제외(Dummy)</span>`;
        }

        div.innerHTML = `
            <div class="wrong-title"><span style="color:#007aff;">[${w.category}]</span> ${w.title} ${dummyBadge}</div>
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
    let content = `[AWS SAA-C03 오답노트]\n`;
    content += `회차: ${session.round}회차 (${session.mode})\n`;
    content += `일시: ${session.date}\n`;
    content += `점수: ${session.scoreDisplay || session.score}\n\n`;

    session.wrongList.forEach((w, i) => {
        let dummyText = w.isDummy ? " [⚠️ 채점 제외]" : "";
        content += `[문제 ${i+1}] ${w.title}${dummyText}\n❌ 선택: ${w.user}\n✅ 정답: ${w.correct}\n💡 해설:\n${w.exp}\n\n================\n\n`;
    });
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = window.URL.createObjectURL(blob);
    a.download = `오답노트_${session.round}회차.txt`;
    a.click();
}
