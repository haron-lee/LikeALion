//* 불변 배열, 불변 객체
// 원본 배열과 원본 객체는 불변으로 두고 새로운 배열과 새로운 객체를 만들어서 쓰는 것이 좋다.

const aespa = ["카리나", "윈터", "지젤", "닝닝"];
// 결과 : [ '카리나💖', '윈터💖', '지젤💖', '닝닝💖' ]

//! forEach는 원본 배열을 건든다.
// aespa.forEach((item, index) => {
//   aespa[index] = item + "💖";
// });

// console.log(aespa);

//* Map을 사용해야한다.
const aespaMap = aespa.map((item) => item + "💖");
console.log(aespaMap);
