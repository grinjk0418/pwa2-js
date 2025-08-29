// 일정 시간이 지난 후 작업 실행하는 함수
// setTimeout대표적 비동기 방법, 실행 끝날때까지 안기다려주고 다음줄 실행
// const timeoutNum1 = setTimeout(() => {  
//   console.log('2초');
// }, 2000);
// setTimeout(() => {  
//   console.log('1초');
// }, 1000);
// setTimeout(() => {  
//   console.log('3초');
// }, 3000);
// console.log('콘솔');

// setTimeout 취소
// clearTimeout(timeoutNum1); //비동기긴 하다.. 어쨋든 웹 api에서 실행하니깐..

// 일정 시간마다 반복해서 실행 함수
const intervalId1 = setInterval(() => {
  console.log('인터벌 3초');
}, 3000);
const intervalId2 = setInterval(() => {
  console.log('인터벌 2초');
}, 2000);

// setInterval() 제거
setTimeout(() => { //원하는 시간에 인터벌 제거하려면 셋타임아웃을 써
  clearTimeout(intervalId1);
}, 6000);
