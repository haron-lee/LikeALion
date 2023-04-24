//* 엄격모드
// 1. 엄격모드가 아닐 때는 자바스크립트가 조용한 에러는 무시를 한다. (null = 10과 같은) 근데 undefined = 10, Infinity = 10은 브라우저 환경에서는 된다.엄격모드를 선언해도 브라우저 콘솔에는 적용되지 않는다. node.js 환경에서는 안된다.
// 2. 지울 수 없는 값을 지우려고하면 에러가 발생.(일반모드에서는 조용한 에러 => 무시)
// 3. 읽기 전용 객체에 값을 할당하면 에러가 발생. (일반모드에서는 조용한 에러 => 무시)
// 4. 함수 파라미터에 중복된 이름을 사용할 수 없다.

"use strict";

// "use strict"없고, 변수 선언을 하지 않고 사용하면 전역변수가 된다. window
// undefined = 10;
// null = 10;
// Infinity = 10;
// str = "Hello World";

// const obj = {
//   firstName: "Doha",
//   lastName: "Lee"
// }

// delete obj.lastName; // lastName 삭제

// delete Object.prototype; // 삭제된듯 하지만 사실 아님

// 파라미터의 중복이름은 들어가선 안된다. JS에선 계산을 하고 엄격모드에서는 작동이 안된다.
// function myFunc(a, a, b) {
//   console.log(a + a + b);
// }

// myFunc(1, 2, 3);
