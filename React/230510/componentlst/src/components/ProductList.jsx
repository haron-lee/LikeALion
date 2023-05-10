import React from 'react';

const ProductList = () => {
  const productList = {
    products: [
      {
        title: '개발자 무릎 담요',
        price: 17500,
        id: 101,
      },
      {
        title: 'Hack Your Life 개발자 노트북 파우치',
        price: 29000,
        id: 102,
      },
      {
        title: '우당탕탕 라이켓의 실험실 스티커북',
        price: 29000,
        id: 103,
      },
      {
        title: '버그를 Java라 버그잡는 개리씨 키링',
        price: 29000,
        id: 104,
      },
    ],
  };

  const products = productList.products.map((product, idx) => {
    return (
      <li key={product.id}>
        <h2>
          {idx + 1}. {product.title}
        </h2>
        <p>{product.price}</p>
      </li>
    );
  });

  return <ul>{products}</ul>;
};

export default ProductList;
