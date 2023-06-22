const buffer = Buffer.from('나좀 버퍼로 바꿔봐');
console.log('from():', buffer); // 문자열 -> 버퍼
console.log('length:', buffer.length);
console.log('toString():', buffer.toString()); // 버퍼 -> 문자열

const array = [
  Buffer.from('띄엄 '),
  Buffer.from('띄엄 '),
  Buffer.from('띄어쓰기'),
];
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5); // 빈 버퍼 생성
console.log('alloc():', buffer3);
