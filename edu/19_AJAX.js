
const url = 'https://picsum.photos/v2/list?page=1&limit=10';

axios.get(url) //겟은 파라메타로 url 무조건 들어가야됨.. 포스트는 두번째 파라메터 있어야됨
.then(response => {
  // console.log(response.data.data);  // 첫번째 data는 엑시오 data 안에 서버에서 보내온 두번째 data를 저장
  // console.log(response);
  response.data.forEach((item) => {
    const newImg = document.createElement('img');
    newImg.setAttribute('src', item.download_url);
    newImg.setAttribute('width', '300px');

    const container = document.querySelector('.container');
    container.appendChild(newImg);
  });
})
.catch(err => {
  console.log(err);
});

//위에껀 프로미스 체이닝 방식이고, 에이싱크 방식도 가능