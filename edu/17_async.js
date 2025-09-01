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

// async/await 문법
// 프로미스 지옥을 개선하기 위해 나온 문법
// 내부적으로 Promise 객체를 사용하여 비동기 처리를 실행 (동기처럼 사용)
// await는 async가 붙어있는 함수에만 사용 가능
async function test() {
  await pro1('A', 1500);
  await pro1('B', 1000);
  await pro1('C', 500);
}

test();