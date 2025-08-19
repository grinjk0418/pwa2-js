// 산술연산자
let num1 = 5;
let num2 = 10;

console.log(num1 + num2); // 더하기
console.log(num1 - num2); // 빼기
console.log(num1 * num2); // 곱하기
console.log(num1 / num2); // 나누기
console.log(num1 % num2); // 나누기 한 나머지 값

// 문자열 연결 연산자
let firstName = '길동';
let lastName = '홍';
console.log(lastName + firstName);
// 산술연산+인지 문자연결+인지 헷갈리니까 문자연결은 아래 방법(객체) 주로 씀
console.log(lastName.concat(firstName));

// 산술대입연산자
let num3 = 0;
// num3 = num3 + num1;
num3 += num1;
console.log(num3);
num3 -= num1;
console.log(num3);
num3 *= num1;
console.log(num3);
num3 /= num1;
console.log(num3);
num3 %= num1;
console.log(num3);

// (전위|후위)증감 연산자 -- 1씩 빼기, ++ 1씩 더하기
let num4 = 0;
console.log(++num4);
console.log(num4++);
console.log(num4);

// 비교 연산자
let num5 = 1;
let num6 = 2;
console.log(num5 > num6);
console.log(num5 < num6);
console.log(num5 >= num6);
console.log(num5 <= num6);
// = 자바스크립트에서 대입연산자로 쓰니까 ==,===
// ==(데이터 타입 체크 X), ===(대이터 타입 체크 O)
//==불완전 비교, ===완전 비교. 주로 완전비교===를 써라.
// !=는 같지 않다(불완전비교), !==는 같지 않다(완전비교)
console.log(1 == '1'); //불완전비교
console.log(1 != '1'); //불완전비교
console.log(1 === '1'); //완전비교
console.log(1 !== '1'); //완전비교

// 논리 연산자
console.log((1 === 1) && (1===0)); //&&는 모두 트루일때만 트루 하나라도 펄스면 펄스 띄움
console.log((1 === 1) || (1===0)); //||는 하나라도 트루면 트루, 모두 펄스여야 펄스 띄움
console.log(!(1 === 1)); //not연산자 ! 쓰면 결과를 반대로 뒤집는다,트루면 펄스로.. 펄스면 트루로..

// 삼항연산자
// 조건식 ? 참일 경우 처리 : 거짓일 경우 처리
let rank = 3;
let result = rank <= 2 ? '통과' : '거부';
console.log(result);