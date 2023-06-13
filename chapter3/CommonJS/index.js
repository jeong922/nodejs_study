const { odd, even } = require("./var");
const checkNumber = require("./func");

function checkStringOddOroEven(str) {
  if (str.length % 2) {
    return odd;
  }

  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOroEven("hello"));
