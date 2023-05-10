import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const plusCounter = () => {
    setCounter(counter + 1);
  };

  const minusCounter = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={plusCounter}>+1</button>
      <button onClick={minusCounter}>-1</button>
    </div>
  );
};

export default Counter;
