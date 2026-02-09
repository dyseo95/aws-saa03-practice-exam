/**
 * 이 파일은 한국어 전용 AWS SAA-C03 문제 생성기입니다.
 */
const generateQuestions = () => {
    const data = [];
    const templates = [
        {
            category: "보안",
            content: "한 회사에서 AWS 리소스에 대한 접근 제어를 구성하려고 합니다. 이 회사는 다음 요구사항을 충족해야 합니다.\n\n- 최소 권한 원칙을 적용해야 합니다.\n- 사용자와 서비스의 권한을 분리해야 합니다.\n- 비용 최적화가 중요합니다.",
            options: ["보안 그룹을 사용한다.", "IAM 정책과 역할을 사용한다.", "NACL을 사용한다.", "라우팅 테이블을 수정한다."],
            answer: "IAM 정책과 역할을 사용한다.",
            explanation: "IAM 역할과 정책을 사용하면 개별 사용자나 서비스에 필요한 최소한의 권한만 부여할 수 있으며 추가 비용이 발생하지 않습니다."
        },
        {
            category: "데이터베이스",
            content: "신규 서비스가 높은 가용성을 필요로 하며, 읽기 요청이 폭주할 것으로 예상됩니다. 운영 부담을 줄이면서 성능을 확장해야 합니다.\n\n- 요구사항 1: 관리형 서비스 사용\n- 요구사항 2: 읽기 전용 복제본 생성 가능\n- 요구사항 3: 자동 백업 지원",
            options: ["Amazon RDS 사용", "EC2에 데이터베이스 직접 설치", "S3에 텍스트로 저장", "온프레미스 서버 활용"],
            answer: "Amazon RDS 사용",
            explanation: "Amazon RDS는 관리형 서비스로 읽기 전용 복제본과 자동 백업을 지원하여 운영 효율성을 극대화합니다."
        }
    ];

    for (let i = 1; i <= 200; i++) {
        const t = templates[i % templates.length];
        data.push({
            id: i,
            category: t.category,
            title: t.content, // 기존 app.js가 h2#question-title에 뿌리는 데이터
            options: t.options,
            answer: t.answer,
            explanation: t.explanation
        });
    }
    return data;
};

window.questions = generateQuestions();
