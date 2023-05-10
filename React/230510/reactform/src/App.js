import { useState } from 'react';
import EventForm from './Components/EventForm';
import ItemGenerator from './Components/ItemGenerator';

function App() {
  const [datas, setDatas] = useState([]);

  // datas 배열에 데이터를 추가하는 목적을 가지는 함수
  const addData = (data) => {
    // 전개구문으로 풀고, 받아오는 data를 배열에 추가
    setDatas([...datas, data]);
  };
  return (
    <div>
      <ItemGenerator datas={datas} />
      <EventForm addData={addData} />
    </div>
  );
}
export default App;
