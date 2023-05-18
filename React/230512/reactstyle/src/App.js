//* React Style
// 문자열 리터럴을 함수 호출의 인자로 전달하여 해당 문자열을 가공하는 기능이다. 이때 함수는 문자열 리터럴을 $표현식을 기준으로 나누어 각 부분을 배열의 요소로 전달받아, 이를 이용해 최종적인 문자열을 반환한다. 이는 ES6 문법이다.

// reset
// npm i styled-reset
// import reset from "styled-reset"
// GlobalStyle에  ${reset} 넣어서 사용하면 된다.
// reset이 싫다면 npm i styled-normalize로 normalize를 사용해도 된다.

import Example from './Components/Example';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    span {
    color: red;
    font-size: 12px;
    }

    a{
        text-decoration : none;
        color : inherit;
    }

    button{
        border : none;
        cursor : pointer;
    }

    * {
    box-sizing: border-box;
    }
`;

function App() {
  // const name = '이호준';
  // const age = 10;

  // function 인사(문구, 이름, 나이) {
  //   // console.log(문구)
  //   console.log(문구, 이름, 나이);
  //   return `${문구[0]}${이름}${문구[1]}${나이 + 나이}${문구[2]}`;
  // }

  // JS 표현식을 기준으로 문자열을 자른다. ['이름은 ', '이고 나이는 ', ' 입니다']와 같이.
  // 자른 문자열이 인사함수의 문구 인자로 들어가고, name은 이름로, age+age는 나이로 들어간다.
  // const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age + age}입니다.`;

  // console.log(인사문구);

  return (
    <>
      <GlobalStyle />
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example />
    </>
  );
}

export default App;
