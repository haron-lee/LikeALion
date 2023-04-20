//* 생성자 함수 비공개 프로퍼티 (클로저)
// 이것을 편하게 구현할 수 있는게 Class의 #이다.

//? 비공개를 위해서 나온것이 클로저다.

function PersonGenerator() {
  let age = 25;
  // 비공개 프로퍼티 만들고 싶을 때 안에 함수를 하나 더 만들고, 그 함수를 return 하게끔 만든다.
  function innerPersonType() {}

  innerPersonType.prototype.getAge = function () {
    return age;
  };
  // 이친구를 없애면 접근이 가능해진다.
  return innerPersonType;
}

//* 그냥 실행하면 innerPersonType이 참조
const Person = PersonGenerator();
const myPerson = new Person();

myPerson.age; // 접근 불가
myPerson.getAge(); // 25 접근 가능

//* 즉시실행 함수
// 바로 실행 시킬 수 있도록.
const PersonGenerator2 = (function () {
  let age = 25;

  function innerPersonType() {}

  innerPersonType.prototype.getAge = function () {
    return age;
  };

  return innerPersonType;
})();

const myPerson2 = new PersonGenerator2();

myPerson2.age;
myPerson2.getAge(); // 25 접근 가능
