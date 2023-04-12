// 🔥코드쇼쇼쇼
// 지금까지 배운 것 + 앞으로 배울 것, 우리가 뭘 할 수 있는가?
// http://test.api.weniv.co.kr/mall 코드는 백엔드 개발자가 주는것
// 백엔드 개발자: 이 json 형식으로 쇼핑몰 데이터를 던지고 있으니 이걸 받아서 쇼핑몰 UI를 만들어주세요!

// ❗️주의 코드를 이해하려 하지 마라! 복붙!

// step1 통신에서 받아온 데이터
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => console.log(data));

// step2
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((item) => {
      console.log(item);
    });
  });

// step3
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((item) => {
      console.log(item.thumbnailImg);
      console.log(item.productName);
      console.log(item.price);
    });
  });

// 출력 된 이미지가 맞는지 확인
// https://test.api.weniv.co.kr/asset/img/1/thumbnailImg.jpg

// step4 주소를 이어서 썸네일 이미지 주소를 출력하기
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((item) => {
      console.log("https://test.api.weniv.co.kr/" + item.thumbnailImg);
      console.log(item.productName);
      console.log(item.price);
    });
  });

// step5 DOM을 생성하여 화면에 출력되게 해보자!
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    const main = document.createElement("main");
    data.forEach((item) => {
      // console.log("https://test.api.weniv.co.kr/" + item.thumbnailImg);
      // console.log(item.productName);
      // console.log(item.price);
      const productCard = document.createElement("article");
      // const productImg = document.createElement("img");
      const productName = document.createElement("h2");
      const productPrice = document.createElement("p");

      productName.textContent = item.productName;
      productPrice.textContent = item.price;
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);

      main.appendChild(productCard);
    });
    document.body.appendChild(main);
  });

// step6
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    const main = document.createElement("main");
    data.forEach((item) => {
      // console.log("https://test.api.weniv.co.kr/" + item.thumbnailImg);

      const productCard = document.createElement("article");
      const productImg = document.createElement("img");
      const productName = document.createElement("h2");
      const productPrice = document.createElement("p");

      productName.textContent = item.productName;
      productPrice.textContent = item.price;
      productImg.setAttribute(
        "src",
        "https://test.api.weniv.co.kr/" + item.thumbnailImg
      );
      productCard.appendChild(productImg);
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);

      main.appendChild(productCard);
    });
    document.body.appendChild(main);
  });
