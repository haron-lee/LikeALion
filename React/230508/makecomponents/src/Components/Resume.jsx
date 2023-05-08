//* 📝 useState
// <button onClick={clickLike}>like <span>{like}</span></button>
// 위의 버튼에서 {like}부분의 숫자는 클릭되어도 변하지 않는 것을 볼 수 있었다. 변수의 값이 바뀌어도 페이지는 렌더링 하지 않기 때문인 리액트의 특징 때문이다. 모든 변수가 변할 때마다 컴포넌트를 업데이트 한다면 많은 리소스가 낭비 될 것 이다. 그래서 특정 변수를 지정하여 그 변수가 변할 때마다 컴포넌트를 업데이트하라는 명령을 내려주어야 한다.

// React의 element 즉, 가상돔은 바바스크립트 객체 형태이다. 이 element는 불변하는(immutable) 특징을 가지고 있다. 따라서 엄밀히 따진다면 업데이트되는 것은 컴포넌트이고 가상돔은 교체된다고 표현하는 것이 맞다. 컴포넌트의 변화를 감지하고 변경사항을 화면에 반영하는 것은 많은 자원이 소모되는 작업이다. 때문에 리액트는 컴포넌트를 업데이트 해야할 때를 결정하는 특별한 메커니즘을 가지고 있다. 이를 재조정(reconciliation)을 거친다고 표현한다.

// reconciliation 프로세스는 이전 버전의 컴포넌트트리와 새 버전의 컴포넌트 트리를 비교하여 다음과 같은 작업을 수행한다.
// 1. 컴포넌트 타입이 같은지 비교한다.
// 2. 컴포넌트의 속성(prop)이 변경되었는지 비교한다.
// 3. 컴포넌트의 자식 요소가 변경되었는지 비교한다.
// 이러한 비교 작업을 통해 React는 변경된 부분만 업데이트하고, 나머지 부분은 그대로 유지한다. 이렇게 하면 DOM 조작을 최소화하고 더 빠르고 효율적인 애플리케이션을 만들 수 있다. 정리하면, reconciliation 프로세스를 통해 React는 컴포넌트를 업데이트하여 즉각적으로 하여 반응하는 사용자 인터페이스는 만들 수 있다. 이게 React가 다른 프론트엔드 라이브러리와 차별화 되는 중요한 기능 중 하나이다.
// [참고] https://ko.legacy.reactjs.org/docs/reconciliation.html

// useState와 같은 메소드는 Hook이라고 부른다. Hook은 접두사로 use가 붙으며, 함수형 컴포넌트에서 컴포넌트의 lifecycle과 state와 관련된 함수를 사용할 수 있게 해준다.
// useState, useEffect, useMemo, useCallback, useRef 등 다양한 Hook이 있다.

//* 신뢰가능한 단일출처
// https://ko.legacy.reactjs.org/docs/forms.html

import React, { useState } from 'react';

const Resume = (props) => {
  // useState의 인자값이 like의 초기값이다.
  // setLike는 인자 값을 업데이트 하는 함수이다.
  // const [like, setLike] = useState(0);
  const [like, setLike] = useState('');
  //* 처음 코드 (like가 동적으로 값이 오른 것이 보이지 않음)
  // let like = 0;

  const [txt, setTxt] = useState('hello');

  // function clickLike() {
  //   like += 1;
  //   console.log(like);
  // }

  // function clickLike() {
  //   // +1 은 기존의 like 값과 1을 더해 새로운 값을 반환하는것이고
  //   // ++ 변수의 값 자체를 직접적으로 변경하려는 시도이다.
  //   setLike(like + 1);
  // }

  function clickLike() {
    if (like === '') {
      setLike('Like');
    } else {
      setLike('');
    }
  }

  const myColor = props.color;
  const styleColor = { color: myColor };

  return (
    <>
      <h2>{props.name} 자기소개서</h2>
      <strong>{props.hello}</strong>
      <dl>
        <dt>취미:</dt>
        <dd>{props.hobby}</dd>
        <dt>좋아하는 음식:</dt>
        <dd>{props.food}</dd>
        <dt>좋아하는 색:</dt>
        <dd style={styleColor}>{props.color}</dd>
      </dl>
      <button onClick={clickLike}>like</button>
      <span>{like}</span>
    </>
  );
};

//* 구조분해 할당 사용
// function Resume({ hello, name, hobby, food, color }) {
//   // 구조분해할당
//   return (
//     <div style={{ border: 'solid 1px', width: '500px' }}>
//       <h1>{name} 자기소개서</h1>
//       <h1>{hello}</h1>
//       <h2>취미 : {hobby}</h2>
//       <h2>좋아하는 음식 : {food}</h2>
//       <h2>
//         좋아하는 색 : <span style={{ color }}>{color}</span>
//       </h2>
//     </div>
//   );
// }

export default Resume;
