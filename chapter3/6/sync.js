const fs = require('fs');

console.log('시작');

let data = fs.readFileSync('./readme2.txt');
console.log('1번', data.toString());

data = fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());

data = fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());

console.log('끝');

// readFileSync를 사용하면 수백 개 이상의 요청이 들어올 때 성능에 문제가 생김
// 백그라운드가 작업하는 동안 메인 스레드는 아무것도 못하고 대기하고 있어야 하며, 메인 스레드가 일을 하지 않고 노는 시간이 생기므로 비효율적
