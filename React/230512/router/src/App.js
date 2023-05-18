//* Router
/*
- BrowserRouter 컴포넌트 :  UI와 URL을 연결합니다. 마치 SSR과 같이 URL을 사용할 수 있게한다.
- Route 컴포넌트 : 현재 URL과 매칭된 UI를 렌더링 하는 역할을 한다.
- Routes 컴포넌트 : URL이 변경되면  <Routes> 는 모든 자식 <Route>
를 살펴보고 가장 알맞는 것을 매칭한다.

*/
//? 조건부 렌더링과 리액트 라우터의 차이는?
/**
 * 사실 React는 SPA라서 URL 이동이 필요가 없다.
 * 검색 로봇이 페이지를 검색해서 브라우저의 서버에 전송을 해주어야하는데, URL이 없는 SPA같은 경우는 검색 로봇이 아무리 검색을 해도 정보가 거의 없기 때문에 검색엔진 최적화에 굉장히 치명적이다.
 * 고로 React Router를 사용하면 SSR처럼 검색엔진 최적화에 좋은 효과를 준다.
 * */
//? <BrowserRouter vs HashRouter>
/**
 * HashRouter : http://localhost:3000#hash 슬래시 대신 #(Hash)를 사용한다.
 * #은 다른 사이트가 아니라 내부 사이트를 이동할 때 사용한다. 주소상의 #은 fragment identifier 라고 불리고 컨텐츠 안에서 특정한 위치를 나타낸다. (대표적으로 내부링크) 이는 서버의 폴더구조를 이동하는 것과 전혀 다른 모습이기 때문에 로봇을 통한 크롤링이 불가능해지고 결국 SEO에 악영향을 미친다. 하지만 HashRouter는 레거시 브라우저에서도 작동이 가능하다.
 * React Router는 실제로 URL에 HTML 파일이 존재하는 것은 아니지만 URL을 통해 마치 서버의 폴더를 이동하는 것처럼 보여준다.이는 SPA임에도 불구하고 마치 SSR처럼 보여지기 때문에 검색엔진에서 로봇으로 웹사이트를 탐색할 때 크롤링이 가능하다.
 *
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/one" element={<One name="licat" />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>hello world0</h1>;
}

function One(props) {
  return <h1>hello {props.name}</h1>;
}

function Two() {
  return <h1>hello world2</h1>;
}

function Three() {
  return <h1>hello world3</h1>;
}

export default App;
