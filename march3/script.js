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
