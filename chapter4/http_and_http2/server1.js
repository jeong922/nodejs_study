const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); // 응답에 대한 정보를 기록하는 메서드
    res.write('<h1>Hello Node!</h1>'); // 첫번째 인수는 보낼 데이터
    res.end('<p>Hello Server!</p>'); // 응답 종료
  })
  .listen(8080, () => {
    // 서버연결
    console.log('http://localhost:8080');
    console.log('8080번 포트에서 서버 대기중!');
  });

// localhost
// 현재 컴퓨터의 내부 주소를 가리키며, 외부에서 접근할 수 없고 자신의 컴퓨터에서만 접근 가능
// 서버를 개발할 때 테스트용으로 많이 사용
// 127.0.0.1을 주소로 사용해도 똑같음

// 포트
// 서버 내에서 프로세스를 구분하는 번호
// 포트 번호는 IP 주소 뒤에 콜론과 함께 붙여 사용
// http의 경우 80번 포트 생략 가능
// https는 443번 포트 생략 가능
