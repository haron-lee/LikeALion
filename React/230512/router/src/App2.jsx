//* Link
/**
 * Link는 React Router에서 제공하는 컴포넌트 중 하나로, 클릭하면 애플리케이션 내에서 새로운 경로로 이동하는 링크를 생성하는 컴포넌트이다. 
 * ! Link는 주소만 바꿀 뿐 페이지를 새로 불러오지 않는다.
 * <Link to="/about">home</Link>
 * to 속성에는 접근할 경로가 들어간다. 문자열이나 객체의 형태로 경로를 넣어줄 수 있다. 문자열의 경우 html 태그의 <a> 속성 href에 넣어주는 값처럼 절대 경로 또는 상대경로를 문자열의 형태로 작성해주면 된다. 
 * pathname: 이동할 경로를 나타내는 문자열
 * search: 쿼리스트링을 나타내는 문자열 ?sort=name
 * hash: URL의 해시를 나타내는 문자열
 * state: 이동할 경로와 함께 전달할 상태 정보
 * 
 *
 // 문자열
<Link to="/courses?sort=name&sorting=asc" />

// 객체
<Link
  to={{
    pathname: "/courses",
    search: "?sort=name&sorting=asc",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
/>

 */

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
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

function One({ name }) {
  return <h1>{name} world1</h1>;
}

function Two() {
  return <h1>hello world2</h1>;
}

function Three() {
  return <h1>hello world3</h1>;
}

export default App;
