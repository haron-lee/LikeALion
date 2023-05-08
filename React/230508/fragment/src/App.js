//* 📝 Fragment
//  jsx 컴포넌트는 최상위 부모요소를 가져야 하기 때문에 보통 div 태그로 다른 태그들을 감싸주었는데, Fragments 를 사용하면 <div> 와 같은 별도의 노드를 추가하지 않고 여러 개의 자식을 감싸줄 수 있다.
// <Fragment></Fragment> 대신 <></> 이렇게 사용할 수 있다.
// Fragment는 화면에 렌더링 되지 않기 때문에 스타일과 관련된 속성을 사용하는 것은 무의미하다. 그리고 단축속성 <></>에는 속성을 사용할 수 없다.

import React, { Fragment } from 'react';
import './FragmentTest.css';

function ListItem({ item }) {
  return (
    <>
      <dt>사과</dt>
      <dd>사과는 가을이 제철!</dd>
    </>
  );
}

function Glossary(props) {
  return (
    <dl>
      <ListItem />
      <ListItem />
      <ListItem />
    </dl>
  );
}

let list = [
  { no: 1, area: '대전', visited: false },
  { no: 2, area: '부산', visited: true },
  { no: 3, area: '목포', visited: false },
  { no: 4, area: '제주도', visited: false },
];

function MyComponent() {
  return list.map((item) => {
    return (
      <>
        <h1>{item.area}</h1>
        <p>{item.visited ? '방문함' : '아직 안감'}</p>
      </>
    );
  });
  // Fragment는 화면에 출력되는 것이 아니라 속성을 넣을 수는 있지만 출력되지 않는다.
  // <React.Fragment className="my-fragment">
  // </React.Fragment>
}

const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' },
];

function MyItems() {
  // (item)
  // ({id, name, desc}) 구조분해할당으로도 작성가능
  // <dt>{name}</dt> 조금 더 간단하게 작성 가능하다.
  const itemList = items.map(({ id, name, desc }) => {
    return (
      <React.Fragment key={id}>
        <dt>{name}</dt>
        <dd>{desc}</dd>
      </React.Fragment>
    );
  });

  // 변수를 중괄호로 감싸서 원하는 상위태그로 감싸서 return가능하다.
  return <dl>{itemList}</dl>;
}

function App() {
  return (
    <div>
      <h1>안녕, 라이캣 1호</h1>
      <h2>안녕, 라이캣 2호!</h2>
      <Glossary />
      <MyComponent />
      <MyItems />
    </div>
  );
}
export default App;
