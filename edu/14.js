// 이벤트
function test() {
  alert('테스트');
}

// property Listener(프로퍼티 리스너) //잘안쓴다 //덮어쓰기 하나만됨
// 동일한 이벤트를 여러번 사용 불가
const btn2 = document.querySelector('#btn2');
btn2.onclick = test;
// btn2.onclick = () => {
//   alert('버튼222');
// }

// btn2.onclick = () => {
//   alert('22222222');
// }
btn2.onclick = test();


// addEventListener //현대에선 무조건 얘 쓴다//
// 여러개의 중복 이벤트 가능, 자바스크립트에서 한번에 관리가능
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert('버튼333');
});
btn3.addEventListener('click', btn3Alert);

// removeEventLitener() : 이벤트 제거
// btn3.removeEventListener('click', btn3Alert);

// function btn3Alert(event)->여기()에 파라메터 적어주고 콘솔띄우면 정보볼수있다
function btn3Alert(event) {
  console.log(event);
  alert('33333');
}

window.addEventListener('scroll', () => {
  console.log('scroll test');
});

window.addEventListener('load', () => {
  window.open('https://www.google.com');
});

// -----------------------------------------
const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keyup', (e) => {
  // console.log(e.target.value); //.value 생략하면 요소가 보임. value는 인풋에 입력한 값

  const regex = /^[0-9]+$/;

  const label = document.querySelector('#labelEmail');
  if (!regex.test(e.target.value)) {
    label.textContent = '숫자만 입력해주세요.';
  } else {
    label.textContent = '';
  }
});

// ----- 비밀번호 보이고 안보이고 -----
// 체크박스 접근
const chkPw = document.querySelector('#seePw');

// 체크박스에 체인지 이벤트 추가
chkPw.addEventListener('change', (e) => {
  // 인풋 패스워드 접근
  const pw = document.querySelector('#pw');

  // 체크 여부 확인 분기
  if(e.target.checked) {
    // 인풋 패스워드 type속성 text로 변경
    pw.setAttribute('type', 'text');
  } else {
    // 인풋 패스워드 type속성 password로 변경
    pw.setAttribute('type', 'password');
  }
});