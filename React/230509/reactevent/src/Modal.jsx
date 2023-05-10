import React from 'react';
import './Modal.css';

const Modal = ({ children, modalClose }) => {
  return (
    <div className="modal-backdrop">
      <article className="modal">
        {children}
        <button type="button" onClick={modalClose}>
          닫기
        </button>
      </article>
    </div>
  );
};

export default Modal;
