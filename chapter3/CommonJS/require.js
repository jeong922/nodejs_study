console.log("requier가 가장 위에 오지 않아도 됩니다.");

module.exports = "저를 찾아보세요"; // module.exports 최하단에 올 필요 없음

require("./var"); // require이 꼭 최상단에 있어야 하는 것은 아님

// require.cache 객체에 파일 이름이 속성명으로 들어 있음
// 속성값으로는 각 파일의 모듈 객체가 들어있음
// 한번 require한 파일은 require.cache에 저장되므로 다음 번에 require할때 새로 불러오지 않고 require.cache에 있는 것을 재사용
// 새로 require하기 원한다면 require.cache의 속성을 제거하면 되지만 권장하지 않음
console.log("require.cache 입니다");
console.log(require.cache);

// require.main은 노드 실행 시 첫 모듈을 가리킴
console.log("require.main 입니다");
console.log(require.main);
console.log(require.main === module);
console.log(require.main.filename);
