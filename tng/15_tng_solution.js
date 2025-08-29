nowTimeIntoElement('#nowTime');



let intervalNowTime = setInterval(() => {
  nowTimeIntoElement('#nowTime');
}, 1000);

// 멈춰 버튼 처리
const btnStop = document.querySelector('#btnStop');
btnStop.addEventListener('click', () => {
  clearInterval(intervalNowTime);
  intervalNowTime = null;
});

// 재시작 버튼 처리
const btnRestart = document.querySelector('#btnRestart');
btnRestart.addEventListener('click', () => {
  nowTimeIntoElement('#nowTime');

  if(intervalNowTime === null) {
    intervalNowTime = setInterval(() => {
      nowTimeIntoElement('#nowTime');
    }, 1000);
  }
});

// 기록 버튼
const btnReport = document.querySelector('#btnReport');
btnReport.addEventListener('click', () => {
  const container = document.querySelector('.reportConteiner');
  const newP = document.createElement('p');
  newP.textContent = generateNowTimeFormatUntilMilliseconds(); // 기록 버튼 누른시간
  // newP.textContent = document.querySelector('#nowTime').textContent; // 멈춰 버튼 누른 시간
  container.appendChild(newP);
});

// 기록 초기화
const btnReportReset = document.querySelector('#btnReportReset');
btnReportReset.addEventListener('click', () => {
  document.querySelector('.reportConteiner').textContent = '';
});


// --------------------이하 함수 --------------------

//js doc : 제이에스 도큐먼트 방법 (함수 바로위에 커서 두고 /** 치고 엔터)
/**
 * selector로 선택한 요소의 textContent에 현재시간 삽입
 * @param {string} selector 
 */
function nowTimeIntoElement(selector) {
  const element = document.querySelector(selector);
  element.textContent = generateNowTimeFormat();
}

/**
 * 현재시간을 `오전 hh:mm:SS` 형식으로 반환 (백틱으로 묶으면 마우스 호버로 함수 설명볼때 하이라이트로 들어간다)
 * @returns {string}
 */
function generateNowTimeFormat() {
  const now = new Date();

  // return now.toLocaleTimeString(); //밑에꺼 리턴까지 다지우고 이런방법도 있다.

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  
  let ampm = '';
  if(hours < 12) {
    ampm = '오전';
  } else {
    ampm = '오후';
    hours -= 12;
  }
  
  return `${ampm} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * 현재시간을 `오전 hh:mm:SS.sss` 형식으로 반환
 * @returns {string}
 */
function generateNowTimeFormatUntilMilliseconds() {  // 미리세컨즈 넣기
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let milliseconds = now.getMilliseconds();
  let ampm = '';
  if(hours < 12) {
    ampm = '오전';
  } else {
    ampm = '오후';
    hours -= 12;
  }
  
  return `${ampm} `
    + `${hours.toString().padStart(2, '0')}`
    + `:${minutes.toString().padStart(2, '0')}`
    + `:${seconds.toString().padStart(2, '0')}`
    + `.${milliseconds.toString().padStart(3, '0')}`;
}