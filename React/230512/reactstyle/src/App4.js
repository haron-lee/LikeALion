//* style component 확장

import React from 'react';
import styled from 'styled-components';

const ContentOne = styled.div`
  margin: 40px;
`;

const ContentTwo = styled.div`
  color: red;
`;

// ContentTwo를 확장해서 사용할 수 있다.
// a11y 같이 재사용성이 높은 스타일을 이렇게 확장해서 사용하면 좋다.
const ContentThree = styled(ContentTwo)`
  border: 1px solid black;
`;

function App() {
  return (
    <div>
      <ContentOne>hello world</ContentOne>
      <ContentTwo>hello world</ContentTwo>
      <ContentThree>hello world</ContentThree>
    </div>
  );
}

export default App;
