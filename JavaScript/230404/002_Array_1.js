// 📝Array ⭐️⭐️⭐️⭐️⭐️
const arr = [10, 20, 30];
arr[0] = 100; // const는 값의 변화가 안된다고 하지 않았나? // mutable
// arr 라는 식별자를 가진 변수는 [] 라는 주소값을 가리키고 []안의 데이터들은 또 따로 저장이 된다. 10, 20, 30 모두 각자 다른 데이터값에 할당되고 []가 그 데이터 주소값을 가리킨다. 그래서 arr 변수는 []를 가리키는 건 동일하나 그 안의 []이 가리키는 데이터의 주소값이 바뀐 것이다. 100이라는 숫자가 데이터에 저장되어있는 지 확인하고 없으면 새로운 주소에 할당하고 그 주소를 []가 가리키게 된다.
console.log(arr);
console.dir(arr); // 프로퍼티와 메소드를 볼 수 있다.

// 문자열(String)
// 문자열도 열이기 때문에 순서가 있다.
const s = "hello world";
console.log(s[0]);
s[0] = "i"; // immutable 속성, 바꿔줄 수도 있다.

// arr.1 // error
// 숫자로 들어간 값은 대괄호 호출
// length는 문자열로 문자열은 .으로 호출
arr[1];
arr.length;
arr["length"];

// 아래 두개 다 같은 것이다. 값을 변경함
arr[0] = 100;
arr.length = 10;

// 프로퍼티를 추가하는 것도 가능하다.
// 인덱스 값에 추가된 것이아니라 프로퍼티로 추가된 것이기 때문에 배열의 데이터 값과 length에는 영향이 없다.
arr["doha"] = 100;
arr.doha = 1000;

// 📙배열의 특징
// let arr = [];
// let arr = [1, 2, 3];
//let arr2 = new Array(4, 5, 6);
// let arr2 = new Array(3);
// Array(100).fill(0);

// 1. 배열은 순서가 있다. 배열의 순서를 index, 이 순서로 호출하는 것을 indexing이라고 한다. 배열 안에 값을 원소(elements)라고 한다.
const arr = [10, 20, 30];
arr[0] = 100;

// 2. 배열에 다른 원시타입과 객체타입을 포함할 수 있다. 행렬 문제로 코딩테스트에 출제된다.
const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

arr[0]; // [1, 2, 3]
arr[1]; // [4, 5, 6]
arr[2]; // [7, 8, 9]
arr[1][2]; // 6

// 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10; // 스칼라, 스칼라는 1차원, 차원 없는 것
const b = [10, 20, 30]; // 벡터
const c = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 매트릭스
const d = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
]; // 텐서(3차원 이상의 다차원)

// 그렇기에 인공지능 중 가장 유명한 라이브러리 텐서플로우는 결국 다차원 행렬의 연산이다.

// 📌 배열 메소드
// 1️⃣ push
const arr = [1, 2, 3];
arr.push(4);

// push 실무 예제
// let tableBodyData = [];
// for (const iterator of data) {
//   tableBodyData.push(`
//     <tr>
//       <td>${iterator["a"]}</td>
//       <td>${iterator["b"]}</td>
//       <td>${iterator["c"]}</td>
//       <td>${iterator["d"]}</td>
//       <td>${iterator["e"]}</td>
//       <td>${iterator["f"]}</td>
//     </tr>
//   `);
// }
// document.querySelector('#dataTable > tbody').innerHTML = tableBodyData.join('');

const arr = [1, 2, 3, 4, 5];
arr.pop(); // 마지막에서 값을 꺼내고 꺼낸 값을 반환 한다. // 5
arr; // (4) [1, 2, 3, 4] 5가 빠져있다.

// 2️⃣ Pop
const arr = [1, 2, 3, 4, 5];
let lastValue = arr.pop();
arr;

// 3️⃣ unshift
const myArray1 = ["사과", "바나나", "수박"];
myArray1.unshift("오이", "배");
console.log(myArray1);

// 4️⃣ shift
// 1. 앞에서 값을 꺼내고
// 2. 꺼낸 값을 반환(return) 한다.
let myArray = ["사과", "바나나", "수박"];
// myArray.shift();
// console.log(myArray);

