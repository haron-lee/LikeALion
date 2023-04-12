//* 로또번호를 추첨하는 코드를 작성해주세요.

let result = "";

// 빈배열 선언
let lottoNum = [];

// lottoNum에 push 되는 길이가 6보다 작을 때까지 1 ~ 6
while (lottoNum.length < 6) {
  // 랜덤으로 lotto 번호 생성 후 할당
  let lotto = Math.floor(Math.random() * 45) + 1;
  // 중복을 넣지 않기 위해 lotto의 번호를 includes 하고 있지 않으면 push하기
  if (!lottoNum.includes(lotto)) {
    lottoNum.push(lotto);
  }
}

// 오름차순으로 정리해주기
lottoNum = lottoNum.sort((a, b) => a - b);

// 배열에서 문자열로 띄워쓰기를 포함하여 result에 할당.
result = lottoNum.join(" ");

console.log(result);
