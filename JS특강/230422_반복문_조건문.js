//* 특강 2회차

// 네이버 로또 번호 바꿔보기
const balls = document.querySelectorAll(".ball");
// 전체 ball class 불러오기 (7개)
var myArray5 = [1, 2, 3, 4, 5, 6, 7];

// for () << 이 괄호안에 있는 건?
// let i = 0; for 반복문 할 동안 사용할 변수
// i < balls.length 조건. 언제까지 반복할 건지
// i++ "코드블럭"실행 후에 할 행동
// balls[i]는 각 ball 클래스를 가진 요소 하나
for (let i = 0; i < balls.length; i++) {
  // 0일때
  // balls에 0번째 있는 값을 가져온다.
  // => querySelectorAll로 가져온 것 중 0번째 것
  // 이걸 balls[0]이라고 부른다.
  // balls[0]에 oncClick을 설정한다.
  // balls[i]가 onClick(눌리면, 행동이 브라우저에서 일어나면) function을 실행한다.
  balls[i].onclick = function () {
    // 설정할 함수내용들 (실행할 코드블럭)
    // prompt라는 함수를 실행함
    // prompt는 입력창이있는 프롬프트를 보여주고
    // 입력하고 확인을 누르면 그 입력한 값을 반환한다.(return해준다)
    // 이 프롬프트를 통해 받은 값을 num에 넣어준다.
    let num = prompt("번호를 입력해주세요");

    // 알림. 입력한 값을 "num"이라는 것에 저장했다.
    // 그 저장된 값을 가져와서 알려줌.
    alert(num + "번호가 입력되었습니다!");
    // 브라우저의 콘솔에 뭔가 보여주는 행위
    // balls[i](지금은 0번째) 값을 보여주고 , 현재 몇번째인지 보여준다.
    console.log(balls[i], i);

    // balls 0번째에 있는 요소 안에 html을 바꿔준다.
    // 뭘로? => 저장한 prompt에서 입력한걸로
    balls[i].innerHTML = num;
    // balls[i] 각 요소에 innerHTML로 num 넣어준다.
  };
}

//* 지난번에!
const balls = document.querySelectorAll(".ball");

// 저번에 var를 사용하니까 안됐음
// 근데 let 으로 바꾸니ㅣ까 되었음
// 왜 됨?

for (var i = 0; i < balls.length; i++) {
  balls[i].onclick = function () {
    var num = prompt("Enter a number");
    balls[i].innerHTML = num;
  };
}

//* var, let, const 차이를 알아보자
// 직관적인 구분
//? var는 뭐지?
// 중복선언 가능, 값을 계속 바꿀 수 있다. 구식이다.
// let, const는 신세대 ㅎ
// 사용하다보니 var가 불편하다.
// var a = 10 이라고 해놨는 데 주석도 절대로 바꾸지 말 것이라고 해놨는데 누가 밑에서
// var a = "바꿔버리기" 라고 다시 초기화해버림. 근데 만줄짜리 코드, 9673번째코드임.
// 이것 찾느라 3주걸림..로직문제인줄...
// 못바꾸게 하고싶다 ㅠㅠㅠ

// 불편하면 고쳐야지 ㅋㅎ
// let, const 이렇게 합시다 우리!!!

//? let과 const
// let은 바꿀 수 있는 것
// const는 바꿀 수 없는 것
// 근데 이 두 친구는 두번 선언못함 ㅋㅎㅋㅎ

//! 의문 왜 for를 쓸 때 제대로 작동하지 않았을까?

//* var 특: 함수 아니면 전역임, 함수 안에서는 블럭레벨임.
// 밖에있는 i를 가져옴

//* let, const 특: 코드블럭 내에서만 만들어지고 사라짐
// 만들고 사라지는데 i가 왜 남아있지?
// 아래의 코드를 보면
// 함수가 i를 기억해버린다.
for (let i = 0; i < balls.length; i++) {
  balls[i].onclick = function () {
    console.log(balls[i], i);
  };
}

//* let으로 했을 때 실행동작
{
  balls[코드블럭안에서의 0].onclick = function () {
    console.log(balls[코드블럭안에서의 0], 코드블럭안에서의 0);
  };
}

//* var로 했을 때
{
  balls[전역변수i].onclick = function () {
    console.log(balls[전역변수i], 전역변수i);
  };
}

for (let i = 0; i < balls.length; i++) {
  balls[i].onclick = function () {
    console.log(balls[i], i);
  };
}

//* 개발이란?
// 문제를 발견하고, 그 문제를 해결하는 것. 더 나은 방법으로 개선하는 것.

//* 반복문과 조건문
for (let index = 0; index < 5; index++) {
    console.log(index)
}

// for를 while로 바꿔보기
let index = 0;
while (index<5) {
    console.log(index)
    index++
}

// 계속 실행(반복)하는데 중간에 조건넣어서 멈추기.
while (true) {
    let num = prompt("취소할거임..? 취소할거면 1아니면 2");
    if (num==1) {
        break;
    }
}

// 반복문 조건문 활용
function range(num,min,max) {
    // true 또는 false 로 반환
    return num>min && num<max
}


for (let index = 0; index < 10; index++) {
    if(range(index,2,4)){
            console.log(index)
    }
}