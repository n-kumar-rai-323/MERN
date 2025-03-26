const examDetails = {
  name: "ram",
  examDate: "12/12/2020",
  highest: {
    subject: "Math",
    score: 99,
    attempts: 1,
  },
  lowest: {
    subject: "Science",
    score: 14,
    attempts: 3,
  },
};

const previousAttempts = {
  science: {
    "12/12/2020": 10,
    "12/11/2019": 9,
  },
};

// Corrected way to sum the values of previous attempts
const attemptValues = Object.values(previousAttempts.science);
examDetails.previousAttempts = attemptValues[0] + attemptValues[1];

console.log(examDetails);

// another way
// Correctly extract properties using destructuring
const { "12/12/2020": firstAttempt, "12/11/2019": secondAttempt } = previousAttempts.science;

console.log(firstAttempt + secondAttempt); 

// log the total scores scored in the lowest subject
const { score, attempts } = examDetails.lowest;
let totalLowestMark = score * attempts;
console.log(totalLowestMark);
examDetails.age = 34;
console.log(examDetails);
