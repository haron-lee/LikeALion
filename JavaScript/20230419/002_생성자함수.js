//* 생성자 함수
// new는 생성자함수와 같이 호출되면 this와 인스턴스를 연결한다.
// new는 생성자함수의 prototype과 __proto__를 연결한다.

//? prototype과 __proto__는 다를까?
// 다르다. prototype은 오직 function안에 존재하는 참조값이다. __proto__는 객체 안에 존재하는 숨겨진 프로퍼티이다. 인스턴스는 __proto__를 통해 생성자 함수의 prototype에 접근하여 필요한 여러가지 값과 메소드를 사용할 수 있다.

//* 실습
// 음식 이름의 배열을 전달하면 배열안에서 랜덤하게 메뉴를 뽑아내는 기능을 가진 로봇객체의 생성자를 만들어보세요. 예를들어 new FoodPicker(['짜장면', '청국장', '김치찌게']) 이렇게 인스턴스를 만들면 인스턴스는 짜장면, 청국장, 김치찌게 중에 한 가지 메뉴를 랜덤하게 콘솔로 출력하는 기능을 가져야합니다.

function FoodPicker(foods) {
  this.foods = foods;

  this.pick = function () {
    const randomIndex = Math.floor(Math.random() * this.foods.length);
    console.log(`오늘의 음식은 ${this.foods[randomIndex]}입니다.`);
  };
}

const foods = ["짜장면", "청국장", "김치찌개"];
const foodPicker = new FoodPicker(foods);
foodPicker.pick();

// function FoodPicker(foodNames) {
//   this.name = foodNames; // 파라미터를 저장할 프로퍼티
//   this.sayMenu = function () {
//     console.log(
//       `삐리리리 오늘의 메뉴는 ${
//         this.name[MAth.floor(Math.random() * this.name.length)]
//       } 입니다.` // 0 ~ 2.999까지 뽑아낼 수 있다.
//     );
//   };
// }
