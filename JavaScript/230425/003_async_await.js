//* async await
/// await : 프로미스 객체가 반환될 때까지 다음 코드의 동작을 중지하고, 프로미스 객체의 fulfilled 값을 반환한다. 꼭 async와 같이 사용해야한다.

async function message() {
  let hello = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello');
    }, 100);
  });

  let world = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('world');
    }, 100);
  });

  console.log(`${hello} ${world}`);
}

message();
