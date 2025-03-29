const arr = [22, 3, 45, 66, 77];

const question = arr.reduce((initial, nextIndex, indexId) => {
  initial = initial + nextIndex;
  return initial;
});

console.log(question);
const arr2 = [22, 3, 45, 66, 77];

const question2 = arr2.reduce((initial, nextIndex, indexId) => {
  initial = initial + nextIndex;
  return initial;
}, 0);
console.log(question2);

const cart = [
  { id: 3, item: "Hawkins cooker", quantity: 3, price: 1000 },
  { id: 4, item: "baltra", quantity: 2, price: 4000 },
];
const totalAmount = cart.reduce((total, nextItem) => {
    debugger
  return total + nextItem.quantity * nextItem.price;
}, 0);

console.log(totalAmount);
