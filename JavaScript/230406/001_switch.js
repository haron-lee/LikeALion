// 📝 Switch

const value = "two";

switch (value) {
  case "one":
    console.log("hello one");
    break;
  case "two":
    console.log("hello two");
    break;
  case "three":
    console.log("hello three");
    break;
  default:
    console.log("hello default");
    break;
}

const value2 = "four";

switch (value2) {
  case "one":
    console.log("hello one");
    break;
  case "two":
    console.log("hello two");
    break;
  case "three":
    console.log("hello three");
    break;
  default:
    console.log("hello default");
    break;
}

const value3 = "one";

switch (value3) {
  case "one":
    console.log("hello one");
  case "two":
    console.log("hello two");
  case "three":
    console.log("hello three");
  default:
    console.log("hello default");
}

//=========

switch (new Date().getDay()) {
  case 0:
    console.log("일요일");
    break;
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
  // default는 견고한 코드를 위해 써주시는 편이 좋습니다.
}

// 여러줄 복사하고 싶을 때
// Alt + Shift + 위아래

// 같은 단어 찾고 싶을 때
// Ctrl + D

// 같은 모든 단어
// Ctrl + Shift + l 이다.

// 자동정렬
// Cmd + a, Cmd k + f
// Ctrl + a, Ctrl k + Ctrl + f(Ctrl 누른 상태여야 합니다.)

// 전체 줄 선택
// window : 컨트롤 L 커서 있는 줄 전체선택
// mac : shift + cmd + left, cmd + opt + l
// 안되는 분도 있으십니다.

switch (value3) {
  case "one":
    console.log("hello one");
  case "two":
    console.log("hello two");
  case "three":
    console.log("hello three");
  default:
    console.log("hello default");
    break;
}

const 요일 = new Date().getDate();
const 요일객체 = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일",
};

console.log(요일객체[요일]);

// default는 어떻게 처리?
const 요일2 = new Date().getDate();
const 요일객체2 = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일",
};

// nullish 연산자 사용
console.log(요일객체2[요일2] ?? "hello");
// 단락평가 사용
console.log(요일객체2[요일2] || "hello");
