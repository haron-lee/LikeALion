//* Button 컴포넌트 import 해서 사용하기
//? 가장 일반적으로 사용된다.

import React from 'react';
import styled from 'styled-components';
import { Btn, Btn2, Btn3 } from './Components/Buttons';

const Wrap = styled.div`
  display: flex;
  gap: 10px;
`;

const App = () => {
  return (
    <Wrap>
      <Btn onClick={() => console.log('click')}>버튼1</Btn>
      <Btn2>버튼2</Btn2>
      <Btn3>버튼3</Btn3>
    </Wrap>
  );
};

export default App;
