//* 문제: 반목문만 사용하여 숫자단위 콤마 없애기

const num = "12,000,000";

let result = "";

for (let el of num) {
  if (el !== ",") {
    result += el;
  }
}

console.log(result);
