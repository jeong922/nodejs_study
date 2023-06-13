// ES 모듈은 dynamic import 안됨
// const a = false;
// if (a) {
//   import "./func.mjs";
// }

// console.log("성공");

// import 함수를 사용해서 모듈을 동적으로 불러올 수 있음
// Promise를 반환하기 때문에 await나 then을 사용해야 함
// (ES 모듈 최상위 스코프에서는 async 함수 없이도 await 가능, CommonJS는 안됨)
const a = true;
if (a) {
  const m1 = await import("./func.mjs");
  console.log(m1);
  const m2 = await import("./var.mjs");
  console.log(m2);
}

console.log("성공");
