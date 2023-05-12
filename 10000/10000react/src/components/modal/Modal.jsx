import React from 'react';
import './Modal.css';
import licat from '../../img/licat.png';

const Modal = (props) => {
  return (
    <article id="modal">
      <div className="modal-wrap">
        <h2>화이팅!♥♥♥</h2>
        <h3>당신의 꿈을 응원합니다!!</h3>
        <img src={licat} alt="응원하는 라이캣" />
        <button type="button" className="btn-close" onClick={props.modalClose}>
          종료하고 진짜 훈련하러 가기 GO!GO!
        </button>
      </div>
    </article>
  );
};

export default Modal;
