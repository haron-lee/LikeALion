import { useState } from 'react';
import React from 'react';
import './EventForm.css';

const Eventform = ({ addData }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const resetForm = () => {
    setTitle('');
    setDate('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      date: date,
    };
    console.log(formData);

    // App.js에서 받아온 addData에 formData를 넣어서 App.js로 보내준다.
    addData(formData);
  };

  console.log(title, date);
  // value를 value={title}로 연결해줘야 양방향이 된다. 완전히 제어권이 React에 있게 된다. 연결해주기 전에는 초기화 버튼을 누르면 초기화가 되었다(HTML에 제어권이 남아있음)
  return (
    <form className="event-form" onSubmit={handleSubmit}>
      <label>
        <strong>Event Title :</strong>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        <strong>Event Date :</strong>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </label>
      <button type="submit">제출</button>
      <button type="reset" onClick={resetForm}>
        초기화
      </button>
    </form>
  );
};

export default Eventform;
