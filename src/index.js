const hamburgerBtn = document.getElementById('hamburger');
const navList = document.getElementById('nav-List');

function toggleButton(){

  navList.classList.toggle('show')
}

hamburgerBtn.addEventListener('click', toggleButton)