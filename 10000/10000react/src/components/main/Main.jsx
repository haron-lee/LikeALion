import React from 'react';
import './Main.css';
import { useState } from 'react';

const Main = (props) => {
  const [expert, setExpert] = useState('');
  const [trainingTime, setTrainingTime] = useState(0);
  const [dDay, setDday] = useState(0);
  const url = window.location.href;

  const handleSubmit = (event) => {
    event.preventDefault();
    setDday(Math.ceil(10000 / trainingTime));
  };

  // navigator.clipboard.writeText() 함수는 비동기 함수이기 때문에 onCopy 이벤트 핸들러에서 처리되지 않는다. 대신, navigator.clipboard.writeText() 함수가 성공적으로 실행되었는지 여부를 확인하는 try-catch 문을 사용하고, catch 블록에서 alert를 호출하면 된다.
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('클립보드에 복사되었습니다! 다른 친구들에게 공유해봐요!');
    } catch (error) {
      alert('복사에 실패하였습니다ㅠㅠ 새로고침을 해주세요!');
    }
  };

  return (
    <main>
      <h2 className="blind">필요한 시간 알아보기</h2>
      <form className="cont-input" onSubmit={handleSubmit}>
        <p className="txt-wannabe">
          나는
          <input
            type="text"
            required
            value={expert}
            onChange={(event) => setExpert(event.target.value)}
          />
          전문가가 될 것이다.
        </p>
        <p className="txt-time">
          그래서 앞으로 매일 하루에
          <input
            type="number"
            required
            value={trainingTime}
            onChange={(event) => setTrainingTime(event.target.value)}
          />
          시간씩 훈련할 것이다.
        </p>
        <button type="submit" className="btn-exc">
          나는 며칠 동안 훈련을 해야 1만 시간이 될까?
        </button>
      </form>
      {/* dDay가 0 즉 false라면 렌더링이 안되게 조건부를 주는데, 0은 Infinity가 나오고 초기값 0이 출력되기때문에 boolean으로 만들어준다. */}
      {!!dDay && (
        <section className="cont-result">
          <h3 className="blind">결과 확인</h3>
          <p className="txt-wannabe">
            당신은 <strong>{expert}</strong> 전문가가 되기 위해서 <br />
            대략 <strong>{dDay}</strong> 일 이상 훈련하셔야 됩니다! :&#41;
          </p>
          <button type="button" className="btn-go" onClick={props.modalOpen}>
            훈련하러 가기 GO!GO!
          </button>
          <button type="button" className="btn-share" onClick={handleCopy}>
            공유하기
          </button>
        </section>
      )}
    </main>
  );
};

export default Main;
