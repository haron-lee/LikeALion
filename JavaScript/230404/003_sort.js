// 🔟+3️⃣ sort ⭐️⭐️⭐️⭐️

const avengers = ["아이언맨", "스파이더맨", "헐크"];
console.log(avengers.sort()); // 제대로 정렬

// 사전식 정렬, 시간이 지나도 못바뀌는 내용
const nums = [3, 1, 8, 6];
console.log(nums.sort());

const num = [3, 1, 11, 8, 6];
console.log(num.sort()); // sort를 어느 알고리즘으로 할 것인가는 바뀔 수 있다.(브라우저의 자유)

// 💡 오름차순
const num = [3, 1, 11, 8, 6];
console.log(nums.sort((a, b) => a - b));

// 💡 내림차순
const num = [3, 1, 11, 8, 6];
console.log(nums.sort((a, b) => b - a));

// 🔎 실무사용코드
function sort(key) {
  if (click) {
    click = false;
    let sortedData = jsonData.sort((a, b) =>
      a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
    );
  } else {
    click = true;
    let sortedData = jsonData.sort((a, b) =>
      a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0
    );
  }
}

// 딥하게 sort를 탐색해보겠다!?
const nums = [3, 1, 11, 8, 6];
console.log(
  nums.sort((a, b) => {
    console.log(a, b);
  })
);
console.log(
  nums.sort((a, b) => {
    console.log(a, b);
    console.log(a - b);
  })
);
