// 📝undefined

let a;
console.log(a);

if (typeof a === "undefined") {
  console.log("y에 아무것도 할당되지 않았습니다");
}

// 위의 코드가 단축이 된다.
// a에 값이 없다면이 된다.
if (!a) {
  console.log("a에 아무것도 할당되지 않았습니다!");
}
