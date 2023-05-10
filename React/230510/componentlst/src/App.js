//* 컴포넌트 리스트
// key는 엘리먼트에 안정적인 고유성을 부여해 식별하기 위함
// 고유한 식별자를 사용하는 것이 좋다. 항목의 순서가 바뀔 수 있는 경우 key에 인덱스를 사용하는 것은 권장하지 않는다. 이로 인해 성능 저하, state와 관련된 문제가 생길 수 있다.
// Key는 형제 사이에서만 고유해야한다. map을 통해서 생성되는 리스트가 형제이다.

import { useState } from 'react';
import Counter from './components/Counter';
import CounterMain from './components/CounterMain';

function App() {
  const [datas, setDatas] = useState([
    {
      title: '개발자 무릎 담요',
      price: 17500,
      id: 101,
    },
    {
      title: 'Hack Your Life 개발자 노트북 파우치',
      price: 29000,
      id: 102,
    },
    {
      title: '우당탕탕 라이켓의 실험실 스티커북',
      price: 29000,
      id: 103,
    },
    {
      title: '버그를 Java라 버그잡는 개리씨 키링',
      price: 29000,
      id: 104,
    },
  ]);

  const handleClick = (id) => {
    // target id와 비교할 id가 같으면 삭제할 수 있게.
    // setDatas(
    //   // 누른 요소의 id값이 불일치한 애들만 반환
    //   // 결국 삭제 되고 남은 애들만 반환해서 datas가 변경된다.
    //   datas.filter((item) => {
    //     return id !== item.id;
    //   })
    // );

    //* 함수형 업데이트라고 표현. 함수형 업데이트를 사용하면 함수의 인자로 전달되는 state 값을 React가 이전 state의 값으로 보장한다. 때문에 상태 업데이트가 비동기적으로 처리된다고 해도 안정적으로 이전 값과 이후 값(버츄얼 돔)을 비교하여 처리할 수 있다.
    // 비동기 함수의 순서는 보장되지 않는다.
    // 위 주석 함수와 동작은 동일하다.
    setDatas((prevDatas) => {
      return prevDatas.filter((item) => {
        return id !== item.id;
      });
    });
  };

  return (
    <div>
      {datas.map((item, index) => {
        return (
          <li key={item.id}>
            <h2>
              {index + 1}
              {item.title}
            </h2>
            <span>{item.price}원</span>
            {/* <button onClick={(event) => { event.target.closest('li').remove() }}>삭제</button> */}
            {/* target의 id를 찾을 수 있게 item.id를 넣어준다. */}
            <button
              onClick={() => {
                handleClick(item.id);
              }}
            >
              삭제
            </button>
          </li>
        );
      })}
      <Counter />
      <CounterMain />
    </div>
  );
}
export default App;
