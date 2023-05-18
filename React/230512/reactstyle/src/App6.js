//* CSS 확장

import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  gap: 10px;
`;

const DefaultBtn = styled.button`
  background: royalblue;
  color: white;
  border: none;
  padding: 20px 50px;
  font-size: 24px;
  cursor: pointer;
`;

const Btn2 = styled(DefaultBtn)`
  color: brown;
  background: blanchedalmond;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const Btn3 = styled(DefaultBtn)`
  background: indigo;
  border-radius: 30px;
  box-shadow: 0 0 20px indigo;
`;

const App = () => {
  return (
    <Wrap>
      <DefaultBtn onClick={() => console.log('click')}>버튼1</DefaultBtn>
      <Btn2>버튼2</Btn2>
      <Btn3>버튼3</Btn3>
    </Wrap>
  );
};

export default App;
