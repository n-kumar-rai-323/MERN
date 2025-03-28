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
const totalSum = arr.filter((item) => {
  return (ageSum += item.age);
});

console.log(totalSum);
