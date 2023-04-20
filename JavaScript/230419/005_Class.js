//* Class
class Robot {
  // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있다.
  // 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행된다.
  constructor(name) {
    this.name = name;
  }

  // 메소드를 정의한다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있다.
  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}

// TODO 기존의 생성자 함수를 class로 바꾸기
class Me {
  constructor() {
    this.name = "도하";
    this.address = "성남시";
    this.phoneNum = "010-0000-0000";
  }

  canWalk() {
    console.log("도하가 걷는다");
  }

  teaching(myStudent) {
    myStudent.levelUp();
  }
}

//* 클래스 상속받기 extends
class BabyRobot extends Robot {
  constructor(name) {
    super(name);
    this.ownName = "아이크";
  }

  sayBabyName() {
    // 또한 상속을 받게되면 부모 클래스의 메소드를 사용할 수 있게된다. 때문에 this로 접근 할 수 있다.
    this.sayYourName();
    console.log("Suceeding you, Father!");
  }
}
