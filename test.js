const obj1 = {
  id: 1,
  name: '홍길동',
  gender: '남자',
  age: 20,
  fnc1: (a, b) => a + b,
}

const obj2 = {
  title: '홍길동이 쓴 글이다.',
  userInfo: obj1,
}
obj2.userInfo.name = '갑순이'; //이렇게하면 오브젝트안에 키값이 바뀐다.
console.log(obj2.userInfo.name);
// Optional chaining (ECMA 2022 추가)
// `?.`을 기준으로 앞의 평가대상이 undefined || null 이 아니면 처리를 계속 이어가고
// undefined || null 이면 false를 반환하고 멈춘다.
if(obj2.userInfo.rank) {  //키가 있나없나 확인할때 쓰는 이프문으로 썼었는데 요새는 옵셔널 체인징 방법 쓴다.
  obj2.userInfo.rank.test; //언디파인드(rank)에서 키값 부르면 에러남
}

obj2.userInfo.rank?.test; //옵셔널 체인징 (추가된방법)


// 오브젝트 접근방법
console.log(obj1.id);
console.log(obj1.name);
console.log(obj1.fnc1(1, 2));