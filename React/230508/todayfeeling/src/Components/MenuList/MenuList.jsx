import React from 'react';
import MenuListItem from '../MenuListItem/MenuListItem';
import './MenuList.css';

const MenuList = (props) => {
  const menus = [
    '좋아요! 😃',
    '정말 좋아요! 😁',
    '최고예요! 😆',
    '미쳤어요!! 🤩',
  ];
  return (
    <ul className="container-list">
      {menus.map((moodEl) => {
        // mood: 기분의 텍스트, isSelected: 현재 사용자의 기분이 맞는지 true, false를 전달, props.onClickEvt: 현재 기분을 변경하는 함수
        return (
          <MenuListItem
            mood={moodEl}
            isSelected={props.mood === moodEl}
            onClickEvt={props.onItemClick}
          />
        );
      })}
    </ul>
  );
};

export default MenuList;
