const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});

// readFile의 결과물은 버퍼(buffer)라는 형식으로 제공 됨
