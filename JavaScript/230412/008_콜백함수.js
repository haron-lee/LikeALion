//* 📝 콜백함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게!
function 가장작은값에두배(a, b) {
  let result = b(...a) * 2;
  return result;
}

// Math.min은 콜백함수
가장작은값에두배([10, 20, 11, 21, 19, 17], Math.min);

//? (v, i) => v * 2) 이게 왜 콜백함수지?
let arr = [10, 20, 11, 21, 19, 17];
arr.map((v, i) => v * 2);

// 이 코드와 같다.
let arr1 = [10, 20, 11, 21, 19, 17];
function 곱하기두배(v, i) {
  return v * 2;
}
arr1.map(두배);
