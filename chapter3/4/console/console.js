const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: 'value',
    },
  },
};

console.time('전체 시간');
console.log('평범한 로그입니다. 쉽표로 구분해 여러 값을 직을 수 있습니다');
console.log(string, number, boolean);
console.error('에러 메시지는 console.error에 담아주세요');

console.table([
  { name: '제로', birth: 1994 },
  { name: 'hero', birth: 1988 },
]);

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time('시간 측정');

for (let i = 0; i < 100000; i++) {}
console.timeEnd('시간 측정');

function b() {
  console.trace('에러 위치 추적');
}

function a() {
  b();
}

a();

console.timeEnd('전체 시간');

// console.time(레이블) : console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 시간 측정

// console.log(내용) : 로그 콘솔에 표시

// console.error(에러 내용) : 에러 콘솔에 표시

// console.table(내용) : 배열의 요소로 객체 리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현됨

// console.dir(객체, 옵션) : 객체를 콘솔에 표시 (옵션 -> colors: true로 설정하면 색이 추가, depth : 객체 안의 몇 단계까지 보여줄지 결정(기본값 2))

// console.trace(레이블) : 에러가 어디서 발생했는지 추적
