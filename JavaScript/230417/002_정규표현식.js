//* 📝 정규표현식
// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC

"paullab CEO leehojun hello CEO";
// 문자열 1개만 매칭되어 변경
"paullab CEO leehojun hello CEO".replace("CEO", "CTO");
// flag로 global을 주어서 전체 변경 (m-다중라인, i-대소문자구분X)
"paullab CEO leehojun hello CEO".replace(/CEO/g, "CTO");
// 패턴을 찾아서 Array로 반환
"paullab CEO leehojun hello CEO".match(/CEO/g);
// 패턴으로 split
"paullab CEO leehojun hello CEO".split(/CEO/g);
// 패턴이 들어가 있으면 true 없으면 false로 반환
/CEO/g.test("paullab CEO leehojun hello CEO");

// 알고리즘 문제 풀이할 때 주의 사항
// split을 하면 내가 원하는 갯수보다 1개가 더 추가되어 나온다
"!a!abc!abcd".split("!");
"!!!".split("!"); // 4개
"!a!a!a".split("!"); // 4개
"a!a!a!".split("!"); // 4개

"!a!a!a".split("!").length - 1;

// 3. 일반문자열
/ hello / g

// 4. 처음과 끝
/^ hello / g
/ hello$ / g
/^ hello$ / g

// 5. 모든문자 매핑(.)
/ hello / g
/ h.llo / g
/ hello..world / g

// 6. 모든문자 매핑
/ h[eao]llo / g

// 7. 범위
/ h[a - zA - Z0 - 9]llo / g

// 8. 부정
/ h[^ ae]llo / g

// 9. 그루핑 규칙
/ (on | ues | rida) / gm //: 그룹 1로 3개 중 매칭되는 패턴 찾음
// /(?:on|ues)/gm
// /(on|ues)|(rida)/gm : 그룹1(on|ues)과 그룹2(rida)로 각각 매칭되는 패턴 찾음
/.(a | e | o)ll./ gm
// /hello (?!world)/gm : hello 뒤에 world가 오지 않는 것 (네거티브 매칭)
// /hello (?=world)/gm : hello 뒤에 world가 오는 것 (파지티브 매칭)

("hello hallo hello").match(/.(a|e|o)ll./g)
("hello hallo hello hello hi").match(/.(a|e|o)ll./g)
("hello hallo hello hello hi").match(/.[eao]ll./g)

// 10. 수량자
/*
_* : 앞에 있는 문자가 0개 ~ N개
_+ : 앞에 있는 문자가 1개 ~ N개
_? : 앞에 있는 문자가 0개 ~ 1개

{3} : 3개
{3,} : 3개 이상
{1,3} : 1개 ~ 3개

_* : 앞에 있는 문자가 0개 ~ N개 ({0,})
_+ : 앞에 있는 문자가 1개 ~ N개({1,})
_? : 앞에 있는 문자가 0개 ~ 1개 ({0,1})

/[0-9]{3}[-.* ][0-9]{4}[-.* ][0-9]{4}/gm
/[0-9]{2,3}[-.* ]?[0-9]{3,5}[-.* ]?[0-9]{4}/gm
/[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]+/gm
*/

//* 프로그래머스 문제 (1)
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120826

function solution(my_string, letter) {
  return my_string.aplit(letter).join('');
}

'BCBdbe'.split("B")
'BCBdbe'.split("B").join(""); 

// 오답 : 1개만 바꾼다
function solution(my_string, letter) {
  return my_string.replace(letter, '');
}
'BCBdbe'.replace("B", "");

// 오답 : 정규표현식 패턴은 문자열로 만드는 것이라 별도로 생성을 해주어야 한다.

function solution(my_string, letter) {
  return my_string.replace(`/${letter}/g`, '');
}

"BCBdbe".reaplce("B", "")
let letter = "B";
"BCBdbe".replace(`/${letter}/g`, "");

//! 정답
function solution(my_string, letter) {
  // new RegExp(패턴으로 사용할 문자열, 플래그)
  // replace 에서만 사용되는 것이 아니라 정규표현식이 들어가는 곳 모두에서 사용가능 
  let reg = new RegExp(letter, 'g')
  return my_string.replace(reg, '');
}


//* 프로그래머스 문제 (2)
// 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120851

const my_string = "aAb1B2cC34oOp";

//* 유형 (1) : 숫자를 찾는다
function solution(my_string) {
    const answer = my_string
        .match(/[0-9]/g)
        .map((el) => parseInt(el))
        .reduce((a, b) => a + b, 0);
    return answer;
}

