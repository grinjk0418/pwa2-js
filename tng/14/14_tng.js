// 1. 글을 입력하는 란이 있음
// 2. 작성 버튼을 누르면 아래와 같이 동작
//    2-1. 글 입력란이 비워져 있다면 아무동작 안함
//    2-2. 글 입력란이 작성되어 있다면 해당 글을 기반으로 목록 추가
//      2-2-1. 작성 완료시 글 입력란을 비우기

// 서비스
// 1. 엔터로 작성 되게 하기
// 2. 아이템 클릭하면 완료, 다시 클릭하면 풀리기




const btn = document.querySelector('#btn');
const input = document.querySelector('#writeInput');
const writeBtn = document.querySelector('.writeBtn');
const inputDiv = document.querySelector('.inputDiv');




btn.addEventListener('click', clickAdd);

function clickAdd(){
  if(input.value) {
    const newContent = document.createElement('div');
    newContent.textContent = input.value;
    newContent.classList.add('inputWriteDiv');
    writeBtn.appendChild(newContent);
  }
}













