import React from 'react';

const ColorText = (props) => {
  return (
    <div>
      <h2 style={{ color: props.color }}>색이 바뀌어요!</h2>
    </div>
  );
};

export default ColorText;
