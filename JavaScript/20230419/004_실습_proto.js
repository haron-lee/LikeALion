// function FoodPicker(foods) {
//   this.foods = foods;

//   this.pick = function () {
//     const randomIndex = Math.floor(Math.random() * this.foods.length);
//     console.log(`오늘의 음식은 ${this.foods[randomIndex]}입니다.`);
//   };
// }

const foods = ["짜장면", "청국장", "김치찌개"];
const foodPicker = new FoodPicker(foods);

//* 실습 1
// 우리가 만들었던 음식 로봇객체의 메서드를 프로토타입으로 분리해보세요, 그리고 객체의 메서드가 서로 동일한 주소를 참조하는지 확인해보세요.
function FoodPicker(foods) {
  this.foods = foods;
}

// prototype으로 분리
FoodPicker.prototype.pick = function () {
  const randomIndex = Math.floor(Math.random() * this.foods.length);
  console.log(`오늘의 음식은 ${this.foods[randomIndex]}입니다.`);
};

console.log(foodPicker.pick === foodPicker.__proto__.pick); // true;

//* 실습2
// 우리가 객체지향 개념에서 만들었던 ‘나’ 와 ‘대상’ 객체를 생성자를 통해서 만들어 볼 수 있도록 코드를 수정해봅시다.
function Person(name, foodPicker) {
  this.name = name;
  this.foodPicker = foodPicker;
}

Person.prototype.chooseLunch = function () {
  console.log(`${this.name}님의 선택은 `);
  this.foodPicker.pick();
};

const me = new Person("도하", foodPicker);
me.chooseLunch();

const other = new Person("대상", foodPicker);
other.chooseLunch();

function Me() {
  this.name = "도하";
  this.address = "성남시";
  this.phoneNum = "010-0000-0000";
}

Me.prototype.canWalk = function () {
  console.log("도하가 걷는다");
};

Me.prototype.teaching = function (myStudent) {
  myStudent.levelUp();
};
