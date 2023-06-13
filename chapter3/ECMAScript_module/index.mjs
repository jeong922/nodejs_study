import { odd, even } from "./var.mjs";
import checkNumber from "./func.mjs";

function checkStringOddOroEven(str) {
  if (str.length % 2) {
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOroEven("hello"));
