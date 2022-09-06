const btn = document.querySelector('#menu-btn');

function openMenu() {
  document.querySelector('.menu-overlay').style.display = 'block';
}

btn.addEventListener('click', openMenu);

const closeBtn = document.querySelector('.x-btn');

function closeMenu() {
  document.querySelector('.menu-overlay').style.display = 'none';
}

closeBtn.addEventListener('click', closeMenu);

const closeBtn2 = document.querySelector('.mobile-menu');

closeBtn2.addEventListener('click', closeMenu);