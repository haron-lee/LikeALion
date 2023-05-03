async function onClickButton() {
  //버튼을 눌렀을때 동작하는거 작성하기
  const 서버응답 = await fetch('https://test.api.weniv.co.kr/mall');
  const json = await 서버응답.json();
  console.log(json);
}

// 화면에 그려주는애..
// 그려줄거를 받아서 그려주는애
function render($target, $el) {
  $target.append($el);
}

const buttonProps = {
  text: '안녕sadasd',
  onClickButton: onClickButton,
};

function createButton(props) {
  console.log(props);
  const $button = document.createElement('button');
  $button.addEventListener('click', props.onClickButton);
  $button.innerText = props.text;
  return $button;
}

const $button = createButton(buttonProps);
const $root = document.querySelector('#root');
render($root, $button);
