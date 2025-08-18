// 변수 : 변하는 데이터를 저장하기 위한 공간
// var는 모든곳에서.., let은 특정한곳.. 되도록 var는 쓰지마..
// var var1 = '제육';
// let let1 = '햄버거';
// var var2; //변수 선언
// var2 = 0; //변수 초기화

// // 상수 : 최초에 대입한 값이 절대 변하지 않는 공간
// const const1 = '뚝불';
// // const1 = 'asd';

// // -------------------------------
// // var를 지양해야 하는 이유
// // -------------------------------
// // 1. var을 중복 선언이 가능하다.
// var name = '홍길동';
// var name = '갑돌이';

// // let name2 = '둘리';
// // let name2 = '도우너';
// // 2. 작성한 코드상, 선언보다 사용을 먼저 할경우,
// // 오류가 발생하지 않고, 접근 가능한 현상
// // console.log(age);
// // let age = 20;

// // 3. var는 기본적으로 함수 레벨 스코프
// // 스코프의 종류 : 전역 스코프, 지역 스코프는 function {}, 블록레벨 스코프는 {}만 쓴거
// var globalVar = 'globalVar';
// let globalLet = 'globalLet';
// const globalConst = 'globalConst';

// function test() {
//   var localVar = 'localVar'
//   let localLet = 'localLet'
//   const localConst = 'localConst';
//   console.log(globalVar);
//   console.log(globalLet);
//   console.log(globalConst);

//   console.log(localVar);
//   console.log(localLet);
//   console.log(localConst);
// }

// test();

// console.log(globalVar);
// console.log(globalLet);
// console.log(globalConst);

// console.log(localVar);
// console.log(localLet);
// console.log(localConst);


// var는 함수레벨 스코프, let과 const는 블럭레벨 스코프
if(true) {
  var blockVar = 'blockVar';
  let blockLet = 'blockLet;';
  const blockConst = 'blockConst';
}

console.log(blockVar);
// console.log(blockLet);
// console.log(blockConst);