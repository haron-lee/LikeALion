// 📝if문

let score = 69;
let money = 1000;

if (score > 90) {
  console.log("참 잘했습니다<br>");
} else if (score > 80) {
  console.log("잘했습니다!<br>");
  money += 10000;
} else if (score > 70) {
  console.log("했습니다<br>");
  money += 1000;
} else {
  money = 0;
}

console.log(money);

// if문 문제
// 🟣사용자로부터 입력받은 나이에 따라 다른 인사말을 콘솔로 출력하는 프로그램을 작성하세요.

// 1. 나이가 18세 이상이면 "안녕하세요!"를
// 2. 10세 이상이면 "안녕! 반가워 꼬마친구! ” 를
// 3. 10세 미만이면 “부럽다…” 를 출력합니다.

// 나의 코드
function greeting(age) {
  if (age >= 18) {
    console.log("안녕하세요!");
  } else if (age >= 10) {
    console.log("안녕! 반가워 꼬마친구!");
  } else {
    console.log("부럽다");
  }
}
greeting(17);

// 재현님 코드
const age = parseInt(prompt("나이를 말해주세요!"));

if (age >= 18) {
  console.log("안녕하세요!");
} else if (age >= 10) {
  console.log("반가워 꼬마야");
} else {
  console.log("부럽다");
}

// 🟣사용자로부터 입력받은 성적에 따라 성적을 출력하는 프로그램을 작성하세요.

// 1. 성적이 90점 이상이면 "A",
// 2. 80점 이상이면 "B",
// 3. 70점 이상이면
// 4. "C", 60점 이상이면 "D",
// 5. 그 외에는 “강해져서 돌아와라”를 출력합니다.

const userScore = (score) => {
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("강해져서 돌아와라");
  }
};

userScore(10);
userScore(70);
userScore(88);
userScore(94);

// 삼항 연산자로 위의 문제를 다시 작성하기
const userScore2 = (score) =>
  score >= 90
    ? console.log("A")
    : score >= 80
    ? console.log("B")
    : score >= 70
    ? console.log("C")
    : score >= 60
    ? console.log("D")
    : console.log("강해져서 돌아와라");

userScore2(10);
userScore2(70);
userScore2(88);
userScore2(94);
