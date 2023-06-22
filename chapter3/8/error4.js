process.on('uncaughtException', (err) => {
  console.error('예기치 못한 에러', err);
});

setInterval(() => {
  throw new Error('서버를 고장내주마!');
}, 1000);

setTimeout(() => {
  console.log('실행됩니다');
}, 2000);

// uncaughtException는 최후의 수단으로 사용하자.. -> uncaughtException 이벤트 발생 후 다음 동작이 제대로 동작하는지 보증하지 않기 때문
// 에러를 기록하는 정도로 사용하고 에러를 기록한 후 process.exit()으로 프로세를 종료하는 것이 좋음
