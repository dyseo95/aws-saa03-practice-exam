/**
 * AWS SAA-C03 문제 데이터
 */
const generateQuestions = () => {
    const data = [];
    const templates = [
        {
            category: "보안",
            title: "한 회사에서 AWS 리소스에 대한 접근 제어를 구성하려고 합니다.\n- 최소 권한 원칙 적용\n- 사용자와 서비스 권한 분리\n가장 적합한 솔루션은?",
            options: ["IAM 정책과 역할 활용", "보안 그룹 상시 개방", "NACL 규칙 제거", "관리자 계정 공유"],
            answer: "IAM 정책과 역할 활용",
            explanation: "IAM은 추가 비용 없이 가장 세밀한 권한 제어를 제공하는 보안 서비스입니다."
        },
        {
            category: "네트워크",
            title: "VPC 내부의 프라이빗 서브넷 인스턴스가 업데이트를 위해 인터넷에 접속해야 합니다. 보안을 유지하는 방법은?",
            options: ["NAT 게이트웨이 사용", "인터넷 게이트웨이 직접 연결", "모든 포트 포워딩", "퍼블릭 IP 할당"],
            answer: "NAT 게이트웨이 사용",
            explanation: "NAT 게이트웨이는 아웃바운드 트래픽만 허용하여 내부 인스턴스를 보호합니다."
        },
        {
            category: "저장소",
            title: "데이터 내구성이 가장 높으며, 여러 가용 영역에 자동 복제되는 스토리지 서비스는?",
            options: ["Amazon S3", "인스턴스 스토어", "EBS (단일 영역)", "로컬 디스크"],
            answer: "Amazon S3",
            explanation: "S3는 99.999999999%의 내구성을 제공하며 데이터를 자동으로 복제합니다."
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