let firstValue = myArray.shift();
firstValue; // 사과

// 🔎 문제 ⭐️⭐️⭐️⭐️⭐️
// ||답변||으로 답해주세요.
// pop, shift, unshift, push에 대해 설명해주세요.

// push() 배열의 마지막에 값을 추가
// pop() 배열안의 마지막 값을 꺼내고, 그 삭제된 요소를 반환
// unshift() 배열의 앞에 값을 추가
// shift() 배열 맨 앞에서 값을 꺼내고, 그 삭제된 요소를 반환

// 5️⃣ splice()
//arr.splice(start, deleteCount, items)
// 원본 배열을 건든다.
const arr = [1, 2, 3];
arr.splice(1, 0, 4); // arr에 1번째에 아무것도 삭제하지 않고 4를 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, ...[10, 20, 30]); // arr에 1번째에 아무것도 삭제하지 않고 [10, 20, 30]을 넣겠다. 전개구문을 사용하여 대괄호를 없앤다.

const arr = [1, 2, 3];
arr.splice(1, 0, 10, 20, 30); // arr에 1번째에 아무것도 삭제하지 않고 10, 20, 30을 넣겠다.

// 🆀 문제
// ||을 사용해서 답변해주세요.
const arr = [10, 20, 30, 40, 50];
const x = [1, 2, 3];
// 만들고 싶은 값 == [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 50]

arr.splice(1, 0, ...x);
arr.splice(7, 0, ...x);
console.log(arr);

const arr = [10, 20, 30, 40, 50];
arr.splice(2, 1, 5); // arr에 2번째에 1개를 삭제하고 5를 넣는다.
console.log(arr); // [10, 20, 5, 40, 50]
// arr.splice().splice() // 메서드 체이닝이 의도한대로 안되는 이유는 splice는 arr가 아니라 삭제된 값을 반환한다.

const arr = [10, 20, 30, 40, 50];
arr.splice(2, 2); // 2번째에 2개를 삭제하고 삽입 값은 없다.

const arr = [10, 20, 30, 40, 50];
arr.splice(1); // 첫번째 값만 남는다.
arr;

const arr = [10, 20, 30, 40, 50];
arr.splice(2); // 1~2번째 값만 남는다.
arr;

// 6️⃣ slice
// arr.slice(start, end)
// 원본 배열을 건들지 않는다.
const myArray2 = ["apple", "banana", "cherry", "durian", "elderberry"];
console.log(myArray2.slice(1, 4)); // 0번과 5번은 제외한 1~3번 잘라낸 값만 출력
console.log(myArray2);
myArray2.slice(1);
myArray2.slice(0, 100); // 끝까지 다 추출한다.

// 7️⃣ forEach()
// 배열의 각 요소에 대해 주어진 함수를 실행한다. 함수는 배열 요소, 인덱스를 받는다. 요소를 순환하면서 해당 요소를 함수로 전달하고, 함수가 각 요소에 대해 실행된다.
const arr = [10, 20, 30, 40, 50];
// arr.forEach(함수);
// 함수(callbackfn): (value: number, index: number, array: number[])

arr.forEach(function (item, index) {
  console.log(index, item);
});

arr.forEach(function (item, index) {
  console.log(index, item);
  console.log("hello");
  console.log("world");
});

arr.forEach(function (item, index, arr) {
  // 마지막 arr는 arr 전체를 반환
  console.log(index, item, arr);
});

// 실무에서 사용하는 코드는 아니다.
const arr = Array(100).fill(0);
const arr2 = [];

// 같은 코드1
arr.forEach(function (item, index) {
  arr2.push(index);
});

// 같은 코드2
arr.forEach((item, index) => {
  arr2.push(index);
});

// 같은 코드3 주로 사용됨 ⭐️
arr.forEach((item, index) => arr2.push(index));

//같은 코드4 이렇게는 사용하지 않음 (이름이 있는 함수  사용)
function doha(item, index) {
  arr2.push(index + 1);
}

arr.forEach(doha); // 콜백함수

// 어제 진행했었던 코드
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((item) => {
      console.log(item.thumbnailImg);
      console.log(item.productName);
      console.log(item.price);
    });
  });

