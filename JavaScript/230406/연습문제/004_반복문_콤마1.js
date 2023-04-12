const num = 12000000;

//* 문제: 반복문만 사용하여 숫자단위 콤마 찍기
function addComma(num) {
  let answer = "";
  let count = 0;
  const strNum = num.toString();

  // i는 strNum의 마지막 인덱스부터 시작, 0과 같을때 까지 i를 -1씩 그 앞의 인덱스로 이동해준다.
  for (let i = strNum.length - 1; i >= 0; i--) {
    answer = strNum[i] + answer; // 거꾸로 더해주기.
    count++; // 거꾸로 더해주면 count는 1씩 증가.

    if (count === 3 && i !== 0) {
      // count의 숫자가 3과 같고 0이 아니면 answer에 comma를 더해준다.
      answer = "," + answer;
      // 그리고 다시 count를 0으로 초기화!
      count = 0;
    }
  }
  return answer;
}

console.log(addComma(num));
