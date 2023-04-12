//* 📝 Map

let m = new Map();

// Map에 값을 넣기
m.set("하나", "1");
m.set(1, "하나");
m.set(true, 1);
m.set(false, 0);

// Map 값에 접근하기
m.get("하나"); // 1

// {[1, 2, 3]: 100, {'하나':1}: 10} 이렇게 object 생성시 error

// Map의 set과 get으로 생성은 가능하다
// 하지만 undefined 출력
//? 왜?
// [1, 2, 3] == [1, 2, 3]은 다른 배열이다
// m.set([1, 2, 3], "리얼리?");
// m.get([1, 2, 3]);

// 이렇게 변수에 저장하여 가리키고 있는 데이터가 같게 만들어줘야한다.
let x = [1, 2, 3, 4];
m.set(x, "리얼리?");
m.get(x);

// Map의 값이 있는지 확인하기
m.has("하나");

// Map의 값을 제거하기
m.delete("하나");
m.has("하나");
m;

// Map의 크기를 확인하기
m.size; // 4

//! ======

const data = new Map().set("name", "hojun").set("age", 10).set("height", 180);

//! =======

// 직접 순회가 가능하지 않은 Object!
let data = { one: 1, two: 2 };
for (const i of data) {
  // X 작동되지 않습니다!
  console.log(i);
}

let data = { one: 1, two: 2 };
for (const i of Object.entries(data)) {
  console.log(i);
}

// 직접 순회가 가능한 Map!
let m = new Map();

m.set("하나", 1) // 메서드 체이닝
  .set("둘", 2)
  .set("셋", 3)
  .set("넷", 4);

for (const i of m) {
  console.log(i); // ['하나', 1] ['둘', 2] ... ['넷', 4]
}

// key와 value를 뽑아 내기
for (const [key, value] of m) {
  console.log(key, value); // 하나 1  둘 2  셋 3  넷 4
}

//! Object의 단점
let test = { one: 1, two: 2 };
Object.keys(); // 이렇게 해주어야 Object에서 값을 뽑아낼 수 있다.

//* Map의 장점은 메서드로 모두 호출 가능!
m.keys();
m.values();
m.entries();

// Map -> Object 간의 형변환
let 맵 = new Map(Object.entries({ one: 1, two: 2 }));
let 오브젝트 = Object.fromEntries(맵);

// 키 값의 중복이 안됩니다.
let map = new Map();
map.set("이호준", 1);
map.set("이호준", 2);
map.set("이호준", 3);

//* Map과 Object의 차이
// Map 객체와 Object 는 둘 다 key - value 관계를 가진다는 점에서 비슷해보이지만 몇 가지 중요한 차이점이 있다.
// 1. Object의 키는 문자열 타입으로만 지정해야하지만, Map의 키는 모든 값을 가질 수 있다.
// 2. Object는 사용자가 직접 수동으로 알아내야 하지만, Map은 size를 통해 크기를 쉽게 얻을 수 있다.

objMap = new Map();
objMap.set("one", 1);
objMap.set("two", 2);
objMap.set("three", 3);

console.log(objMap.size); // 3

obj = { hi: 1, hi2: 2, hi3: 3, hi4: 4 };
console.log(obj.length); // undefined length 없음!
console.log(obj.size); // undefined size도 없음!

// Map은 데이터를 추가하거나 제거하는 작업에서 Object보다 더 나은 성능을 보인다.
//* 읽어보면 좋은 글
// https://shanepark.tistory.com/220 (한국인이라면 Object를 Map처럼 쓰지말자)
