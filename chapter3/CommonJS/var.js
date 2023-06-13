// 모듈
// - 특정한 기능을 하는 함수나 변수들의 집합
// - 재사용 가능
// - 보통 파일 하나가 모듈 하나가 되며, 파일별로 코드를 모듈화할 수 있어 관리하기 편함
// - 모듈은 두가지 형식이 존재함 -> CommonJS 모듈, ECMScript 모듈

// CommonJS 모듈
// CommonJS 모듈은 표준 자바스크립트 모듈은 아니지만 가장 널리 쓰이는 모듈
// 그럼 왜씀? -> 표준 나오기 이전부터 쓰여서

// const odd = "CJS 홀수입니다";
// const even = "CJS 짝수입니다";

// module.exports = {
//   odd,
//   even,
// };

exports.odd = "CJS 홀수입니다";
exports.even = "CJS 짝수입니다";

// - module.exports로 한 번에 대입하는 대신, 각각의 변수를 exports 객체에 하나씩 넣어도 동일하게 작동하는 이유
// 	-> 둘다 같은 객체를 참조하기 때문
// - exports 객체를 사용할 때는 module.exports와의 참조 관계가 깨지지 않도록 주의 해야 함
// - module.exports에는 어떤 값을 대입해도 되지만 exports에는 반드시 속성명과 속성값을 대입해야 함
// - exports를 사용할 때는 객체만 사용할 수 있으므로 module.exports에 함수를 대입한 경우에는 export로 변경 불가
// - module.exports와 exports에는 참조 관계가 있으므로 한 모듈에 동시에 사용하지 않는 것이 좋음
