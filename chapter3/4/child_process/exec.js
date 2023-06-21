// child_process : 노드 에서 다른 프로그램을 실생하고 싶거나 명령어를 수행하고 싶을 때 사용
const exec = require('child_process').exec;

const process = exec('dir');

process.stdout.on('data', (data) => {
  console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', (data) => {
  console.error(data.toString());
}); // 실행 에러
