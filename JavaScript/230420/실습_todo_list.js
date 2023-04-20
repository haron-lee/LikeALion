// 간단한 투두 리스트기능 구현해보기
// 1. 해야할 일 Todo 클래스(내용, 상태 두 가지 프로퍼티를 가집니다.) (상태 = 끝났는지(t), 안끝났는지(f))

// 2. Todo 클래스는 상태를 변경하는 changeState 메서드를 가집니다.( 자신 안에있는 상태만 바뀌면 된다 )

//==========================================================

// 3. 할일의 목록을 관리하는 관리자를 추상화한 TodoManager 클래스(할일 목록을 프로퍼티로 가집니다.)

// 4. 할 일을 저장하고(addItem), 할 일의 목록을 보여주며(getItems), 할 일의 남은 갯수를 반환하는(getLeftTodoCount) 세 가지 메소드를 가집니다.

class Todo {
  constructor(content, isCompleted = false) {
    this.content = content;
    this.isCompleted = isCompleted;
  }

  changeState() {
    this.isCompleted = !this.isCompleted;
  }
}

class TodoManager {
  constructor() {
    this.todoList = [];
  }

  addItem(item) {
    this.todoList.push(item);
  }

  getItems() {
    return this.todoList;
  }

  getLeftTodoCount() {
    return this.todoList.filter((item) => !item.isCompleted).length; // false인 친구들 길이만 가져오기
  }
}

const todoManager = new TodoManager();
todoManager.addItem(new Todo("우유 사기"));
todoManager.addItem(new Todo("달리기"));
todoManager.addItem(new Todo("JS 공부"));

// todoManager.getItems().forEach((item) => console.log(item));

console.log(todoManager.getLeftTodoCount()); // 3
todoManager.getItems()[0].changeState(); // 0번째 true로 바꿔보기
console.log(todoManager.getLeftTodoCount()); // 2
