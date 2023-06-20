const crypto = require('crypto');

console.log(
  'base64',
  crypto.createHash('sha512').update('비밀번호').digest('base64')
);
console.log(
  'hex',
  crypto.createHash('sha512').update('비밀번호').digest('hex')
);
console.log(
  'base64',
  crypto.createHash('sha512').update('다른 비밀 번호').digest('base64')
);

// 단방향 암호화 알고리즘
// 단방향 암호화 알고리즘은 주로 해시 기법을 사용
// 해시 기법 : 어떠한 문자열을 고정된 길이의 다른 문자열로 바꾸는 방식, 입력 문자열의 길이는 다르지만 출력 문자열의 길이는 네자리로 고정
// 서로 다른 문자열이 변환 된 후 같은 문자열로 출력되는 경우가 있음 -> 충돌
// 현재는 주로 pbkdf2나 bcrypt, scrypt라는 알고리즘으로 비밀번호를 암호화
/* - createHash(알고리즘)
    • 사용할 해시 알고리즘을 넣어서 사용
    • md5, sha1, sha256, sha512 등이 가능하지만 md5, sha1은 취약접이 발견되었음
  -  update(문자열)
    • 변환할 문자열
  - digest(인코딩)
    • 인고딩할 알고리즘을 넣어서 사용
    • base64, hex, latin1이 주로 사용되는데 base64가 결과 문자열이 가장 짧아서 자주 사용됨
*/
