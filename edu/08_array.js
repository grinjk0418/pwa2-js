// Object : 여러개의 키-값 쌍으로 이루어진 복합 데이터 타입(객체)
// 키들의 집합을 프로퍼티(id ~ age 부분)라고 부르고, 오브젝트 안에 함수는 메소드라고 부른다.
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

// ---------------------------------
// Array 객체
// 하나의 변수에 여러개의 값을 순차적으로 저장할 수 있는 데이터 구조
// 여러 종류의 데이터 타입을 저장 가능 (다른 언어에서는 보통 같은 타입만 됨)
// 배열의 길이는 동적으로 변화 (다른 언어에서는 보통 배열 길이 고정됨)
// 각 요소는 0부터 시작하는 인덱스를 가진다.
const arr1 = [1, 2, '홍길동', obj1, 5]; //보통은 데이터 타입은 하나만으로 적는다.헷갈려서..개발관리를 위해서..

console.log(arr1[3]); //배열 인덱스 순서는 0부터 시작

const arr2 = [
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9],
];

// 중괄호 {} 부분 뒤에만 세미콜론 (;) 안써도 된다. 

// 다차원 배열 호출방법
console.log(arr2[2][2]);

// 배열 복사
// 밑에처럼 하면 원본도 바끼니까 spread Operator 써..
// const arr3 = arr2;
// arr3[0] = [10, 20, 30];
// console.log(arr2);

// spread Operator
const arr3 = [...arr2];
arr3[0] = [10, 20, 30];
console.log(arr2);

// 배열이면 대괄호 []로 묶고 객체면 {} 중괄호로 묶어..
const obj3 = {...obj1};

// length : 배열의 길이 반환
console.log(arr1.length);

// Array.isArray(arg) : 배열 여부를 체크
console.log(Array.isArray(arr1));
console.log(Array.isArray(1));

// indexOf(searchElement) : 배열에서 특정 요소를 검색해서 인덱스를 반환 
const arr4 = [1, 2, '홍길동', 4, 5];
console.log(arr4.indexOf('홍길동')); // 해당 요소의 인덱스 반환
console.log(arr4.indexOf('갑순이')); // 없으면 -1 반환 (값의 존재 여부를 알고싶을때)

// includes(searchElement) : 특정 요소의 존재여부 확인, boolean 반환
console.log(arr4.includes('홍길동')); // true 반환
console.log(arr4.includes('갑순이')); // false 반환
//값의 존재 여부 알고 싶을때 요새는 indexOf 보다는 불리언으로 반환하는 includes 방법 쓴다.(이프문 간단하게 쓰기 위해서..)

// push(...args) : 원본 배열에 마지막 요소를 추가하고, 바뀐 length 반환
// ...의 의미는 아규먼트의 갯수가 몇개여도 상관없다. 
const resultLength = arr4.push(100);
console.log(resultLength, arr4);

// concat(...args) : 배열의 마지막 요소를 추가한 새로운 배열을 반환
const arr5 = [1, 2, 3];
const resultConcat = arr5.concat(4);
console.log(arr5, resultConcat);

// pop() : 배열의 마지막 요소를 제거하고, 제거한 요소를 반환
const arr6 = [1, 2, 3];
const resultPop = arr6.pop();
// arr6.pop(); //반환값 필요없으면 이렇게 써도 된다.
console.log(arr6, resultPop);
arr6.pop();

// unshift(...args) : 원본 배열의 첫번째 요소를 추가, 변경된 length를 반환
const arr7 = [1, 2];
const resultUnshift = arr7.unshift(2, 3, 4); //배열 앞에다 추가하고 만들어진 랭쓰 반환
console.log(arr7, resultUnshift);

// shift() : 원본 배열의 첫번째 요소를 제거하고, 제거된 요소를 반환
const resultshift = arr7.shift();
console.log(arr7, resultshift);

