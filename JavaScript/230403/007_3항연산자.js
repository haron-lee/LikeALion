// 📝 3항 연산자 ⭐️⭐️⭐️
// 조건식 ? 참일 경우 실행되는 표현식 : 거짓일 경우 실행되는 표현식

// let sale = true;
// // sale이 true면 첫번째, false라면 두번째
// price = sale ? 100 : 200;
// console.log(price);

// const price = 7000; // 값은 변경해보자 실습
// const message = price >= 5000 ? "비싸다" : "싸다";
// console.log(message);

// 9000원 이상이면 비싸다
// 9000원 미만이고 7000원 이상이면 적절하다
// 7000원 미만이면 저렴하다
const price = 6900; // 값은 변경해보자 실습
const message =
  // price >= 7000원은 앞서 나온 조건이 내포되어 있기 때문이다.
  price >= 9000 ? "비싸다" : price >= 7000 ? "적절하다" : "저렴하다";
console.log(message);
