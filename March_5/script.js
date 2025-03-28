const words = ["apple", "banana", "apricot", "kiwi", "avocado"];

const filterwords = words.filter((item) => item.startsWith("a"));

console.log(filterwords);

const againfilter = words.filter((item) => {
  if (item[0] === "a") return item;
});
console.log(againfilter);
