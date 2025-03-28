const name = "Nishan Rai";
console.log(name.split(" ").reverse().join(" "));

const arr = [3, 5, 6, 2, 3];
console.log(arr.length);

console.log(arr.slice(2));

const details = ["ram", { fullMarks: 150 }, { scores: [45, 23, 25] }];
// find socres percentage

// const fullMarks = details[1];
const [
  fullName,
  { fullMarks },
  {
    scores: [subjectA, subjectB, subjectC],
  },
] = details;
console.log(fullName);

const userDetailsOne = {
  user: {
    name: "Nishan Rai",
  },
  subjects: ["math", "science"],
};

const subjects = {
  math: 35,
  science: 36,
  computer: 54,
};

const {
  user,
  subjects: [subject1, subject2],
} = userDetailsOne;
const output = { user, subjects: [subjects[subject1], subjects[subject2]] };
console.log(output);
