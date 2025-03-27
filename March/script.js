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

function calMe() {
  return "hi";
}

const calMe = () => {
  "Hi";
};
