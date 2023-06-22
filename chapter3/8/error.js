setInterval(() => {
  console.log('시작');
  try {
    throw new Error('서버야 고장나랏!');
  } catch (err) {
    console.error(err);
  }
}, 1000);

// ❗ 에러를 throw해줘야 하는 경우 꼭 try/catch문으로 throw한 에러를 잡아야 함
