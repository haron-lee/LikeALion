//* 실습 to do list
// 간단한 투두 리스트기능 구현해보기
// 1. 해야할 일 Todo 클래스(내용, 상태 두 가지 프로퍼티를 가집니다.) (상태 = 끝났는지(t), 안끝났는지(f))

// 2. Todo 클래스는 상태를 변경하는 changeState 메서드를 가집니다.( 자신 안에있는 상태만 바뀌면 된다 )

//==========================================================

// 3. 할일의 목록을 관리하는 관리자를 추상화한 TodoManager 클래스(할일 목록을 프로퍼티로 가집니다.)

// 4. 할 일을 저장하고(addItem), 할 일의 목록을 보여주며(getItems), 할 일의 남은 갯수를 반환하는(getLeftTodoCount) 세 가지 메소드를 가집니다.

//* 1. 할 것 객체 만들기
// 대상 추상화

class Todo {
  constructor(item, finished) {
    // 인스턴스에 연결하기위해 this를 생성
    this.item = item;
    this.finished = finished;
  }

  changeState() {
    // 다른 값으로 바꿔주기
    this.finished = !this.finished;
  }
}

const todo = new Todo("점심먹기", false);
console.log(todo); // { item: "점심먹기", finished: false }
todo.changeState();
console.log(todo); // { item: "점심먹기", finished: true }

//* 두번째 할 것 객체 만들기
class TodoManager {
  constructor() {
    this.todoList = [];
  }

  addItem(item, finished = false) {
    // 자동으로 Todo 클래스를 실행시키기위해 변수로 저장
    const todo = new Todo(item, finished);
    this.todoList.push(todo);
  }

  getItems() {
    // 몇개 있는지 가져오기
    return this.todoList;
  }

  getLeftTodoCount() {
    // return this.todoList.reduce(
    //   (total, current) => (current.finished === false ? ++total : total),
    //   0
    // );
    return this.todoList.filter((item) => item.finished === false).length;
  }
}

const manager = new TodoManager();
console.log(manager); //TodoManager { todoList: [] }
manager.addItem("청소하기");
manager.addItem("밥하기");
manager.addItem("운동하기");

console.log(manager.getItems());
console.log(manager.getLeftTodoCount());
