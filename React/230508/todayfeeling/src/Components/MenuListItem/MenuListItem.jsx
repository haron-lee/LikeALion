import React from 'react';
import './MenuListItem.css';

const MenuListItem = (props) => {
  const onItemClick = () => {
    props.onClickEvt(props.mood);
  };

  const getBackgroundColor = () => {
    if (props.isSelected) {
      return 'skyblue';
    }
  };

  return (
    <li>
      <button
        class="btn-item"
        onClick={onItemClick}
        style={{ backgroundColor: getBackgroundColor() }}
        type="button"
      >
        기분이: {props.mood}
      </button>
    </li>
  );
};

export default MenuListItem;
