/**
 * 한국어 전용 AWS SAA-C03 문제 생성기
 */
const generateQuestions = () => {
    const data = [];
    const templates = [
        {
            category: "보안",
            title: "한 회사에서 AWS 리소스에 대한 접근 제어를 구성하려고 합니다. 이 회사는 다음 요구사항을 충족해야 합니다.\n\n- 최소 권한 원칙을 적용해야 합니다.\n- 사용자와 서비스의 권한을 분리해야 합니다.\n- 비용 최적화가 중요합니다.\n\n이 요구사항을 충족하는 가장 적절한 방법은 무엇입니까?",
            options: ["보안 그룹을 사용한다.", "IAM 정책과 역할을 사용한다.", "NACL을 사용한다.", "라우팅 테이블을 수정한다."],
            answer: "IAM 정책과 역할을 사용한다.",
            explanation: "IAM 역할과 정책은 최소 권한 원칙을 구현하는 표준 방법이며 비용이 발생하지 않습니다."
        },
        {
            category: "컴퓨팅",
            title: "애플리케이션의 가용성을 높이고 트래픽 변화에 따라 자동으로 자원을 확장하고자 합니다. 가장 적절한 서비스 조합은 무엇입니까?",
            options: ["단일 EC2 인스턴스 운영", "Auto Scaling과 로드 밸런서 결합", "S3 정적 웹 호스팅 전용", "CloudFront만 단독 사용"],
            answer: "Auto Scaling과 로드 밸런서 결합",
            explanation: "Auto Scaling은 수요에 따라 인스턴스 수를 조절하고, 로드 밸런서는 트래픽을 효율적으로 분산합니다."
        }
    ];

    for (let i = 1; i <= 200; i++) {
        const t = templates[i % templates.length];
        data.push({
            id: i,
            category: t.category,
            title: t.title,
            options: [...t.options].sort(() => Math.random() - 0.5),
            answer: t.answer,
            explanation: t.explanation
        });
    }
    return data;
};

window.questions = generateQuestions();
