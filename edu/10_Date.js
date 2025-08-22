// Date 객체
// 로컬 타임존에 따른 유닉스 타임스탬프 기반으로 동작
// 로컬:우리가 접속한 컴퓨터의 OS기준

// Date 인스턴스
const now = new Date(); //아규먼트에 아무것도 안넣으면 기본적으로 현재 시간 저장, Date() 생성자 함수
const date1 = new Date('1990-02-23 14:30:00'); //특정날짜 지정할때
const date2 = new Date(1980, 10, 10, 23, 0, 1);
const date3 = new Date(date1 - date2);
const tt = new Date(234235345);

// getFullYear() :연도 획득
const nowYear = now.getFullYear();
console.log(nowYear);

// getMonth() : 월 획득, (**주의** 0~11로 반환, +1 해야됨..)
const nowMonth = now.getMonth() + 1;
console.log(nowMonth);

// getDate() : 일 획득
const nowDate = now.getDate();
console.log(nowDate);

// getHours() : 시를 반환
const nowHours = now.getHours();
console.log(nowHours);

// getMinutes() : 분을 반환
const nowMinutes = now.getMinutes();
console.log(nowMinutes);

// getSeconds() : 초를 반환
const nowSeconds = now.getSeconds();
console.log(nowSeconds);

// getmilliseconds() : 밀리초를 반환
const nowMilliseconds = now.getMilliseconds();
console.log(nowMilliseconds);

// getDay() : 요일을 반환(**주의** 0~6 반환, 0 = 일요일)
const nowDay = now.getDay();
console.log(nowDay);

// 요일 한글로 변환
let koreanDay = '';
switch(nowDay) {
  case 0:
    koreanDay = '일요일';
    break;
  case 1:
    koreanDay = '월요일';
    break;
  case 2:
    koreanDay = '화요일';
    break;
  case 3:
    koreanDay = '수요일';
    break;
  case 4:
    koreanDay = '목요일';
    break;
  case 5:
    koreanDay = '금요일';
    break;
  default:
    koreanDay = '토요일';
    break;
}

// xxxx년xx월xx일 xx:xx:xx 금요일
const nowFormat = `${nowYear}년${lpad(nowMonth, 2, '0')}월${lpad(nowDate, 2, '0')}일 ${lpad(nowHours, 2, '0')}:${lpad(nowMinutes, 2, '0')}:${lpad(nowSeconds, 2, '0')} ${koreanDay}`;
console.log(nowFormat);
console.log(typeof(nowYear), typeof(nowYear.toString()), typeof(String(nowYear))); //넘버를 스트링으로 바꾸는 방법(2가지임)
//padStart 는 앞쪽에 정해둔 문자 넣기, padEnd는 뒤쪽에 정해둔 문자 넣기

function lpad(origin, length, fillStr) {
  //origin의 타입 체크
  if(typeof(origin) === 'number') {
    origin = origin.toString();
  }
  return origin.padStart(length, fillStr);
}

// 두 날짜의 차를 구하는 방법
const tagerDate = new Date('2025-03-13 18:10:00');
const diff = Math.floor(Math.abs(tagerDate - now) / (1000 * 60 * 60 * 24)); //유닉스 타임스탬프 단위가 미리 세컨드라서 1000 곱함(1초로 바꾸기)
// 일단위 1000 * 60 * 60 * 24
console.log(diff);