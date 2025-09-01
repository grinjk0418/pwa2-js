let divVal = 0;
try {
  // 내가 처리하고 싶은 로직을 작성하는 영역
  console.log('트라이 시작');
  if(divVal < 1) {
    // 강제 예외 발생
    throw new Error('유저 입력값이 0임');  // 쓰로우는 가장 처음만나는 캐치문으로 들어감
  }
  10 / divVal;
  // const t = 1;  //타입에러 발생시키기
  // t = 2;        //타입에러 발생시키기
  asdkj.dfasdf; //참조에러 발생 시키기
  console.log('트라이 끝');
} catch(err) {
  // try문에서 에러가 발생했을 때, 처리할 로직을 작성하는 영역
  // console.log('예외 발생', err.message);
  console.log('예외 발생', err instanceof TypeError); // 이 에러객체 인스턴스가 타입에러가 맞는지 체크해서 트루,펄스 반환
  if(err instanceof TypeError) {
    console.log('타입에러 발생');
  } else if(err instanceof ReferenceError) {
    console.log('참조에러 발생');
  }
} finally {
  // 정상, 에러 여부 상관없이 무조건 실행되는 로직을 작성하는 영역
  console.log('파이널리 실행');
}
console.log('에러발생해도 이것도 이어서 실행됨');