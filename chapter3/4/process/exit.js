let i = 1;
setInterval(() => {
  if (i === 5) {
    console.log('종료!');
    process.exit();
  }
  console.log(i);
  i += 1;
}, 1000);

// process.exit()
// 실행 중인 노드 프로세스 종료
// 서버 환경에서 ㅅ용하면 서버가 멈추므로 특수한 경우를 제외하고는 서버에서는 잘 사용하지 않음
// 서버 외의 독립적인 프로그램에서는 수동으로 노드를 멈추기 위해 사용
// 인수로 코트 번호를 줄 수 있음
// -> 인수를 주지 않거나 0 : 정상 종료
// -> 1 : 비정상 종료 (에러가 발생해서 종료하는 경우 1을 인수로 넣어주면 됨)
