function lpad(origin, length, fillStr) {
  if (typeof origin === 'number') {
    origin = origin.toString();
  }
  return origin.padStart(length, fillStr);
}

const nowTime = document.querySelector('.nowTime');
const stopBtn = document.querySelector('.stopBtn');
const reStartBtn = document.querySelector('.reStartBtn');

let timerId = null;

function updateTime() {
  const now = new Date();
  const nowHours = now.getHours();
  const nowMinutes = now.getMinutes();
  const nowSeconds = now.getSeconds();
  const ampm = nowHours < 12 ? '오전' : '오후';
  const displayHour = nowHours % 12 === 0 ? 12 : nowHours % 12;

  const nowFormat = `${lpad(displayHour, 2, '0')}:${lpad(nowMinutes, 2, '0')}:${lpad(nowSeconds, 2, '0')}`;
  nowTime.innerHTML = `현재 시각 ${ampm} ${nowFormat}`;
}

// 시계 시작 함수
function startClock() {
  updateTime(); // 즉시 표시
  timerId = setInterval(updateTime, 1000); // 1초마다 업데이트
}

// 시계 정지 함수
function stopClock() {
  clearInterval(timerId);
}

// 버튼에 이벤트 연결
stopBtn.addEventListener('click', stopClock);
reStartBtn.addEventListener('click', () => {
  stopClock();
  startClock();
});

// 시작 시 자동 실행
startClock();