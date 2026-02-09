/**
 * 한국어 전용 AWS SAA-C03 문제 생성기 (통합본)
 */
const generateQuestions = () => {
    const data = [];
    const templates = [
        {
            category: "보안",
            title: "한 회사에서 AWS 리소스에 대한 접근 제어를 구성하려고 합니다.\n\n- 최소 권한 원칙 적용\n- 사용자와 서비스 권한 분리\n\n이 요구사항을 충족하는 가장 적절한 방법은 무엇입니까?",
            options: ["IAM 정책과 역할을 생성하여 권한 할당", "보안 그룹에서 모든 포트 개방", "NACL 규칙을 모두 제거", "관리자 계정 정보를 직원들과 공유"],
            answer: "IAM 정책과 역할을 생성하여 권한 할당",
            explanation: "IAM(Identity and Access Management)은 추가 비용 없이 가장 세밀한 권한 제어를 제공하는 보안의 핵심 서비스입니다."
        },
        {
            category: "네트워크",
            title: "VPC 내부의 프라이빗 서브넷에 있는 인스턴스가 업데이트를 위해 인터넷에 접속해야 합니다. 보안을 유지하며 이를 가능하게 하는 방법은 무엇입니까?",
            options: ["NAT 게이트웨이 사용", "인터넷 게이트웨이 직접 연결", "모든 포트 포워딩 설정", "퍼블릭 IP 할당"],
            answer: "NAT 게이트웨이 사용",
            explanation: "NAT 게이트웨이는 외부에서 내부로의 접속은 차단하면서 내부에서 외부로 나가는 트래픽만 허용하여 보안을 유지합니다."
        },
        {
            category: "저장소",
            title: "데이터의 내구성이 가장 높으며, 여러 가용 영역에 걸쳐 데이터를 자동으로 복제하여 보관하는 서비스는 무엇입니까?",
            options: ["Amazon S3", "인스턴스 스토어", "단일 영역 EBS", "로컬 드라이브"],
            answer: "Amazon S3",
            explanation: "S3는 99.999999999%의 내구성을 설계 목표로 하며 자동으로 여러 가용 영역에 데이터를 복제합니다."
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
