// global
// 전역 객체이므로 모든 파일에서 접근 가능
// 생략 가능
// nodejs에서는 window, document 사용 불가 -> globalThis가 window, doucument 됨
// 프로그램 규모가 커지면 유지보수가 힘들어지므로 남용하지 말자

module.exports = () => global.message;
