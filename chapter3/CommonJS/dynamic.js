// CommonJS 모듈은 dynamic import 가능

const a = false;
if (a) {
  require("./func");
}

console.log("성공");
