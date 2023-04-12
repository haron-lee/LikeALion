const human = {
  name: "hojun",
  age: 53,
  from: "korea",
  askingHim: function () {
    console.log("hello world!");
  },
};

console.log(human.name);
console.log(human.age);
console.log(human["name"]);
console.log(human["age"]);
// human.0  error // 그래서 arr.1 이 안되는 것
console.log(human["0"]); // '01050442903'
console.log(human[0]); // '01050442903'

// 유사배열 객체는 실무에서도 사용하지 않는다.
// 배열이 아니다. 유사배열객체 라고 한다.
const arr = {
  0: 10,
  1: 20,
  2: 30,
  length: 3,
};

arr[0]; // 10
arr[1]; // 20
arr[2]; // 30
arr.length; // 3
// 똑같은 요소로 만들어도 arr가 순회할 때 더 빠르다.
// 기본적인 바탕은 이렇게 만들어 진다.

const human = {
  name: "hojun",
  age: 53,
  from: "korea",
  askingHim: function () {
    console.log("hello world!");
  },
};

human.name = "jun";
human.name;
human.askingHim();
delete human.job;

// ❗️다른 언어와 동작방식이 달라 주의!!
console.log("age" in human);
// console.log(20 in [10, 20, 30, 40]);
// console.log('length' in [10, 20, 30, 40]);

const aespa = {
  members: ["카리나", "윈터", "지젤", "닝닝"],
  from: "광야",
  sing: function () {
    return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!";
  },
};
// 많이 쓰이진 않음 ⭐️⭐️
console.log(aespa.hasOwnproperty("itzy")); // f
console.log(aespa.hasOwnproperty("sing")); // t

// 불만이 있지만 ⭐️⭐️⭐️
// 다른 언어는 aespa.keys() 같은 방식으로 사용
console.log(Object.keys(aespa)); // 불편한 코드..
console.log(Object.values(aespa)); // 불편한 코드..
