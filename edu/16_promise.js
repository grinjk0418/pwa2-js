// Callback Hell
// setTimeout(() => {
//   console.log('A');

//   setTimeout(() => {
//     console.log('B');

//     setTimeout(() => {
//       console.log('C');
//     }, 1000);
//   }, 2000);
// }, 3000);

// Promise 객체
// 비동기 처리의 결과를 제공하겠다는 약속을 반환
// 단, 비동기 처리가 끝날 때 까지 결과를 기다리는 것은 아니다.
function pro1(str, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(str === 'A' || str === 'B' || str === 'C') {
        console.log(str);
        resolve(); //return resolve(); 이게 풀문장, 리턴은 생략가능, 리졸브 안에 리턴처리 있다.
      } else {
        reject();
      }
    }, ms);
  });
}

// pro1('A', 3000).then().catch().finally(); //체이닝 기법
// 캐치() : 리젝트 반환해서 에러 발생해도 후속처리를 해서 시스템 멈추기 않게 하기

// pro1('A', 300)
// .then(() => {            //()성공했을때 파라메터 적는곳
//   console.log('THEN');
// }) // 작업이 성공했을때(리졸브 반환했을때), then() 실행
// .catch(() => {
//   console.log('Catch');  //()실패했을때 파라메터 적는곳
// }) // 작업이 실패 했을때(리젝트 반환했을때) cathch() 실행
// .finally(() => {
//   console.log('Finally');
// }); // 성공 실패 여부 상관 없이 무조건 실행, (파이널리는 무조건 마지막에 작성)


// pro1('A', 3000)
// .then(() => {
//   pro1('B', 2000)
//   .then(() => {
//     pro1('C', 1000)
//     .then()
//     .catch();
//   })
//   .catch();
// })
// .catch();

// 위에꺼랑 결과 같은거. 이렇게도 쓸수있다.
pro1('A', 3000)
.then(() => {
  return pro1('B', 2000);
})
.then(() => {
  return pro1('C', 1000);
})
.catch();

// 이게너무 기니까 가독성 떨어져서 보완한게 async