// parseInt를 reduce에 적용하기, reduce도 순회하기 때문에
function solution(my_string) {
    return my_string
        .match(/[0-9]/g)
        .reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

//* 유형 (2) : 문자를 제거한다! 

function solution(my_string) {
  return my_string
    .replace(/[^0-9]/g, "")
    .split('')
    .reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

//* 프로그래머스 문제 (3)
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120891

// 내 풀이
function solution(order) {
    return order.toString().replace(/[^369]/g,'').length;
}

// 오답
function solution(order) {
  // 런타임 에러가 뜸
  return order.toString().match(/[369]/g).length;
}

//TODO 수정
function solution(order) {
  // 비어있는 케이스 때문
  // nullish 연산자를 사용하기 
  return (order.toString().match(/[369]/g) ?? []).length;
} 

//* 프로그래머스 문제 (4)
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120913
// 정규표현식을 쓰면 더 간단해진다.

// 오답
function solution(my_str, n) {
  // 마지막 남아있는 값도 리턴이 되어야한다.
  let reg = new RegExp(`.{${n}}`, 'g')
  return my_str.match(reg);
}

// 정답
function solution(my_str, n) {
  let reg = new RegExp(`.{1,${n}}`, 'g')
  return my_str.match(reg);
}

function solution(my_str, n) {
  // "\"를 표현하기 위해서 "\\"를 사용
  let reg = new RegExp(`\\w{1,${n}}`, 'g')
  return my_str.match(reg);
}

//* 프로그래머스 문제 (5)
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/120864
// 2번문제 업그레이드 
const my_string = "aAb1B2cC34oOp";
function solution(my_string) {
  // 비어있는 값 때문에 nullish 연산자를 사용
  return (my_string
    .match(/\d+/g) ?? [])
    .reduce((a, b) => parseInt(a) + parseInt(b), 0);
}


//* ====== 그룹 연습문제 ======
//* 그룹 (1)
'gogaooogogooo'.match(/(go)/g); // ['go', 'go', 'go']
'gogaooogogooo'.match(/[go]/g); // ['g', 'o', 'g', 'o', 'o', 'o', 'g', 'o', 'g', 'o', 'o', 'o']

// 숫자 2자리와 알파벳 하나씩이 매칭되도록 다음의 패턴에서 문자열을 추출하시오.
// (1)
"87a99b00fww89e".match(/[0-9][0-9][a-zA-Z]/g);
// (2)
"87a99b00fww89e".match(/[0-9]{2}[a-zA-Z]/g);
// (3)숫자 그룹과 문자그룹으로 나누기
"87a99b00fww89e".match(/(\d{2})([a-zA-Z])/g);

//* 그룹 (2)
// 링크 : https://jsalgo.co.kr/

// 오답
// ['r1', 'e3', 'v2', 'v1', 'v9']
// 뒤에 숫자가 10이 있을 경우에는 오답이 된다.
'a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g);

// 오답
// ['r1', 'e33', 'v2', 'v11', 'v9']
// e가 33이 뽑히므로 오답
'a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev]\d+/g);

// v가 11이 뽑히므로 오답
'a10b9r1ce33uab8wc918v2cv11v9'.match(/[rev][1]?[0-9]/g);

// 정답 배열까지는
'a10b9r1ce33uab8wc918v2cv11v9'.match(/([rev])(10|[0-9])/g);

// 정답 배열까지는 
function solution(data) {
return data.match(/([rev])(10|[0-9])/g)
}

// 앞의 문자를 빼고 더해주어야하기에 reduce
function solution(data) {
  return data.match(/([rev])(10|[0-9])/g).reduce((a, b) => a + parseInt(b.slice(1)), 0);
}

//* 드디어 정답!
function solution(data) {
let result = data.match(/([rev])(10|[0-9])/g).reduce((a, b) => a + parseInt(b.slice(1)), 0).toString();

  return `${result[0]}월 ${result[1]}일`;
  // 1월 6일
}

//? reduce 보강설명
array1.reduce(
  (acc, cur) => acc + cur, init
)

// 앞의 a를 잘라내야할 경우
["a10", "a20", "a30"].reduce(
  (acc, cur) => acc + cur, 0
)

// 앞의 a를 자르기위해 slice(1)을 하고 문자열이기에 숫자로 변경함 
["a10", "a20", "a30"].reduce(
  (acc, cur) => acc + parseInt(cur.slice(1)), 0
)

// 조금 더 쉽게
// 하지만 두번 순회하기에 효율성에서 떨어진다.
["a10", "a20", "a30"]
  .map(v => parseInt(v.slice(1)))
  .reduce((a, b) => a + b, 0);

//? 보강설명
const string = `hojun, lee
gildong, hong
hojung, choi
junho, lee`

// /hojun, lee/gm 첫번째 그룹 
// replace를 $2번그룹이 먼저, 다음 $1
let result1 = string.replace(/(\w+), (\w+)/gm, "$2 $1");
console.log(result1);
let result2 = string.replace(/(\w+), (\w+)/gm, "$2 $1!!$1!!$1");
console.log(result2);
let result3 = string.replace(/(\w+), (\w+)/gm, "$2_$1");
console.log(result3);
let result4 = string.replace(/(\w+), (\w+)/gm, "$1님 안녕하세요");
console.log(result4);