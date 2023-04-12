// 📝 Array_2
// 9️⃣ filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = arr.filter(function (el) {
  return el % 2 === 0;
});

const odd = arr.filter((el) => el % 2 === 1);

console.log(even);
console.log(odd);

// 프로그래머스 짝수의 합
function solution(n) {
  return (
    Array(n)
      .fill()
      // element 자리의 언더바는 의미없는
      // index에 + 1해준 값을 새로운 배열로 만든다. (0부터 시작이기에)
      .map((_, i) => i + 1)
      .filter((v) => v % 2 === 0)
      .reduce((a, c) => a + c, 0)
  );
}

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2.filter(function (el) {
  return el % 2 !== 0;
});

// 모음만 제거하기
Array.from("hello world")
  .filter((v) => !["a", "e", "i", "o", "u"].includes(v))
  .join("");

// 🔟 reduce()
// 초기값을 항상 넣어주자! ⭐️
// JS에는 min, max는 있는데 sum은 없다;;
const arr1 = [1, 2, 3, 4, 5, 6];
arr.reduce((a, c) => a + c, 0);

// 🔟+1️⃣ includes()
const arrOne = ["hello", "world", "rabbit"];
arrOne.includes("world");

const arrTwo = ["hello", "world", "rabbit"];
arrTwo.includes("new world");

const arrThree = ["hello", "world", "rabbit"];
arrThree.includes("bit");

// 🔟+2️⃣ join()
const arr3 = ["hello", "world", "rabbit"];
arr3.join("!");

const arr4 = ["010", "5044", "2903"];
arr4.join("-");

// ❗️ 이렇게 하면 안된다!!
const arr5 = [010, 5044, 2903];
arr5.join("-");
