class Robot {
  // 비공개 프로퍼티
  #password;

  constructor(name, pw) {
    this.name = name;
    this.#password = pw;
  }

  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }

  // 비공개에는 적합하지 않다.
  getPassword() {
    return this.#password;
  }

  setPassword(pw) {
    this.#password = pw;
  }
}

const myBot = new Robot("로보토", "10000");

myBot.name;
myBot.setPassword("javascript");
myBot.getPassword(); // javascript
myBot.sayYourName();
