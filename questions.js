const CATEGORIES = [
  "EC2",
  "S3",
  "VPC",
  "RDS",
  "IAM",
  "HA/DR"
];

const QUESTIONS = [];

for (let i = 1; i <= 200; i++) {
  QUESTIONS.push({
    id: i,
    category: CATEGORIES[i % CATEGORIES.length],
    question: `Sample Question ${i}: Which AWS service best fits this requirement?`,
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: i % 4,
    explanation: `This is an explanation for question ${i}.`
  });
}
