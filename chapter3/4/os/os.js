const os = require('os');

console.log('운영체제 정보----------------------------');
console.log('os.arch():', os.arch()); // process.arch와 동일
console.log('os.platform():', os.platform()); // process.platform과 동일
console.log('os.type()', os.type()); // 운영체제 종류
console.log('os.uptime()', os.uptime()); // 운영체제 부팅 이후 흐른 시간을 초로 보여줌
console.log('os.hostname()', os.hostname()); // 컴퓨터 이름
console.log('os.release()', os.release()); // 운영체제 버전

console.log('경로-------------------------------------------');
console.log('os.homedir()', os.homedir()); // 홈 디렉터리 경로
console.log('os.tmpdir()', os.tmpdir()); // 임시 파일 저장 경로

console.log('cpu 정보---------------------------------------');
console.log('os.cpus()', os.cpus()); // 컴퓨터 코어 정보
console.log('os.cpus().length', os.cpus().length); // 코어 개수 확인

console.log('메모리 정보------------------------------------');
console.log('os.freemen', os.freemem()); // 사용 가능한 메모리
console.log('os.totalmen', os.totalmem()); // 전체 메모리 용량

//os.cpus().length
// 코어 수가 숫자로 출력 됨
// 노드에서 싱글 스레드 프로그래밍을 하면 코어가 몇 개든 상관없이 대부분의 경우 코어를 하나밖에 사용하지 않음
// cluster 모듈을 사용하는 경우 코어 개수에 맞춰서 프로세스를 늘릴 수 있음
