const fs = require('fs').promises;

setInterval(() => {
  fs.unlink('./abcdefg.js').catch(console.error);
}, 1000);

// 프로미스 에러는 반드시 catch 해야 함. catch하지 않으면 에러와 함께 노드 프로세스가 종료 됨
