setImmediate(() => {
  console.log('immediate');
});

process.nextTick(() => {
  console.log('nextTick');
});

setTimeout(() => {
  console.log('timeout');
}, 0);

Promise.resolve().then(() => console.log('promise'));

/* nextTick;
promise;
timeout;
immediate;
*/

// 마이크로태스크의 재귀 호출
// process.nextTick으로 받은 콜백 함수나 resolve된 Promise는 다른 이벤트 루프에서 대기하는 콜백 함수보다 먼저 실행 됨 -> 마이크로태스크
// 마이크로태스크를 재귀 호출하게 되면 이벤트 루프는 다른 콜백 함수보다 마이크로태스크를 우선해 처리하므로 콜백 함수들이 실행되지 않을 수도 있음
