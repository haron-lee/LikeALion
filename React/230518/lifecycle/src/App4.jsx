// 깜빡이는 예제

/** 
  1. 커져라 버튼을 클릭한다. setValue 가 실행되면서 상태값을 변경한다.
  2. Value 값이 수정되면서 컴포넌트를 재랜더링한다. 연결된 파란 상자의 스타일이 변경된다.
  3. 랜더링이 끝나고 Value 값이 변한것을 감지한 useEffect 가 실행된다.
  4. setValue 가 실행되면서 상태값을 또 변경한다.
  5. 컴포넌트가 재랜더링 되면서 파란상자의 스타일이 변경된다.
*/

import { useState, useEffect, useLayoutEffect } from 'react';

function App() {
  const [value, setValue] = useState(100);

  useEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);

  return (
    <div>
      {/* <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div> */}
      <div
        style={{ width: value, height: value, backgroundColor: 'blue' }}
      ></div>
      <button
        onClick={() => {
          setValue(1000);
        }}
      >
        커져랏!
      </button>
      <button
        onClick={() => {
          setValue(200);
        }}
      >
        작아져랏!
      </button>
    </div>
  );
}

export default App;
