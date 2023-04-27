const container = document.querySelector('#root');

//* 중요한 정보를 담은 변수를 환경변수라고 칭한다. 환경변수를 저장하는 변수는 전부 대문자로 적는다.
const NEWSLIST_URL = 'https://api.hnpwa.com/v0/news/1.json';
// content_url 의 json앞의 숫자는 목록의 id 중 하나이다. 그렇기에 여러가지 목록을 가져오려면 id의 값을 불러와야하기에 비워둔다.
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/$id.json';

// 현재 사용자가 보고있는 페이지의 정보와 화면에 보여질 아이템의 개수를 저장하는 객체
const store = {
  currentPage: 1,
  datasPerPage: 10,
};

// api 데이터 받아오는 함수
async function getData(url) {
  // 정상적으로 받아오는지 예외처리
  try {
    //! fetch는 비동기 통신이기에 async와 await를 사용
    const response = await fetch(url);
    // response를 정상적으로 받아왔는지 확인하는 ok
    // 정상적으로 작동하지 않으면의 조건이기에 앞에 !를 붙여준다.
    if (!response.ok) {
      throw new Error('네트워크에 문제가 있습니다.');
    }
    return response.json();
    // return fetch(url).then((response) => response.json());
  } catch (error) {
    console.log(error);
  }
}

async function newsFeed() {
  const newsFeed = await getData(NEWSLIST_URL); // fetch가 될 때까지 기다려줘야한다.
  const totalPages = Math.ceil(newsFeed.length / store.datasPerPage); // newsFeed 개수 나누기 한 페이지 30 / 3 , 나누어 떨어지지 않으면 결국 한페이지를 더 만들어야 하기에 Math.ceil을 해준다.
  const newsList = [];

  newsList.push('<ul>');

  for (
    let i = (store.currentPage - 1) * store.datasPerPage;
    i < store.currentPage * store.datasPerPage;
    i++
  ) {
    newsList.push(`
    <li>
      <a href="#/detail/${newsFeed[i].id}">${newsFeed[i].title} (${newsFeed[i].comments_count})</a>
    </li>
    `); // id 정보를 newsDetail에서 가져올 예정
  }

  newsList.push('</ul>');

  // page nation을 저장하는 친구
  let pageList = ``;
  for (let i = 0; i < totalPages; i++) {
    pageList += `<li><a href="#/page/${i + 1}">${i + 1}</a></li>`;
  }

  newsList.push(`
  <nav>
    <ul>
      ${pageList}
    </ul>
  </nav>
  `);

  container.innerHTML = newsList.join('');
}

//* 뉴스 디테일 페이지 구성 함수
async function newsDetail() {
  // 주소의 전체 문자열 중에 /#detail/3493439 뒤에 숫자만 가져와야하기에 substring을 사용 9번째부터 숫자임
  const id = location.hash.substring(9);
  const newsContent = await getData(CONTENT_URL.replace('$id', id)); // content_url의 $id를 id값으로 대체

  container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div><a href="#/page/${store.currentPage}">목록으로 돌아가기</a></div>
  `;
}

//* 라우터 : 화면을 중계하는 함수, 라우터는 URL을 계속 바라봐야한다.
function router() {
  const routePath = location.hash;

  if (routePath === '') {
    // routePath가 비어있다면 초기 화면이기 때문에 newsFeed
    newsFeed();
  } else if (routePath.includes('#/page/')) {
    store.currentPage = parseInt(routePath.substring(7)); // substring은 문자열을 반환하기에
    newsFeed();
  } else {
    newsDetail();
  }
}

window.addEventListener('hashchange', router);

router();
