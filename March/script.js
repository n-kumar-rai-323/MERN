// Q.1 you can buy 10 dayimilk with your pocketmoney

let pocketmoney = 200;

// function buyChocolate(price, chocolate) {
//   let totalChocolates = Math.floor(pocketmoney / price); // Number of chocolates that can be bought
//   let remainingAmount = pocketmoney % price; // Remaining money after purchase

//   return `Total ${chocolate} bought: ${totalChocolates} remaining amount: ${remainingAmount}`;
// }

// console.log(buyChocolate(11, "Dairy Milk"));

function buyChocolate(price, chocolate, required) {
  let affordableChocolates = Math.floor(pocketmoney / price); // Maximum chocolates that can be bought
  console.log(affordableChocolates);
  let totalChocolates = Math.min(affordableChocolates, required); // Buy only required or affordable chocolates
  console.log(totalChocolates);
  let remainingAmount = pocketmoney - totalChocolates * price; // Correct remaining money
  console.log(remainingAmount);
  return `Total ${chocolate} bought: ${totalChocolates}, remaining amount: ${remainingAmount}`;
}

console.log(buyChocolate(10, "Dairy Milk", 3));

// function calMe() {
//   return "hi";
// }

// const calMe = () => {
// //   "Hi";
// // };

// calculate sum of odd number
arr = [2, 3, 4, 5, 6, 7, 7, 89, 8, 9];

arr.forEach((item) => {
  if (item % 2 == 0) {
    console.log("odd number ");
  } else {
    console.log("even number ");
  }
});

// calculate the sum of Number
giveArr = [4, 3, 2, 1];
sumNumber = 0;
const output = giveArr.forEach((item) => {
  sumNumber += item;
});
console.log(sumNumber);

// filter out non integers : expected output : [3,5,6,1]
const data = [3, "a", 5.5, 6, 1, "hello", 2.3, 5];
const nonInteger = giveArr.filter((item) => {
  return Number.isInteger(item);
});

console.log(nonInteger);
// in the filtered result, multiply each number by 5 using Map
const multiplyByFive = giveArr.map((item) => {
  return item * 5;
});
console.log(multiplyByFive);
