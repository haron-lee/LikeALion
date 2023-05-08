/**
 * async 키워드가 붙으면 함수가 Promise를 반환
 * await는 async 함수가 Promise를 반환할 때, 상태가 결정될 때까지 다음 코드의 실행을 멈추게 한다.
 * 그리고 상태가 결정되면 Promise 객체의 fulfilled 값을 반환한다.
 * async, await는 promise의 설탕 문법.
 *
 * await의 특징은 async 함수 안에서 코드의 실행 순서를 확정지을 수 있다는 것. 밖의 함수는 상관없다. 자바스크립트 엔진은 await를 만나는 순간 이를 비동기로 처리한다.
 */

//* 직렬 실행
async function message() {
  // resolve가 될 때까지, fulfilled 될 때까지 await는 기다린다.
  let hello = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello');
    }, 100);
  });
  // 위의 비동기코드가 실행 된 후에 실행
  let world = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('world');
    }, 100);
  });

  console.log(`${hello} ${world}`);
}

//* async await를 빼고 만들어보자

// function message() {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('hello');
//     }, 100);
//   }).then((result) => {
//     // return이 없어도 동작함..
//     new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(result + ' world'); // hello가 들어가기에 +해줘야한다.
//       }, 100);
//     }).then((message) => {
//       console.log(message);
//     });
//   });
// }

// message();

// console.log('i am sync!!');

//* Promise.all() 배열로 바로 받아서 사용할 수 있다. 훨씬 간결하고 가독성이 좋다. then()안에서 구조분해 할당으로 받을 수 있다.
//* 여러개를 관리해야할 때 all을 쓰면 깔끔하게 관리할 수 있다.
// function message() {
//   // static method
//   // 객체의 인스턴스를 만들지 않고 생성자 함수에서 바로 사용
//   Promise.all([
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('hello');
//       }, 100);
//     }),
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('world');
//       }, 100);
//     }),
//   ]).then(([hello, world]) => {
//     console.log(`${hello} ${world}`);
//   });
// }

async function message() {
  const [hello, world] = await Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('hello');
      }, 100);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('world');
      }, 100);
    }),
  ]);
  console.log(`${hello} ${world}`);
}

message();
