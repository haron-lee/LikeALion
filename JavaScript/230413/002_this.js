//* 📝 this

function a() {
  console.log(this);
}
a(); // window를 호출

function b() {
  console.log("hello world");
}
b();
window.b(); //window를 호출

let myObj = {
  val1: 100,
  func1: function () {
    console.log(this);
    // this가 누구일까?
    // 찍어보면 된다. console.log
    // 1. func1
    // 2. myObj
    // 3. window
  },
};

myObj.func1(); // myObj를 호출

//! ==========

let myObj = {
  val1: 100,
  func1: function () {
    console.log(this);
  },
};

let test = myObj.func1; // this의 위치가 window로 바뀜
test();

//! =======

// this가 어려운 이유는 this를 포함하고 있는 객체가 있는 위치에 따라 this의 의미가 달라지기 때문이다.
// bind를 포함한 예외사항이 있다.

function sayName() {
  console.log(this);
}

var c = {
  hello: "world",
  say: sayName(),
};

var b = {
  // var b = {c} key와 value 이렇게 작성시 둘다 들어간다.
  c: "c",
};

var a = {
  // var a = {b}
  b: "b",
};

//* 문제 꼬기

function sayName() {
  console.log(this);
}

var c = {
  hello: "world",
  say: sayName,
};

var b = {
  // var b = {c}
  c: c,
  say: sayName,
};

var a = {
  // var a = {b}
  b: b,
  say: sayName,
};

//! 추가 예제

var name = "hojun";

function sayName() {
  console.log(this.name);
}

// sayName();

let peter = {
  namer: "Peter parker",
  say: sayName,
};

let bruce = {
  name: "Bruce Wayne",
  say: sayName,
};

peter.say(); // Peter parker
bruce.say(); //Bruce Wayne

//! =====

function attackBeam() {
  // 레이저 공격
  this.hp -= 20;
}

let zombie = {
  name: "zombie",
  damaged: attackBeam,
  hp: 10000,
  power: 2,
};

let thanos = {
  name: "thanos",
  damaged: attackBeam,
  hp: 1000,
  power: 100,
};

zombie.damaged();
zombie.hp; // 20이 깎였다

//! =====

function attackBeam() {
  // 레이저 공격
  this.hp -= 20;
}

function attackKnife() {
  // 칼공격
  this.hp -= 5;
}

let zombie = {
  name: "zombie",
  damaged: [attackBeam, attackKnife],
  hp: 10000,
  power: 2,
};

let thanos = {
  name: "thanos",
  damaged: attackBeam,
  hp: 1000,
  power: 100,
};

zombie.damaged[0](); // Beam 공격받음
zombie.damaged[1](); // Knife 공격받음
zombie.hp;

//* 📌 bind는 this를 묶어주는 역할을 한다.

let 호텔 = [
  {
    이름: "하나호텔",
    위치: "제주도 제주시 001",
    가격: { A: 50000, B: 30000, C: 15000 },
    방의개수: 50,
    예약자수: 25,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: "둘호텔",
    위치: "제주도 제주시 002",
    가격: { A: 100000, B: 60000, C: 30000 },
    방의개수: 100,
    예약자수: 30,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: "셋호텔",
    위치: "제주도 제주시 003",
    가격: { A: 80000, B: 50000, C: 30000 },
    방의개수: 120,
    예약자수: 80,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());

//! =====

function sayName() {
  console.log(this)
}

var c = {
  'say': sayName;
}

var b = {
  'c': c,
}

var a = {
  'b': b,
}

a.b.c.say();

function a() {
  console.log(this);
  function b() {
    console.log(this);
    function c() {
      console.log(this);
    }
    c();
  }
  b();
}
a();

// a, b, c 모두 window
// 위 함수는 a.b.c()이런 식으로 호출한 객체를 타고 올라가는 형태가 아니다.
// 위 코드의 호이스팅 순서는 다음과 같습니다.

// 함수 a()와 함수 b()와 함수 c()가 메모리에 등록됩니다.
// 전역 실행 컨텍스트가 생성되고, VariableEnvironment에 a 함수가 등록됩니다.
// a() 함수가 호출되고, VariableEnvironment가 a() 함수의 환경으로 업데이트됩니다.
// b() 함수가 호출되고, VariableEnvironment가 b() 함수의 환경으로 업데이트됩니다.
// c() 함수가 호출되고, VariableEnvironment가 c() 함수의 환경으로 업데이트됩니다.
// 위 코드에서 this 키워드는 실행 컨텍스트 내에서 함수가 호출될 때 동적으로 결정되기 때문에, 실행 결과는 호출된 함수에 따라 다르게 출력됩니다.

// 따라서, 위 코드의 실행 결과는 다음과 같습니다.
// window
// window
// window

// 첫 번째 출력은 전역 객체 Window를 출력하고, 두 번째와 세 번째 출력도 모두 Window를 출력합니다. 이는 this가 각각의 함수 내부에서 호출되었을 때, 함수가 호출된 객체가 없기 때문에 전역 객체인 Window를 참조하기 때문입니다.

// this 출력
let newBook4 = new Book("JavaSCript", 100000, "홍길동", "2023.04.12")

// new 키워드를 사용했을 때 일어나는 일
function Book(책이름, 책가격, 저자, 출판일) {
    this.출력 = function (){
        console.log(this)
    }
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일    
    // return this
}