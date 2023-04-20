//* 클래스 실습
// extends 사용

class Sausage {
  constructor(ingre1, ingre2) {
    this.ingre1 = ingre1;
    this.ingre2 = ingre2;
  }

  taste() {
    console.log(`${this.ingre1}와 ${this.ingre2} 맛이 난다!`);
  }
}

class FireSausage extends Sausage {
  constructor(ingre1, ingre2, ingre3) {
    super(ingre1, ingre2);
    this.ingre3 = ingre3;
  }
  //* 오버로딩
  // 같은 이름을 함수가 세개가 있고 전달받는 인자들이 다를 경우에 메소드를 실행을 시키면, 전달하는 인자들에 따라서 함수의 기능을 바꿔준다.
  // 인자1개면 1개인 함수, 2개면 2개인 함수, 3개면 3개인 함수

  //* 오버라이딩
  // 같은 이름으로 덮어쓰기 할 경우 오버라이딩이라 하며 덮어쓴 메소드가 실행되게 된다.
  taste() {
    console.log(
      `${this.ingre1}와 ${this.ingre2} 맛과 ${this.ingre3}이 나는 소세지다!`
    );
  }
}

// 사용 예시
const sausage1 = new Sausage("소고기", "파");
sausage1.taste(); // 출력: 소고기와 파 맛이 난다!

const sausage2 = new FireSausage("소고기", "파", "불");
sausage2.taste(); // 출력: 소고기와 파 맛도 나고, 불맛도 난다!
