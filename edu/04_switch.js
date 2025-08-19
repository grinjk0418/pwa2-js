// switch 문
let food = '돈까스';
let foodkinds = '';

//스위치문 썼을때
switch(food) {
  case '돈까스':
    foodkinds = '경양식';
    break;
  case '김치찌개':
    foodkinds = '한식';
    break;
  case '초밥':
    foodkinds = '일식';
    break;
  default:
    foodkinds = '기타';
    break;
}

console.log(foodkinds);

//이프문 썼을때
// if(food === '돈까스') {
//   foodkinds = '경양식';
// } else if(food ==='김치찌개') {
//   foodkinds = '한식';
// } else if(food ==='초밥') {
//   foodkinds = '일식';
// } else {
//   foodkinds = '기타';
// }