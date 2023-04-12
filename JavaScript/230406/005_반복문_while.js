// 📝 while

let x = 0;
while (x < 10) {
  console.log("start");
  console.log(x);
  x += 1;
  console.log("end");
}

/////

// why? 10까지 출력이 되는가?
let x = 0;
while (x < 10) {
  console.log(x);
  x += 1;
}

let x = 0;
while (x < 10) {
  console.log(x);
  x += 1;
  console.log("");
}

/////

let input;

do {
  input = prompt("숫자를 입력하세요");
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");

/////

let input2;

do {
  input2 = confirm("다음에도 저희와 함께 하시겠습니까?");
} while (!input2);

console.log("감사합니다.");

// 🟡구구단 ⭐️⭐️⭐️⭐️
// 🟣암기코드
// for문
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < i + 1; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// while문
let i = 2;
while (i < 10) {
  let j = 1; // 초기화, while 밖으로 나가면 초기화가 안된다. 그래서 내부에 작성해줘야한다.
  while (j < 10) {
    console.log(`${i} X ${j} = ${i * j}`);
    j++;
  }
  i++;
}

let i = 1;
while (i++ < 9) {
  let j = 0;
  while (j++ < 9) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// 🟣암기코드2
let s = "hello world";
let result = "";
for (let i = 0; i < s.length; i++) {
  console.log(i);
  result += s[i];
}

console.log(result);

// 거꾸로 출력하기
let str = "hello world";
let result2 = "";
for (let i = 0; i < str.length; i++) {
  console.log(i);
  result2 = str[i] + result2;
}

// s[0] + result => 'h' + '' => 'h';
// s[1] + result => 'e' + 'h';
// s[2] + result => 'l' + 'eh';
// 이런 순서로 하나씩 증가되어 거꾸로 출력된다.

console.log(result2);

// while문으로 하기
let s = "hello world";
let result = "";
let count = 0;

while (count < s.length) {
  result = s[count] + result;
  count++;
}

console.log(result);

// 🟣 암기코드 3
// 팩토리얼
// 5! = 5 * 4 * 3 * 2 * 1

// for문 팩토리얼
let s = 1;
for (let i = 0; i < 6; i++) {
  s *= i;
}
console.log(s);

// s = s * i // 1 * 1
// s = 1 * 2
// s = 2 * 3
// s = 6 * 4
// s = 24 * 5

let s = 1;
i = 1;
while (i < 6) {
  s *= i;
  i += 1;
}

console.log(s);
