// 노드에서 멀티 스레드 방식으로 작업
// ❗ 노드에서 멀티 스레드가 안됐던것을 할 수 있게 된것일뿐 사용에 주의
// isMainThread를 통해 현재 코드가 메인 스레드에서 실행되는지, 아니면 워커 스레드에서 실행되는지 구분
// 부모에서 워커 생성 후 worker.postMessage로 워커에 데이터를 보낼 수 있음
// 워커는 parentPort.on('message') 이벤트 리스너로 부모로부터 메시지를 받고, parentPort.postMessage('message')로 부모에게 메시지를 보냄
// 부모는 worker.on('message')로 메시지를 받음 (한번만 메세지를 받고 싶다면 once('message')를 사용하면 됨)
// 워커에서 on 메서드를 사용할 때는 직접 워커를 종료해야 함(parentPort.close()를 하면 부모와 연결 종료)
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  // 부모일 때
  const worker = new Worker(__filename);
  worker.on('message', (message) => console.log('from worker', message));
  worker.on('exit', () => console.log('worker exit'));
  worker.postMessage('ping');
} else {
  // 워커일 때
  parentPort.on('message', (value) => {
    console.log('from parent', value);
    parentPort.postMessage('pong');
    parentPort.close();
  });
}
