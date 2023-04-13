//* 📝 Set
//! 순서를 가진 iterable 객체이다.
// 집합, 합집합, 교집합, 차집합
// 실무에서는 많이 사용이 안되지만
// 알고리즘 문제에서는 거의 필수로 사용되는 자료형이다.

let s = new Set("aabbbcccdd"); //{'a','b', 'c', 'd'} 중복제거
s.size;

let 회사게시판 = [
  "이호준",
  "이호준",
  "이호준",
  "이호준",
  "이호준",
  "김연하",
  "김연하",
  "최흥석",
  "이나영",
];
let 게시자 = new Set(회사게시판);

//? Q1. 몇 명이 게시판에 게시물을 썼나요? (각각의 인원이 유일해야한다)
게시자.size;

//? Q2. 각각 몇 개의 게시물을 작성하였나요?
for (const i of 게시자) {
  console.log(
    i,
    회사게시판.filter((e) => e === i)
  );
  // 이호준 5, 김연하 2, 최흥석 1, 이나영 1
}

for (const i of 게시자) {
  console.log(i, 회사게시판.filter((e) => e === i).length);
}

// 이 풀이는 매우 어렵기에 초급자에게는 권장하지 않는다.
let map = new Map();
for (const i of 회사게시판) {
  map.set(i, (map.get(i) || 0) + 1); // 키와 value로 출력하기 위해, map.get은 중복을 허락하지 않는다.만약 있을 경우를 위해 있다면 0을 출력한다. 숫자 1은 있는 만큼 숫자를 세어주기 위해.
}
// 1번째 순회 i에 '이호준'
map.set(i, (map.get(i) || 0) + 1);

let map = new Map();
map.get("이호준"); // Undefined 일 경우 0 그리고 + 1

map.set("이호준", 1); // 최종

// 2번째 순회 i에 '이호준'
map.set(i, (map.get(i) || 0) + 1);
map.set("이호준", 2); // 최종

// TODO set 연습

let s = new Set("aabbbccccdd");

s.sizes;
s.has("a"); // has는 가지고 있는지?
s.has("f");
s.add(z); // add는 추가
s;

for (const i of s) {
  console.log(i);
}

let s = new Set("aabbbccccdd".split("")); // spilt으로 배열로 나눠줌
let s = new Set(["a", "a", "b", "b", "b", "c", "c", "c", "c", "d", "d"]);

s.forEach((value, value, set) => {});
// array와 다르게 value가 2번 반복입니다.
// IE10은 미지원

s.forEach((a, b, set) => {
  console.log(a, b, set);
});

// ! 복붙할 정도로 중요 ⭐️⭐️⭐️⭐️
//* 교집합
let a = new Set("abc");
let b = new Set("cde");
let cro = [...a].filter((e) => b.has(e)); // 배열 a의 element를 Set인 b가 가지고 있다면 반환

//* 합집합
// let union = new Set([...a].concat.concat(...b));
let union = new Set([...a], [...b]);

//* 차집합
let dif = [...a].filter((e) => !b.has(e));

// 6. 정수연 — 오늘 오전 9:49
// set, map, object, array, string가 이터러블 객체인지? 순서는 보장하는지?
// 이터러블한 객체란? 순회가 가능한 객체다.
// set, map, array, string

// 순서를 보장하나요? (object는 순서를 보장하지 않습니다.)
// set, map, array, string
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set
// https://myung-ho.tistory.com/90

//? 프로그래머스 문제: 교집합의 갯수 구하는 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/120903
function solution(s1, s2) {
  // s1와 s2의 합에서 합집합의 size을 빼준다.
  return s1.length + s2.length - new Set([...s1, ...s2]).size;
}

function solution(s1, s2) {
  s1 = new Set(s1);
  s2 = new Set(s2);
  let cro = [...s1].filter((e) => s2.has(e)); // 배열로 filter해서 배열로 출력되기에 cro.size가 아니라 cro.length
  return cro.length;
}

//? 프로그래머스 문제: 3, 6, 9 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  const mySet = new Set([3, 6, 9]);
  // 들어온 값을 string으로 변경 "29423"
  // split("") 해준다. ["2", "9", "4", "2", "3"]
  // filter로 숫자로 변경한 num을 가지고 있으면 그 값을 반환.
  // 그리고 filter로 걸러진 배열의 길이를 출력하면 3, 6, 9를 몇개 가지고 있는지 출력된다.
  return String(order)
    .split("")
    .filter((num) => mySet.has(parseInt(num))).length;
}

//? 프로그래머스 문제:
// https://school.programmers.co.kr/learn/courses/30/lessons/120852
function solution(n) {
  let answer = [];

  let i = 2;
  while (i <= n) {
    if (n % i === 0) {
      answer.push(i);
      n = n / i;
    } else {
      i++;
    }
  }

  return [...new Set(answer.sort((a, b) => (a > b ? 1 : -1)))];
}
