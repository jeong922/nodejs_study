const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1, 2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString('base64'));
  })
  .catch((error) => {
    console.error(error);
  });

// deprecated
// 중요도가 떨어져 더 이상 사용되지 않고 앞으로 사라지게 될 것을 의미
// 새로운 기능이 나와서 기존 기능보다 더 좋을 때, 기존 기능을 deprecated 처리함
// 이전 사용자를 위해 기능을 제거하지는 않지만 곧 없앨 예정으로 더 이상 사용하지말라는 의미
