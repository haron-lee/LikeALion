import { useState } from 'react';
import './App.css';
import DisplayMood from './Components/DisplayMood/DisplayMood';
import MenuList from './Components/MenuList/MenuList';

function App() {
  const [currentMood, setCurrentMood] = useState('');

  return (
    <div>
      {/* 부모에서 자식으로 바꿀 값과 함수 보내기, 최하위 버튼에서 바꿀 수 있게  */}
      <MenuList mood={currentMood} onItemClick={setCurrentMood} />
      <DisplayMood mood={currentMood} />
    </div>
  );
}
export default App;

//* 상태끌어올리기 (테크닉)
// React는 단일 통신이기 때문에, 자식이 비슷한 레벨의 형제에게 정보를 보낼 수 없다. 그렇다면 최상위 부모까지 보낸다음에 그 부모가 자식에게 다시 보내게 할 수 있다.
// Button => ButtonList => App => View
// 자식 => 부모로 상태를 올려보내는 듯한 테크닉
