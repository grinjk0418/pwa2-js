// const user = {
//   name: 'Hong',
//   age: 20,
//   friends: {
//     id: 90
//   }
// };

// 얕은복사(shallowCopy) : 최사위 계층의 요소만 독립적으로 복사, 
//      그 외 계층은 참조형태로 복사
// const shallowCopy = {...user};
// shallowCopy.age = 200;
// shallowCopy.friends.id = 100;
// shallowCopy.friends = {test: 'ttt'};

// console.log(user, shallowCopy);

// 딮카피 : 모든 계층의 요소를 독립적으로 복사
// 일단 제이슨 형태로 바꾼다 JSON.stringify(user)
// const  jsonCopy = JSON.parse(JSON.stringify(user));
// jsonCopy.friends.id = 200;

// console.log(user);
// 하지만 제이슨은 객체 안에 함수나 심볼,언디파인드는 복사 안된다

// structuredClone()는 Node.js 17+ 또는 브라우저 최신 환경에서만 쓸수있다
// const cloneCopy = structuredClone(user);
// cloneCopy.friends.id = 200;

// console.log(user);

// // -------------------------------
// // Destructuring 문법
// // -------------------------------
// const arr = ['hong', 20];

// const [name1, age1] = arr;
// const [name2] = arr;
// const [, age2] = arr;

// console.log(age2);


const user2 = {
  name: 'Hong',
  age: 20,
  friends: {
    id: 90
  }
};

// 객체 디스트럭션 문법은 키명 무조건 일치시켜서 적어야됨,순서는 상관없음
const {name, age, friends} = user2

console.log(name, friends);

user2.age;
user2.name;
user2.friends;