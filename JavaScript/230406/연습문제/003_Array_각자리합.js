// * 다음 array의 각 자리수의 합을 구하세요.

const arr = [11, 22, 33, 111, 2];
// 1+1, 2+2, 3+3, 1+1+1, 2
// 2, 4, 6, 3, 2
// 정답 : 17

const str = arr.join("");
console.log(str); // "1122331112"

// 1, 1, 2, 2, 3, 3, 1, 1, 1, 2

let sum = 0; // 총 합이 될 변수
for (let el of str) {
  // str의 각 요소(el)을 숫자로 변환하여 sum 변수에 더해준다.
  sum += parseInt(el);
}

console.log(sum);

// ? 다른방법이 있을까

const arr1 = [11, 22, 33, 111, 2];

const sum1 = arr.reduce((acc, cur) => {
  return (
    acc +
    String(cur)
      .split("")
      .reduce((a, c) => a + parseInt(c), 0)
  );
}, 0);

console.log(sum1); // 17

// ? 왜 for of 문에서 parseInt(str[el])로 했을 때는  15가 나왔던 것일까? 궁금해 죽겠네..
