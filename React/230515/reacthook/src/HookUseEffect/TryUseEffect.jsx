//* 📝 useeffect
// 상태가 바뀌었을 때 실행
// 리액트 컴포넌트의 상태가 바뀌면은 실행해주는 Hook

import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const handleCountUp = (e) => {
    setCount(count + 1);
  };
  useEffect(() => {
    // 이게 지금 처음 입장했을때 실행이되고있다...
    // 이게 처음들어왔을때를 감지해서 안실행시키고싶다.
    // 실행을 시켜야할지 말아야할지에 대한 상태를 만들어줄까..?
    if (isFirstRender) {
      console.log('난 처음 렌더링되었는지 확인하고있지. 첫번째군');
      setIsFirstRender(false);
    } else {
      console.log('난 처음 렌더링되었는지 확인하고있지. 근데이건 두번째지');

      if (count % 2) {
        alert('홀수입니다');
      } else {
        alert('짝수입니다');
      }
    }
  }, [count]);
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
}
export default Counter;
