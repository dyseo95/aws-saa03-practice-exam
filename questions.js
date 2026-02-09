/*************************************************
 * AWS SAA-C03 QUESTIONS (SAFE AUTO GENERATOR)
 *************************************************/

const BASE_QUESTIONS = [
  {
    category: "EC2",
    question: "Which AWS service provides scalable virtual servers?",
    options: ["S3", "EC2", "Lambda", "RDS"],
    answer: 1,
    explanation: "EC2 provides resizable virtual servers."
  },
  {
    category: "S3",
    question: "Which AWS service is used for object storage?",
    options: ["EBS", "EFS", "S3", "FSx"],
    answer: 2,
    explanation: "Amazon S3 is object storage."
  },
  {
    category: "RDS",
    question: "Which service provides managed relational databases?",
    options: ["EC2", "DynamoDB", "RDS", "S3"],
    answer: 2,
    explanation: "Amazon RDS manages relational databases."
  },
  {
    category: "IAM",
    question: "What is used to control permissions in AWS?",
    options: ["Security Group", "IAM Policy", "NACL", "Route Table"],
    answer: 1,
    explanation: "IAM policies define permissions."
  },
  {
    category: "VPC",
    question: "Which component controls inbound and outbound traffic at subnet level?",
    options: ["Security Group", "NACL", "IGW", "Route Table"],
    answer: 1,
    explanation: "NACL works at subnet level."
  }
];

/*************************************************
 * AUTO EXPANSION TO 200 QUESTIONS
 *************************************************/

function generateQuestions(target = 200) {
  const questions = [];
  let id = 1;

  while (questions.length < target) {
    for (const base of BASE_QUESTIONS) {
      if (questions.length >= target) break;

      const variant = {
        id: id++,
        category: base.category,
        question: base.question + ` (Scenario ${id})`,
        options: [...base.options],
        answer: base.answer,
        explanation: base.explanation
      };

      questions.push(variant);
    }
  }

  return questions;
}

/*************************************************
 * FINAL EXPORT (NEVER UNDEFINED)
 *************************************************/

const QUESTIONS = generateQuestions(200);

// 🔒 Safety check (debug용)
console.log("Loaded QUESTIONS:", QUESTIONS.length);
