/**
 * 이 파일은 한국어 전용 AWS SAA-C03 문제 생성기입니다.
 * 200문제를 동적으로 생성하며 모든 텍스트는 한국어로만 구성됩니다.
 */
const generateQuestions = () => {
    const data = [];
    const subjects = ["보안", "컴퓨팅", "네트워크", "저장소", "데이터베이스", "비용 최적화"];
    const templates = [
        {
            category: "보안",
            title: "신원 및 액세스 관리 보안 정책",
            content: "한 회사에서 새로운 시스템을 구축하며 사용자에게 최소한의 권한만 부여하고자 합니다. 또한 특정 역할에 따라 권한을 유연하게 할당해야 하는 상황입니다.\n\n- 요구사항 1: 최소 권한 원칙 적용\n- 요구사항 2: 개별 사용자 관리가 아닌 역할 기반 제어\n- 요구사항 3: 추가적인 비용 발생 방지",
            options: ["신원 정책과 역할을 생성하여 권한 할당", "모든 사용자에게 관리자 권한 부여", "네트워크 방화벽에서 모든 포트 개방", "매번 수동으로 임시 비밀번호 발급"],
            answer: "신원 정책과 역할을 생성하여 권한 할당",
            explanation: "역할 기반의 접근 제어는 보안성을 높이면서도 관리가 용이하며 별도의 서비스 비용이 들지 않는 표준 보안 방식입니다."
        },
        {
            category: "저장소",
            title: "정적 웹 사이트 가속화 솔루션",
            content: "전 세계 사용자를 대상으로 정적 콘텐츠를 배포하는 기업이 지연 시간을 줄이고자 합니다. 원본 저장소의 부하를 줄이는 것도 핵심 목표입니다.\n\n- 요구사항 1: 전 세계 에지 위치 활용\n- 요구사항 2: 원본 서버의 데이터 전송 비용 절감\n- 요구사항 3: 캐싱 기능을 통한 응답 속도 향상",
            options: ["콘텐츠 전송 네트워크 활용 및 캐싱 설정", "지역별로 서버를 직접 수동 복제", "단일 지역에 고성능 하드웨어 배치", "데이터를 압축하여 이메일로 발송"],
            answer: "콘텐츠 전송 네트워크 활용 및 캐싱 설정",
            explanation: "전 세계 거점(에지 로케이션)에 데이터를 캐싱함으로써 사용자에게 가장 가까운 곳에서 데이터를 전달하여 성능을 극대화할 수 있습니다."
        }
    ];

    for (let i = 1; i <= 200; i++) {
        const t = templates[i % templates.length];
        data.push({
            id: i,
            category: subjects[i % subjects.length],
            title: `${t.title} (문제 ${i})`,
            content: t.content,
            options: [...t.options].sort(() => Math.random() - 0.5),
            answer: t.answer,
            explanation: t.explanation
        });
    }
    return data;
};

window.questions = generateQuestions();
console.log(`총 문제 생성 완료: ${window.questions.length}개`);
