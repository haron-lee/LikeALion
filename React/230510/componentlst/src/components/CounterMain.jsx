import React, { useState } from 'react';

const CounterMain = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    // setNumber(number + 1)을 두번실행할 경우 +2가 아닌 +1이 되는 것을 알 수 있다. 하나로 취급해서 업데이트하기 때문
    setNumber(number + 1);
    // 이것을 해결하기 위해서 함수형 업데이트를 사용한다. 값을 보장한다. 이전 값이 보장되어 +2씩 올라가는 것을 볼 수 있다.
    // 이전 변경된 값에 추가로 변경해야할 때 사용.
    setNumber((prevNumber) => prevNumber + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div>
      <h2>Counter: {number}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default CounterMain;
