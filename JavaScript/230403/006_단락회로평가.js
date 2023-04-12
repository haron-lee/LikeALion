// 📝단락회로평가 ⭐️⭐️⭐️
// 논리 연산식을 이용
// true : 1
// false : 00
// and(&&) : 곱
// or(||) : 합
// not(1) : 부정

console.log(!"false"); // false
console.log(!"0"); // false

console.log(!false); // t
console.log(!0); // t

console.log("abc" / 2); // NaN

console.log(!!NaN); // f
console.log(!!undefined); // f
console.log(!!null); // f

// 리액트에서 사용될 문법
let username = "";
username = username || "anonymous";
console.log(username);

let username2 = "이도하";
username2 = username2 || "anonymous";
console.log(username2);
