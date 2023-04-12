// 📝 3항 연산자 실습
// Q1. 통장에 10000원 초과있으면 부자, 10000원 이하는 '부를 바라는자'
const money = 10000;
const rich = money > 10000 ? "부자" : "부를 바라는 자";
console.log(rich);

// Q2. 통장에 100000원 초과 '초부자', 10000원 초과 '부자', 10000원 이하 '부를 바라는 자'
const money2 = 30000;
const millionaire =
  money2 > 100000 ? "초부자" : money2 > 10000 ? "부자" : "부를 바라는 자";
console.log(millionaire);
