const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep); // 경로 구분자(윈도우 \, POSIX /)
console.log('path.delimiter:', path.delimiter); // 환경 변수 구분자(윈도우 ;, POSIX :)

console.log('------------------------------');
console.log('path.dirname():', path.dirname(string)); // 파일이 위치한 폴더 경로
console.log('path.extname():', path.extname(string)); // 파일의 확장자
console.log('path.basename():', path.basename(string)); // 파일의 이름 표시(확장자 포함), 파일의 이름만 표시하고 싶다면 두번째 인수로 파일 확장자를 넣으면 됨
console.log(
  'path.basename - extname:',
  path.basename(string, path.extname(string))
);

console.log('------------------------------');
console.log('path.parse()', path.parse(string)); //파일 경로를 root, dir, base, ext, name으로 분리
console.log(
  'path.format():',
  path.format({
    dir: 'C:\\users\\zerocho',
    name: 'path',
    ext: '.js',
  })
); // paht.parse()한 객체를 파일 경로로 합침
console.log(
  'path.normalize():',
  path.normalize('C://users\\\\zerocho\\path.js')
); // 경로 구분자를 실수로 여러번 사용했거나 혼용 했을때 정상적인 경로로 변환

console.log('------------------------------');
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\')); // 파일 경로가 절대경로인지 상대경로인지 boolean으로 표시
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));

console.log('------------------------------');
console.log(
  'path.relative():',
  path.relative('C:\\users\\zerocho\\path.js', 'C:\\')
); // 경로를 두개 넣으면 첫 번째 경로에서 두번째 경로로 가는 방법을 알려줌
console.log(
  'path.join():',
  path.join(__dirname, '..', '..', '/users', '.', '/zerocho')
); // 여러 인수를 넣으면 하나의 경로로 합침
console.log(
  'path.resolve():',
  path.resolve(__dirname, '..', 'users', '.', '/zerocho')
); // path.join()과 비슷하지만 /를 만나면 절대경로로 인식해 앞의 경로를 무시

// join vs resolve
// /를 만나면 path.resolve는 절대 경로로 인식해 앞의 경로를 무시하고, paht.join은 상대경로로 처리
// path. join('/a'.'/b','c') // 결과 : /a/b/c
// path.resolve('/a'.'/b','c') // 결과 : /b/c
