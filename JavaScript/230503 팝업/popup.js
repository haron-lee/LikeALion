const article = document.querySelector('.popup');
const openBtn = document.querySelector('.btn-open');
const closeBtn = article.querySelector('.btn-close');

const dim = document.querySelector('.dim');
// 첫번째 포커스 요소, querySelector는 첫번째 자식을 가져온다.
const firstEl = article.querySelector('a');

const openPopup = function () {
  article.classList.add('active');
  firstEl.focus();
  document.documentElement.style.overflow = 'hidden';
};

const closePopup = function () {
  article.classList.remove('active');
  document.documentElement.style.overflow = 'auto';
};

openBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
closeBtn.addEventListener('keydown', (e) => {
  //내가 누르는 key 정보를 알려줌
  console.log(e.key);
  // tab만 눌렀을 때 (Shift+tab일 땐 실행되지 않음)
  if (!e.shiftKey && e.key === 'Tab') {
    e.preventDefault();
    firstEl.focus();
  }
});

firstEl.addEventListener('keydown', (e) => {
  // Shift+tab 같이 눌렀을 때 실행
  if (e.shiftKey && e.key === 'Tab') {
    e.preventDefault();
    closeBtn.focus();
  }
});

dim.addEventListener('click', closePopup);
