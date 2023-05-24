import React, { useEffect, useState } from 'react';

function getName() {
  console.log('사실은 겁나 오래기다리는중...');
  return '개리';
}

function App() {
  const [name, setName] = useState(getName());
  const [num, setNum] = useState(0);
  return (
    <>
      <div>
        안녕하세요 {name}! 현재 숫자는{num}입니다
      </div>
      {/* ((prev) => prev + 1) 이렇게 사용하는 것이 안전하다. 이전 결과값을 사용하기위함 */}
      <button onClick={() => setNum(num + 1)}>{num}</button>
    </>
  );
}

export default App;
