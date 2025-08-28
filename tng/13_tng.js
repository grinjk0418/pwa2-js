// - 아래의 프로그램을 만들어 주세요.
//   - `사과 게임` 위에 `장기` 삽입
//   - `어메이징브릭`에 베이지 배경색 추가
//   - 리스트의 요소들의 글자색을 짝수는 빨강, 홀수는 파랑으로 수정

// 내가한거
// const Janggi = document.createElement('li');
// Janggi.textContent = '장기';
// const appleTarget = document.querySelector('#apple');
// const ulTarget = document.querySelector('#ul');
// ulTarget.insertBefore(Janggi, appleTarget);

// const tagLi = document.querySelectorAll('li');
// tagLi[9].style.backgroundColor = 'beige';

// for(let i = 0; i < tagLi.length; i++) {
//   if(i % 2 !== 0) {
//   tagLi[i].style.color = 'red';
//   } else {
//     tagLi[i].style.color = 'blue';
//   }
// }

////////////////////////선생님꺼///////////////////////////////
const targetApple = document.querySelector('#apple');
const newJanggi = document.createElement('li');
newJanggi.textContent = '장기';
const parentUl = document.querySelector('#ul');
parentUl.insertBefore(newJanggi, targetApple);

const amazingLi = document.querySelector('#ul li:last-child');
amazingLi.style.backgroundColor = 'beige';
changeLiColor()


addLiChild('ㅅㅅㅅㅅㅅ');
changeLiColor();

function changeLiColor(){
const listLi = document.querySelectorAll('#ul li');
listLi.forEach((node, idx) => {
  if(idx % 2 === 0) {
    node.style.color = 'blue';
  } else {
    node.style.color = 'red';
  }
});
}

function addLiChild(content) {
  const newNode = document.createElement('li');
  newNode.textContent = content;
  parentUl.insertBefore(newNode, targetApple);
}

const result = {
  title: '타이틀',
  content: '내용내용',
  img: 'https://www.admin.com/img/posts/laksfjakls.png'
};

addCard(result);
addCard(344);

function addCard(item) {
// 카드 구조 만들기
const newCard = document.createElement('div');
newCard.classList.add('card');

const newCardImg = document.createElement('div');
newCardImg.classList.add('card-img');

const newCardTitle = document.createElement('p');
newCardTitle.textContent = item.title;

const newCardContent = document.createElement('p');
newCardContent.textContent = item.content;

newCard.appendChild(newCardImg);
newCard.appendChild(newCardTitle);
newCard.appendChild(newCardContent);

document.body.appendChild(newCard);
}


