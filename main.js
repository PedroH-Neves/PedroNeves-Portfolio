const btn = document.querySelector('#menu-btn');

function openMenu() {
  document.querySelector('.menu-overlay').style.display = 'block';
}

btn.addEventListener('click', openMenu);