// 📝null
// null 과 undefined 차이점

let value1; // undefined

// 존재하지만 값이나 자료형이 존재하지 않는 foo
var value2 = null;
console.log(value2); // null

// 📙참고사항
// null은 0점이 아니다.
// let 반점수 = [10, 20, 30, null, 40, 50];
// let 반평균 = 0;
// for (let i of 반점수) {
//   console.log(i);
//   반평균 += i;
// }

// console.log(반평균);

// undefined
// let 반점수 = [10, 20, 30, undefined, 40, 50];
// let 반평균 = 0;
// for (let i of 반점수) {
//   console.log(i);
//   반평균 += i;
// }
// console.log(반평균);

// ❓ null은 왜 object 인가요? 원시 타입이 맞나요?
// 원시 타입이지만 개발과정에서 발생한 오류이다.
