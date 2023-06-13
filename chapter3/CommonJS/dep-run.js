const dep1 = require("./dep1");
const dep2 = require("./dep2");

dep1();
dep2();

// dep1 moduel.exports가 빈 객체로 표시됨
// -> 순환 참조(circular dependency)
// 순환 참조가 있을 경우 순환 참조되는 대상을 빈 객체로 만듦
