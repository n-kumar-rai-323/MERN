// Optional chaining  ?
// The optional chaining (?.) operator accesses an object's property or calls a function.
// If the object accessed or function called using this operator is
// undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

const user = {
  name: "nishan",
  primaryAddress: {
    name: "BHK",
    zip: {
      code: 5,
    },
  },
  secondaryAddrss: {
    name: "KTM",
  },
};

const userDetails = {
  hari: {
    ielts: {
      "12/2/2020": 34,
    },
  },
  shyam: {
    pte: {
      "12/2/2020": 34,
    },
  },
};
// log 32
console.log(userDetails.hari.ielts["12/2/2020"]);
console.log(userDetails.shyam.ielts?.["12/12/2020"]);

const userArray = ["ram", 21, "bmw"];
const {name, age, car} = userArray

console.log(`my name is ${name}`)