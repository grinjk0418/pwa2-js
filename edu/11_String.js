// String 객체
let str = `문자"'\`열입니다.`; // 백슬래쉬 \로 `'"를 기호가 아닌 문자로 바꿀수 있다.

// length : 문자열의 길이를 반환
console.log(str.length); //랭쓰라는 객체가 있으면 이터러블 하다? iterable 객체

// charAt(idx) : idx의 요소의 값을 반환
console.log(str.charAt(3));

// indexOf(searchStr, idx) : 해당 문자열에서 serachStr을 찾아 최초의 인덱스를 반환
//  찾지 못하면 -1 반환
//    idx는 생략 가능, start 지점 지정
str = '문자열입니다. 문자열입니다.';
console.log(str.indexOf('열'));
console.log(str.indexOf('열', 3));
console.log(str.indexOf('입니다'));
console.log(str.indexOf('숫자'));
console.log(str.includes('숫자')); // 존재여부 체크할때는 includes 이용 가독성 향상

// replace(pattern, replacement) : pattern을 찾아서 첫번째 문자열을 replacement 치환한 문자열을 반환
str = '문자열입니다. 문자열입니다.';
console.log(str.replace('문자열', '')); //다른 문자로 치환하지 않고 특정 문자 지우고 싶을때는 공백

// replaceAll(pattern, replacement) : pattern을 찾아서 모든 문자열을 replacement 치환한 문자열을 반환
console.log(str.replaceAll('문자열', ''));

// substring(startIdx, endIdx) : startIdx부터 endIdx까지 자른 문자열을 반환
str = '문자열입니다. 문자열입니다.';
console.log(str.substring(2, 5));

// split(separator, limit) : 문자열에서 separator 기준으로 각 문자열을 잘라 배열 요소로 담은 배열을 반환
// limit로 배열의 길이를 조절하며, 생략 가능 (잘안쓴다)
str = '탕수육,짜장면,짬뽕,크림새우';
let arr = str.split(',');

// trim() : 문자열의 시작과 끝에 있는 공백을 제거한 문자열을 반환
str = '     하  하  ';
console.log(str.trim()); //파라미터 적으면 적은 단어 사라지는데 이것보단 리플레이스 쓴다(더 명확함)(트림은 보통 빈 파라미터 쓴다)

// toUpperCase(), toLowerCase() : 영어 대/소문자로 변환해서 반환
str = 'AfdvWdeSDa';
console.log(str.toUpperCase());
console.log(str.toLowerCase());