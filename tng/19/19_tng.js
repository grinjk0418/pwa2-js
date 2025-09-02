const apiCallBtn = document.querySelector('#apiCallBtn');

apiCallBtn.addEventListener('click', () => {
  const apiCallInput = document.querySelector('#apiCallInput');
  
  if(apiCallInput.value) {
    axios.get(apiCallInput.value)
    .then(response => {
      const container = document.querySelector('.container');
      container.textContent = '';

      response.data.forEach(item => {
        const newImg = document.createElement('img');
        newImg.setAttribute('src', item.download_url);
        // newImg.setAttribute('height', '300px');
        newImg.setAttribute('width', '100%');
        
        container.appendChild(newImg);
      });
    })
    .catch(err => {
      console.log(err);
    })
  }
})