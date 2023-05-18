import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
  Outlet,
} from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>홈페이지에 온 것을 환영합니다!</p>
    </>
  );
};

const Products = () => {
  const location = useLocation();
  console.log(location);
  return <h1>Products page</h1>;
};

const Cart = () => {
  return <h1>Cart page</h1>;
};

const Users = () => {
  return <h1>사용자 첫페이지</h1>;
};

// const ProductsNotice = () => {
//   const { Param } = useParams();
//   return <h1>Products Notice</h1>;
// };

const ProductsNotice = () => {
  return <h1>Products Notice</h1>;
};

const UsersCoupon = () => {
  return <h1>사용자 쿠폰페이지</h1>;
};

const UsersQuestion = () => {
  return <h1>사용자 질문게시판</h1>;
};

const UsersNotice = () => {
  return <h1>사용자 안내</h1>;
};

const App5 = () => {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/products/:id">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/users">Users</Link>
      <Link to="/users/coupon">사용자 쿠폰</Link>
      <Link to="/users/question">사용자 질문</Link>
      <Link to="/users/notice">사용자 안내</Link>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:id" element={<Products />}></Route>
        <Route path="/products/:id/notice" element={<ProductsNotice />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/users" element={<Outlet />}>
          <Route path="coupon" element={<UsersCoupon />}></Route>
          <Route path="question" element={<UsersQuestion />}></Route>
          <Route path="notice" element={<UsersNotice />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App5;
