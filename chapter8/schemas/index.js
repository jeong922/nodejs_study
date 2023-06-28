const mongoose = require('mongoose');

const connect = () => {
  // 개발 환경일 때만 콘솔을 통해 몽구스가 생성하는 쿼리 내용 확인
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }

  // 몽구스와 몽고디비 연결
  mongoose
    .connect('mongodb://root:nodejsstudy@localhost:27017/admin', {
      dbName: 'nodejs',
      useNewUrlParser: true,
    })
    .then(() => {
      console.log('몽고디비 연결 성공');
    })
    .catch((err) => {
      console.error('몽고디비 연결 에러', err);
    });
};

// 몽구스 커넥션 이벤트 리스너
// 에러 발생 시 에러 내용 기록, 연결 종료 시 재연결 시도
mongoose.connection.on('error', (error) => {
  console.error('몽고디비 연결 에러', error);
});

mongoose.connection.on('disconnected', () => {
  console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
  connect();
});

module.exports = connect;
