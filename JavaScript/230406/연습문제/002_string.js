//* 다음 string의 평균 값을 구하세요
//  '5, 4, 10, 2, 5'
const str = "5, 4, 10, 2, 5";

// 각 문자열을 , 기준으로 배열로 나눠준 후 그 배열의 요소를 숫자로 변환하여 새로운 배열로 반환
// ? split() 뒤에 .map(Number)만 작성해도 새로운 배열의 요소들이 숫자로 바뀌어 반환된다.
let average = str.split(",").map(Number);
console.log(average); // [5, 4, 10, 2, 5]

// [평균] average의 각 요소들을 더해주고, average의 길이만큼 나눠 준다.
average = average.reduce((acc, curr) => acc + curr, 0) / average.length;

console.log(average);
