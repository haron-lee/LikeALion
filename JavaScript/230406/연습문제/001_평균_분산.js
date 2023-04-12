// * 1. 연습문제
// * 1-1 다음 값의 평균을 구하세요.
// * 1-2 다음 값의 분산을 구하세요.

// 분산 => (각 값에 - 평균) ** 2

const arr = [10, 20, 30, 10, 20, 30, 40, 10];

// [평균] arr의 각 요소를 더해준 후 , arr의 길이로 나눠준다.
const average = parseInt(arr.reduce((acc, curr) => acc + curr, 0) / arr.length);

// (분산과정)arr의 각 요소에 평균값을 빼준 후 (편차), 편차에 제곱.
const deviation = arr.map((el) => (el - average) ** 2);
// (분산과정)분산을 구하기위해 제곱한 편차들을 다 더해준다.
const deviationSum = deviation.reduce((acc, curr) => acc + curr, 0);
//[분산] 편차 제곱들의 합 나누기 arr의 길이값
const variance = deviationSum / arr.length;

console.log(average); // 평균
console.log(deviation);
console.log(deviationSum);
console.log(variance); // 분산
