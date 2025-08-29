function lpad(origin, length, fillStr) {
  if(typeof(origin) === 'number') {
    origin = origin.toString();
  }
  return origin.padStart(length, fillStr);
}

const nowTime = document.querySelector('.nowTime');
const stopBtn = document.querySelector('.stopBtn');
const reStartBtn = document.querySelector('.reStartBtn');

function updateTime() {
const now = new Date();
const nowHours = now.getHours();
const nowMinutes = now.getMinutes();
const nowSeconds = now.getSeconds();
const ampm = '';
if(nowHours < 12) {
  ampm = '오전';
} else {
  ampm = '오후';
}

const twelveHourClock = 0;
if(nowHours % 12 === 0) {
  twelveHourClock = 12;
} else {
  twelveHourClock = nowHours % 12;
}
const nowFormat = `${lpad(twelveHourClock, 2, '0')}:${lpad(nowMinutes, 2, '0')}:${lpad(nowSeconds, 2, '0')}`;
nowTime.innerHTML = `현재 시각  ${nowFormat}`;
}

updateTime();