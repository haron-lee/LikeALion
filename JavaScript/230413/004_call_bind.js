//* apply, call, bind

// call
// call() 메서드의 인수에 this로 사용할 값을 전달 할 수 있다.
let peter = {
  namer: "Peter parker",
  say: sayName,
};

let bruce = {
  name: "Bruce Wayne",
  say: sayName,
};

peter.sayName();
bruce.sayName.call(bruce);

// ======

var peter = {
  name: "Peter Parker",
  sayName: function (감탄사) {
    console.log(this.name + 감탄사);
  },
};

var bruce = {
  name: "Bruce Wayne",
};
peter.sayName.call(bruce, "!"); // Bruce Wayne!
peter.sayName("!"); // Peter Parker!
peter.sayName(); //Peter Parker undefined

//* apply

var peter = {
  name: "Peter Parker",
  sayName: function (is, is2) {
    console.log(this.name + " is " + is + " or " + is2);
  },
};

var bruce = {
  name: "Bruce Wayne",
};

peter.sayName.apply(bruce, ["batman", "richman"]);

//* call과 apply 비교
// 비교1

var peter = {
  name: "Peter Parker",
  sayName: function (감탄사1, 감탄사2) {
    console.log(this.name + 감탄사 + 감탄사2);
  },
};

var bruce = {
  name: "Bruce Wayne",
};

peter.sayName.call(bruce, "!", "!!");

// 비교2
var peter = {
  name: "Peter Parker",
  sayName: function (감탄사1, 감탄사2) {
    console.log(this.name + 감탄사1 + 감탄사2);
  },
};

var bruce = {
  name: "Bruce Wayne",
};
peter.sayName.call(bruce, ["!", "!!"]);

//* bind
function sayName() {
  console.log(this.name);
}

var bruce = {
  name: "bruce",
  sayName: sayName,
};

var peter = {
  name: "peter",
  sayName: sayName.bind(bruce), // bruce에 this가 바인딩 되어있다.
};

peter.sayName(); // bruce
bruce.sayName(); // bruce

// peter.syaName() 과 bruce.sayName()의 결과 값이 어떨지 생각해보자.
