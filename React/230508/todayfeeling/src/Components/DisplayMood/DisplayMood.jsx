import './DisplayMood.css';

const DisplayMood = (props) => {
  return (
    <div className="container">
      {props.mood ? `${props.mood}` : '아직 선택하지 않았어요'}
    </div>
  );
};

export default DisplayMood;
