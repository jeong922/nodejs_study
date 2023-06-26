const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev')); // 요청과 응답에 대한 정보 콘솔에 기록, 개발 환경에서 dev, 배포 환경에서 combined
app.use('/', express.static(path.join(__dirname, 'public'))); // 정적인 파일들을 제공하는 라우터 역할,
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // 요청의 본문에 있는 데이터를 해석해서 req.body 객체로 만들어 줌
app.use(cookieParser(process.env.COOKIE_SECRET)); // 요청에 동봉된 쿠키를 해석해 req.cookies 객체로 만듦
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: 'session-cookie',
  })
); // 세션 관리용 미들웨어

app.use((req, res, next) => {
  console.log('모든 요청에 다 실행됩니다.');
  next();
});

app.get(
  '/',
  (req, res, next) => {
    console.log('GET / 요청에서만 실행됩니다.');
    next();
  },
  (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
  }
);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log('http://localhost:3000');
  console.log(app.get('port'), '번 포트에서 대기 중');
});
