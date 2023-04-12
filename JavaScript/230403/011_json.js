// json generator
// https://www.json-generator.com

let 회원정보 = [
  {
    _id: "642a621fa7f7757301e15345",
    index: 0,
    age: 29,
    eyeColor: "brown",
    name: "Ray Beard",
    gender: "male",
    company: "NIPAZ",
  },
  {
    _id: "642a621f38611123121b1a22",
    index: 1,
    age: 25,
    eyeColor: "green",
    name: "Gregory Young",
    gender: "male",
    company: "MAXEMIA",
  },
  {
    _id: "642a621fd72eed12276e2f98",
    index: 2,
    age: 21,
    eyeColor: "green",
    name: "Pate Hobbs",
    gender: "male",
    company: "INSOURCE",
  },
  {
    _id: "642a621f4c06c6f4dae695e1",
    index: 3,
    age: 20,
    eyeColor: "green",
    name: "Robbie Pope",
    gender: "female",
    company: "VIRXO",
  },
  {
    _id: "642a621f687fc9da6c18a3a7",
    index: 4,
    age: 25,
    eyeColor: "green",
    name: "Long Velez",
    gender: "male",
    company: "ORONOKO",
  },
];

// 회원정보 안의 첫번째 회원의 이름 출력
console.log(회원정보[0]["name"]);
// 회원정보 안의 두번째 회원의 회사 이름 출력
console.log(회원정보[1]["company"]);
// 회원정보 안의 회원들 나이의 평균
console.log(
  (회원정보[0]["age"] +
    회원정보[1]["age"] +
    회원정보[2]["age"] +
    회원정보[3]["age"] +
    회원정보[4]["age"]) /
    5
);
