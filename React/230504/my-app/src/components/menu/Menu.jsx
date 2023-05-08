import './Menu.css';

function Menu() {
  return (
    // 인라인 스타일, 우선 순위가 더 높다
    <ul
      className="newClass"
      style={{ color: 'red', backgroundColor: 'yellow' }}
    >
      <li>짜장면</li>
      <li>짬뽕</li>
      <li>볶음밥</li>
    </ul>
  );
}

export default Menu;
