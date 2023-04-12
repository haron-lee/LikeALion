// 고급 템플릿 리터럴(React) 문법은 다음에 한 번 더

const x = 10;
const y = 20;
// 템플릿 리터럴 중괄호 안에 연산을 넣는 것을 권장하지 않는다.
console.log(`x값은 ${10}이고 y값은 ${20}이고 두개를 곱한 값은 ${x * y}입니다.`);

// 유지보수를 위해서 이렇게 연산 값은 변수로 지정한다.
const x2 = 10;
const y2 = 20;
const result = x2 * y2;
console.log(
  `x값은 ${10}이고 y값은 ${20}이고 두개를 곱한 값은 ${result}}입니다.`
);

// console.log("h  개행 불가능 했었음
// e
// l
// l
// o")
console.log(`h
e
l
l
o`);

const s = "hello";
const ss = "world";
const result2 = s + "\n" + ss;
console.log(result2);

// 단점을 '굳이' 뽑자면 아래와 같을 경우 tab한 크기도 같이 출력 된다.
if (true) {
  if (true) {
    if (true) {
      console.log(`h
      e
      l
      l
      o`);
    }
  }
}

// 변경하자면 아래와 같이 작성, 하지만 가독성이 떨어진다.
if (true) {
  if (true) {
    if (true) {
      console.log(`h
e
l
l
o`);
    }
  }
}
