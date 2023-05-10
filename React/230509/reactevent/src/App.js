import { useState } from 'react';
import Login from './Login';
import Homepage from './Homepage';
import Modal from './Modal';

function App() {
  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234',
  };

  const [login, setLogin] = useState(false);
  // 모달을 닫기 위한 상태
  const [modalShow, setModalShow] = useState(true);

  // setModalShow를 실행하기 위한 함수
  const modalClose = () => {
    setModalShow(false);
  };

  console.log(login);
  return (
    <>
      {login ? <Homepage /> : <Login infoUser={user} setLogin={setLogin} />}
      {modalShow && (
        <Modal modalClose={modalClose}>
          <h2>사용약관에 대해 말씀드리겠습니다.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            illum laborum, quo facilis eaque quam optio aliquam nam provident.
            Laboriosam delectus, atque doloremque nam harum molestias ab
            quisquam! Quis, pariatur.
          </p>
          <a href="#none">더 보기</a>
        </Modal>
      )}
    </>
  );
}

export default App;