// https://caniuse.com/?search=forEach
// nodeList에서 forEach와 Array에서 forEach는 다르다.
// nodeList에서 forEach는 익스플로러를 지원하지 않는다.

const avengers = ["spiderman", "ironman", "hulk", "thor"];

const newAvengers = [];
avengers.forEach(function (item) {
  // 새로운 행위를 하는 것이라 return이 필요없음
  newAvengers.push("💖" + item + "💖");
});
console.log(newAvengers);

// 8️⃣ map (면접 질문에서도 많이 나온다. 데이터를 뽑으려고 많이 사용한다.)
// map은 forEach와 다르게 새로운 배열을 생성한다.

const arr = [1, 2, 3];
arr.map(function (item, index) {
  return item ** 2;
});

arr.map(function (x) {
  return x ** 2;
});

// arrow function으로 사용. 하지만 map은 연산보다는 데이터 추출용으로 많이 사용한다.
arr.map((x) => x ** 2);

const arr = Array(100).fill(0);
// 같은 코드 1
arr.map((v, i) => i);

// 같은 코드 2
arr.map(function (v, i) {
  // 새로운 값을 반환해야하기에 return이 들어간다.
  return i;
});

// 같은 코드 3
const arr = Array(100).fill(0);
function doha(v, i) {
  return i;
}
arr.map(doha);

// 같은 코드 4
const arr = Array(100).fill(0);
arr.map((v, i) => {
  return i;
});

// ====================================

// 📌 실무 팁 ⭐️⭐️⭐️
let tip1 = [1, 2, 3, 4, 5];
// tip1[tip1.length - 1]; // 5
// 위 보다 전개구문을 더 많이 사용한다.
// 원본 수정 없이 [1, 2, 3, 4, 5] 값과 [5] 라는 값을 얻어내고 싶을 때
console.log([...tip1].pop());

let tip2 = [...tip1];
console.log(tip2.pop()); // 5
console.log(tip2); // [1, 2, 3, 4]

let tip3 = [1, 2, 3, 4, 5];
let tip4 = [10, 20, 30, 40, 50];

console.log([...tip3, 1000, ...tip4]); // 전개된다.

const tip5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 다차원 배열에서 최솟값, 최댓값 찾기
// flat()은 배열을 펴준다. 인자가 필요하다.
Math.max(...tip5.flat());

const tip6 = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
];

tip6.flat();
tip6.flat(1);
tip6.flat(2);
tip6.flat(Infinity); // 다 펼쳐지면 멈춘다.

const tip7 = new Array(10).fill(0); // Array(10).fill(0)도 된다.

const tip8 = Array.from("hello world"); // 하나하나 나눠준다. ['h', 'e', 'l', 'l', ' ', 'w', 'o', 'r', 'l', 'd']

//'.'.repeat(100).split('.') // 권하지 않는다.
// 배열은 split()보다는 Array.from()을 사용하는 걸 추천

const tip9 = [1, 2, 3, 4, 5];
// 주의 : 마지막에 한 값이 반영, tip9.slice(2, 5)의 값이 반영된다.
console.log([tip9.slice(0, 2), 1000, tip9.slice(2, 5)]); // array로 포함되어서 나온다.
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)]); // 전개구문으로 전개해준다.

const tip10 = [1, 2, 3, 4, 5];
tip10.splice(2, 0, 1000);
tip10;

const tip11 = Array(100)
  .fill(0)
  .map((v) => i + 1);

const tip12 = [
  ({
    _id: "642ba3980785cecff3f39a8d",
    index: 0,
    age: 28,
    eyeColor: "green",
    name: "Annette Middleton",
    gender: "female",
    company: "KINETICA",
  },
  {
    _id: "642ba398d0fed6e17f2f50c9",
    index: 1,
    age: 37,
    eyeColor: "green",
    name: "Kidd Roman",
    gender: "male",
    company: "AUSTECH",
  },
  {
    _id: "642ba39827d809511d00dd8d",
    index: 2,
    age: 39,
    eyeColor: "brown",
    name: "Best Ratliff",
    gender: "male",
    company: "PRISMATIC",
  }),
];

const age = tip12.map((item) => item.age);
