//* 문제: 문자열 뒤집기
let str = "hello world";
let result = "";

for (let el of str) {
  result = el + result;
}

console.log(result);

//? 다른 방법

// split으로 각각 잘라서 배열로 만든 후 reverse로 뒤집고 join으로 문자열로 만든다.
let otherResult = str.split("").reverse().join("");

console.log(otherResult);
