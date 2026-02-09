/*************************************************
 * AWS SAA-C03 KOREAN PRACTICE QUESTIONS
 * SAFE AUTO GENERATOR (200 QUESTIONS)
 *************************************************/

const CATEGORIES = {
  EC2: {
    base: "회사에서 웹 애플리케이션을 EC2 인스턴스에서 운영하고 있습니다.",
    question: "확장성과 가용성을 가장 높이기 위한 AWS 아키텍처는 무엇입니까?",
    options: [
      "단일 EC2 인스턴스 사용",
      "Auto Scaling 그룹과 Application Load Balancer 사용",
      "EC2 인스턴스에 퍼블릭 IP 직접 할당",
      "온프레미스 서버로 이전"
    ],
    answer: 1,
    explanation: "Auto Scaling과 ALB는 고가용성과 확장성을 제공합니다."
  },

  S3: {
    base: "대용량 정적 파일을 저장하고 전 세계 사용자에게 제공해야 합니다.",
    question: "가장 비용 효율적인 AWS 스토리지 서비스는 무엇입니까?",
    options: [
      "EBS",
      "EFS",
      "Amazon S3",
      "Amazon FSx"
    ],
    answer: 2,
    explanation: "Amazon S3는 확장 가능하고 비용 효율적인 객체 스토리지입니다."
  },

  RDS: {
    base: "관계형 데이터베이스를 관리형 서비스로 운영하려고 합니다.",
    question: "운영 부담을 최소화할 수 있는 AWS 서비스는 무엇입니까?",
    options: [
      "EC2에 직접 DB 설치",
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon S3"
    ],
    answer: 1,
    explanation: "Amazon RDS는 패치, 백업, 고가용성을 관리합니다."
  },

  IAM: {
    base: "AWS 리소스에 대한 접근 제어가 필요합니다.",
    question: "사용자와 서비스의 권한을 정의하는 가장 적절한 방법은 무엇입니까?",
    options: [
      "보안 그룹",
      "IAM 정책",
      "NACL",
      "Route Table"
    ],
    answer: 1,
    explanation: "IAM 정책은 사용자와 역할의 권한을 정의합니다."
  },

  VPC: {
    base: "VPC 내 서브넷 단위로 네트워크 트래픽을 제어해야 합니다.",
    question: "서브넷 레벨에서 트래픽을 제어하는 구성 요소는 무엇입니까?",
    options: [
      "Security Group",
      "Network ACL",
      "Internet Gateway",
      "Elastic IP"
    ],
    answer: 1,
    explanation: "NACL은 서브넷 수준에서 동작합니다."
  }
};

/*************************************************
 * SAA-C03 스타일 문장 변형기
 *************************************************/

function scenarioPrefix(i) {
  const prefixes = [
    "한 스타트업에서",
    "글로벌 서비스 기업에서",
    "전자상거래 플랫폼에서",
    "모바일 애플리케이션을 운영하는 회사에서",
    "대규모 트래픽을 처리하는 서비스에서"
  ];
  return prefixes[i % prefixes.length];
}

function scenarioConstraint(i) {
  const constraints = [
    "높은 가용성이 요구됩니다.",
    "비용 최적화가 중요합니다.",
    "운영 부담을 최소화해야 합니다.",
    "보안이 가장 중요한 요구사항입니다.",
    "확장성이 핵심 요구사항입니다."
  ];
  return constraints[i % constraints.length];
}

/*************************************************
 * 200문제 자동 생성 (절대 안 깨짐)
 *************************************************/

function generateQuestions(target = 200) {
  const categories = Object.keys(CATEGORIES);
  const questions = [];
  let id = 1;

  while (questions.length < target) {
    for (const key of categories) {
      if (questions.length >= target) break;

      const c = CATEGORIES[key];

      questions.push({
        id: id,
        category: key,
        question:
          `${scenarioPrefix(id)} ${c.base} ${scenarioConstraint(id)}\n\n` +
          c.question,
        options: [...c.options],
        answer: c.answer,
        explanation: c.explanation
      });

      id++;
    }
  }

  return questions;
}

/*************************************************
 * FINAL EXPORT (중요)
 *************************************************/

const QUESTIONS = generateQuestions(200);

// 안전 확인
console.log("✅ AWS SAA-C03 QUESTIONS LOADED:", QUESTIONS.length);
