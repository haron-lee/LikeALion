//* 📝props
// props는 컴포넌트를 만들 때 넣어줄 수 있는 속성의 집합.
// 컴포넌트는 props라는 임의의 입력을 받아 리액트 엘리먼트들을 화면에 어떻게 표시할지 설정할 수 있다.

import Hello from './Components/Hello';
import Time from './Components/Time';
import Resume from './Components/Resume';
import ColorText from './Components/ColorText';

function HelloProps(props) {
  console.log(props);
  return (
    <div>
      <p>
        my name is {props.name} and age is {props.age}
      </p>
      <strong>you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </div>
  );
}

function App() {
  return (
    <div>
      <Hello name="Gary" />
      <Time />
      <HelloProps
        name="jaehyun"
        age={25}
        someFunc={() => 'awesome!!!'}
        someJSX={<img src="https://picsum.photos/id/237/200/300" alt="puppy" />}
        someArr={[1, 2, 3]}
        someObj={{ one: 1 }}
      />
      <Resume
        hello="안녕하세요"
        name="개리"
        hobby="게임"
        food="고기"
        color="blue"
      />
      <ColorText color="red" />
      <ColorText color="green" />
      <ColorText color="blue" />
    </div>
  );
}

export default App;
