/*************************************************
 * AWS SAA-C03 REALISTIC KOREAN QUESTION GENERATOR
 *************************************************/

const QUESTION_BANK = {
  EC2: {
    situation: "한 회사에서 트래픽 변동이 큰 웹 애플리케이션을 Amazon EC2에서 운영하고 있습니다.",
    requirements: [
      "트래픽 증가 시 자동으로 확장되어야 합니다.",
      "장애 발생 시 서비스 중단 없이 운영되어야 합니다."
    ],
    question: "이 요구사항을 충족하는 가장 적절한 아키텍처는 무엇입니까?",
    options: [
      "단일 EC2 인스턴스를 사용한다.",
      "Auto Scaling 그룹과 Application Load Balancer를 사용한다.",
      "EC2 인스턴스에 퍼블릭 IP를 직접 할당한다.",
      "온프레미스 서버로 이전한다."
    ],
    answer: 1,
    explanation: "Auto Scaling과 ALB는 고가용성과 자동 확장을 고려한 표준 아키텍처입니다."
  },

  S3: {
    situation: "한 글로벌 서비스에서 대용량 정적 콘텐츠를 전 세계 사용자에게 제공해야 합니다.",
    requirements: [
      "높은 내구성이 요구됩니다.",
      "비용 효율성이 중요합니다."
    ],
    question: "이 요구사항을 충족하는 가장 적절한 AWS 서비스는 무엇입니까?",
    options: [
      "Amazon EBS",
      "Amazon EFS",
      "Amazon S3",
      "Amazon FSx"
    ],
    answer: 2,
    explanation: "Amazon S3는 높은 내구성과 비용 효율성을 제공합니다."
  },

  RDS: {
    situation: "한 회사에서 관계형 데이터베이스를 운영하고 있습니다.",
    requirements: [
      "운영 부담을 최소화해야 합니다.",
      "자동 백업과 장애 복구가 필요합니다."
    ],
    question: "가장 적절한 AWS 데이터베이스 서비스는 무엇입니까?",
    options: [
      "EC2에 직접 데이터베이스 설치",
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon S3"
    ],
    answer: 1,
    explanation: "Amazon RDS는 관리형 관계형 데이터베이스 서비스입니다."
  },

  IAM: {
    situation: "한 회사에서 AWS 리소스에 대한 접근 제어를 구성하려고 합니다.",
    requirements: [
      "최소 권한 원칙을 적용해야 합니다.",
      "사용자와 서비스의 권한을 분리해야 합니다."
    ],
    question: "이 요구사항을 충족하는 가장 적절한 방법은 무엇입니까?",
    options: [
      "보안 그룹을 사용한다.",
      "IAM 정책과 역할을 사용한다.",
      "NACL을 사용한다.",
      "Route Table을 설정한다."
    ],
    answer: 1,
    explanation: "IAM 정책과 역할은 AWS 권한 관리를 위한 핵심 요소입니다."
  },

  VPC: {
    situation: "한 회사에서 VPC 네트워크를 설계하고 있습니다.",
    requirements: [
      "서브넷 단위로 트래픽을 제어해야 합니다.",
      "보안 규칙을 명확히 분리해야 합니다."
    ],
    question: "이 요구사항을 충족하는 가장 적절한 구성 요소는 무엇입니까?",
    options: [
      "Security Group",
      "Network ACL",
      "Internet Gateway",
      "Elastic IP"
    ],
    answer: 1,
    explanation: "Network ACL은 서브넷 수준에서 트래픽을 제어합니다."
  }
};

/*************************************************
 * 문장 변형기 (AWS 시험 느낌 강화)
 *************************************************/

function variationText(i) {
  const variations = [
    "비용 최적화가 중요합니다.",
    "고가용성이 핵심 요구사항입니다.",
    "운영 오버헤드를 최소화해야 합니다.",
    "보안 요구사항이 매우 엄격합니다."
  ];
  return variations[i % variations.length];
}

/*************************************************
 * 200문제 자동 생성
 *************************************************/

function generateQuestions(target = 200) {
  const categories = Object.keys(QUESTION_BANK);
  const questions = [];
  let id = 1;

  while (questions.length < target) {
    for (const key of categories) {
      if (questions.length >= target) break;

      const q = QUESTION_BANK[key];

      questions.push({
        id,
        category: key,
        question: `
${q.situation}
이 회사는 다음 요구사항을 충족해야 합니다.
- ${q.requirements.join("\n- ")}
- ${variationText(id)}

${q.question}
        `.trim(),
        options: [...q.options],
        answer: q.answer,
        explanation: q.explanation
      });

      id++;
    }
  }

  return questions;
}

const QUESTIONS = generateQuestions(200);

console.log("✅ AWS SAA-C03 Korean Questions Loaded:", QUESTIONS.length);
