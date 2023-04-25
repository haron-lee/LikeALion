// let result = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
// console.log(result);

// let result = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// result.then((data) => {
//     console.log(data);
// });

let result = fetch(
  'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
);

result
  .then((data) => {
    return data.json();
  })
  .then((result) => {
    return result;
  })
  .catch((result) => {
    console.log(new Error(result));
  });
