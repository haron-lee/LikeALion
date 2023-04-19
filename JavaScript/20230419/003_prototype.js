//* prototype
// 생성자 함수를 이용할 때 너무 많은 반복을 해야한다. 100개면 100개를..
//

function Doha() {
  this.age = 32;
}

Doha.prototype.name = "도하";

const doha1 = new Doha();
const doha2 = new Doha();
const doha3 = new Doha();

console.log(doha1.age);