// splice(start, count, ...args) : 원본에서 특정 요소를 자른다. 스타트는 무조건 지정해야되고 카운트랑 ...아규는 생략 가능
const arr8 = [1, 2, 3, 4, 5, 6];
// start만 지정 했을 때 
// start가 양수일 경우, 인덱스가 start인 요소부터 모두 제거하고 잘린 요소를 배열로 반환
const resultSpliceStartPositive = arr8.splice(3);
console.log(arr8, resultSpliceStartPositive);
// start가 음수일 경우, 배열의 끝 요소부터 start만큼의 요소를 제거하고 잘린 요소를 배열로 반환
const arr9 = [1, 2, 3, 4, 5];
const resultSpliceStartNegative = arr9.splice(-3);
console.log(arr9, resultSpliceStartNegative);
// start와 count만 지정할 경우
const arr10 = [1, 2, 3, 4, 5];
const resultSpliceCount = arr10.splice(2, 1);
console.log(arr10, resultSpliceCount);
// start, count, ...args 모두 전달할 경우
const arr11 = [1, 2, 3, 4, 5];
const resultSpliceArgs = arr11.splice(1, 1, 100);
console.log(arr11, resultSpliceArgs);

// join(separator) : 배열의 요소를 구분자로 연결한 문자열을 만들어서 반환
const arr12 = [1, 2, 3, 4, 5];
const resultJoin = arr12.join(':');
console.log(resultJoin, arr12);

console.log(typeof(resultJoin)); //타입 뭔지 보기..

// sort(callback) : 원본 배열의 요소를 문자열로 변환 후 오름차순 정렬을 해서 만든 배열을 반환
// (a - b)가 양수일 경우, a가 큰수, b가 작은수로 인식하여 정렬
// (a - b)가 음수일 경우, a가 작은수, b가 큰수로 인식하여 정렬
// (a - b)가 0일 경우, 같은 값으로 인식하여 정렬하지 않음
const arr13 = [5, 23, 24576, 56426, 26, 9];
const resultSort = arr13.sort((a, b)=> a - b);
console.log(resultSort, arr13);

// map(callback) : 배열의 모든요소에 대해 콜백함수를 반복하여 실행한 후, 새로운 배열을 반환 
const arr14 = [1, 2, 3, 4, 5];
// const resultMap = arr14.map(val => val *= 2);

const resultMap = arr14.map(val => {
  if(val % 3 === 0) {
    return '짝'
  } else {
    return val;
  }
});

// map 이용안할시..
// for(let i = 0; i < arr14.length; i++) {
//   arr14[i] *= 2;
// }
console.log(arr14, resultMap);

// 2의 배수만 '이'라고 출력해주세요.

// 내가한거
// const arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const resultMap2 = arr15.map(val => {
//   if(val % 2 === 0) {
//     return '이'
//   } else {
//     return val;
//   }
// });
// console.log(resultMap2);

// 선생님꺼
const arr15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultMapOdd = arr15.map(val => {
  if(val % 2 === 0) {
    return '이';
  } else {
    return val
  }
});
console.log(resultMapOdd);

// sume(cb) : 배열의 모든 요소에 대해서 콜백함수를 반복 실행 후,
//  조건에 만족하는 결과가 하나라도 있으면 true, 없으면 false
const arr16 = [1, 2, 3, 4, 5];
const resultSome = arr16.some(val => val === 10);

// const resultSome = arr16.some(val => {
//   if(val ===10) {
//     return true;
//   } else {
//     return false;
//   }
// });

// every(cb) : 배열의 모든 요소에 대해서 콜백함수를 반복 실행 후,
//    모든 요소가 조건에 만족하면 true, 아니면 false
const arr17 = [1, 2, 3, 4, 5];
const resultEvery = arr17.every(val => val % 1 === 0);
console.log(resultEvery);

// filter(cb) : 배열의 모든 요소에 대해서 콜백함수를 반복 실행 후,
//    조건에 맞는 요소만 모아서 새로운 배열로 반환
const arr18 = [1, 2, 3, 4, 5];
const resultFilter = arr18.filter(val => val % 2 !== 0);
console.log(resultFilter);

// forEach(cb) : 배열의 모든 요소에 대해 콜백함수를 반복 실행(반환X)
const arr19 = [1, 2, 3, 4, 5];
arr19.forEach((val, key) => console.log(`${key} : ${val}`));

// 주로 맵이랑 필터 메소드 많이 쓴다.

// Destructuring 문법 (이런것도 있다. 안써도 된다.)
const arr20 = [1, 2];
const num1 = arr20[0];
const num2 = arr20[1];

const [num3, num4] = arr20;
console.log(num3, num4);