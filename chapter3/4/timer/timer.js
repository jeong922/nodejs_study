const timeout = setTimeout(() => {
  console.log('1.5초 후 실행');
}, 1500);

const iterval = setInterval(() => {
  console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
  console.log('실행되지 않습니다');
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(iterval);
}, 2500);

const immediate = setImmediate(() => {
  console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
  console.log('실행되지 않습니다');
});

clearImmediate(immediate2);

// setTimeout(콜백 함수, 밀리초) : 주어진 밀리초 이후에 콜백 함수 실행

// setInterval(콜백 함수, 밀리초) : 주어진 밀리초마다 콜백 함수 실행

// setImmediate(콜백 함수) : 콜백 함수 즉시 실행

// clearTimeout(아이디) : setTimeout 취소

// clearInterval(아이디) : setInterval 취소

// clearImmediate(아이디) : setImmediate 취소

// setTimeout(콜백, 0) vs setImmediate(콜백)
// 둘다 이벤트 루프를 거친 뒤 즉시 실행
// 특수한 경우 setImmediate가 먼저 실행 됨 -> 파일 시스템 접근, 네트워킹 같은 I/O 작업의 콜백 함수 안에서 타이머를 호출하는 경우
// setTimeout(콜백, 0) 사용하지 않는 것이 권장 됨
