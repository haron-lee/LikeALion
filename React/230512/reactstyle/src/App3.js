import React from 'react';
import styled from 'styled-components';

const ContentDiv = styled.div`
  margin: 40px;
`;

// color의 인자로 전달되는 것에 따라서 다르게 스타일을 적용시켜 줄 수 있다.
const ContentH2 = styled.h2`
  color: ${(props) => (props.name === 'hello' ? 'red' : 'black')};
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

const App = () => {
  return (
    <ContentDiv>
      <ContentH2 name="hello">Q&A</ContentH2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
        aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
        Nemo, ullam.
      </p>
    </ContentDiv>
  );
};

export default App;
