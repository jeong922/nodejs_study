// 미들웨어 컨트롤러
// 컨트롤러는 res, send, res.json, res.redirect, res.render 등이 존재하는 미들웨어

// 내 정보 페이지 렌더링
exports.renderProfile = (req, res) => {
  res.render('profile', { title: '내 정보 - NodeBird' });
};

// 내 정보 페이지 렌더링
exports.renderJoin = (req, res) => {
  res.render('join', { title: '회원가입 - NodeBird' });
};

// 메인 페이지 렌더링과 넌적스에 게시글 목록 전달
exports.renderMain = (req, res, next) => {
  const twits = [];
  res.render('main', {
    title: 'NodeBird',
    twits,
  });
};
