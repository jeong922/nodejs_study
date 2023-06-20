const url = require('url');

const { URL } = url;

const myURL = new URL('https://github.com/jeong922/nodejs_study/commits/main'); // 주소 부분별로 출력(호스트 부분없이 x)
console.log('new URL()', myURL);
console.log('url.format()', url.format(myURL)); // 분해되었던 url 객체 다시 원래 상태로 조립
