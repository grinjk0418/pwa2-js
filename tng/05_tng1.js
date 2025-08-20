// 아래처럼 별을 찍어주세요
// 예시)
//*****
//*****
//*****
//*****
//*****

//이중루프 써서 별다섯개 다섯줄 만들기
// 내가 한거
// let star = '*'
// let makedStar = '';

// for(let i = 1; i <= 6; i++) {
//   console.log(makedStar);
//   for(let i = 1; i <= 5; i++) {
//     makedStar += star;
//   }
// }


//선생님한거
// let star = '*';

// for(let i = 0; i < 5; i++) {
//   let makedStar = '';
//     for(let z = 0; z < 5; z++) {
//       makedStar += star;
//     }
//     console.log(`${makedStar}`);
// }





// 아래처럼 별을 찍어주세요.
// 예시)
// *
// **
// ***
// ****
// *****
// let star = '*';
// let makedStar = '';
// for(let i = 0; i < 5; i++) {
//   makedStar += star;
//   console.log(makedStar);
// }

// let makedStar ='';

// for(let lineCnt = 0; lineCnt <5; lineCnt++) {
//   makedStar += '*';
//   console.log(makedStar);
// }

// 이중포문 썼을때
// for(let lineCnt = 0; lineCnt < 5; lineCnt++) {
//   let makedStar= '';
//   for(let starCnt = 0; starCnt <= lineCnt; starCnt++) {
//     makedStar += '*';
//   }
//   console.log(makedStar);
// }





// 아래처럼 별을 찍어주세요.
// 예시)
//     *
//    **
//   ***
//  ****
// *****



//선생님한거
let makedStar = '';

for(let lineCnt = 5; lineCnt > 0; lineCnt--) {
  makedStar += '*';
  let makedSpace ='';
  for(let spaceCnt = 1; spaceCnt < lineCnt; spaceCnt++) {
    makedSpace += ' ';
  }
  console.log(makedSpace + makedStar);
}