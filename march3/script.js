const arr = [
  { name: "ram", age: 50 },
  { name: "gopal", age: 30 },
];

const findGrater = arr.filter((item) => {
  return item.age > 40;
});
console.log(findGrater);

// find total sum of ages of users
let ageSum = 0;
const totalSum = arr.forEach((item) => {
  ageSum += item.age;
});

console.log(ageSum);

const addSurname = arr.map((person) => ({
  ...person,
  Name: person.name + " Rai",
}));
console.log(addSurname);

// Q.4 return only names starting with r, and declare him the winner, by adding new key winner as true
const sortName = arr
  .filter((person) => {
    return person.name[0] == "r";
  })
  .map((item) => {
    item.winner = true;
    return item;
  });

console.log(sortName);

const scores = [
  ["math", 99],
  ["science", 93],
  ["computer", 95],
];

// calculate the percentage scored
total = 0;
scores.forEach((item) => {
  total += item[1];
});
const percentage = (total / 300) * 100;
console.log(total);
console.log(percentage);

// what is the lowest marks scored
const scores = [
    ["math", 99],
    ["science", 93],
    ["computer", 95],
  ];
  
  // Find the lowest score using reduce
  const lowestScore = scores.reduce((min, item) => Math.min(min, item[1]), Infinity);
  
  console.log("Lowest Marks Scored:", lowestScore); // Output: 93
  