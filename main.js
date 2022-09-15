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

const sectionCards = document.getElementById('portfolio');

const workArr = [
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    featuredImage: './assets/Projects/Img-Placeholder.svg',
    technologies: ['rust', 'elixir', 'c++', 'lua'],
    linkToLiveVersion: 'https://pedroh-neves.github.io/PedroNeves.github.io/',
    linkToSource: 'https://github.com/PedroH-Neves/PedroNeves.github.io',
    id: 'main',
  },

  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: './assets/Projects/Img-Placeholder-2.svg',
    technologies: ['rust', 'elixir', 'lua'],
    linkToLiveVersion: 'https://pedroh-neves.github.io/PedroNeves.github.io/',
    linkToSource: 'https://github.com/PedroH-Neves/PedroNeves.github.io',
    id: '0',
  },

  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: './assets/Projects/Img-Placeholder-2.svg',
    technologies: ['rust', 'elixir', 'lua'],
    linkToLiveVersion: 'https://pedroh-neves.github.io/PedroNeves.github.io/',
    linkToSource: 'https://github.com/PedroH-Neves/PedroNeves.github.io',
    id: '1',
  },

  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: './assets/Projects/Img-Placeholder-2.svg',
    technologies: ['rust', 'elixir', 'lua'],
    linkToLiveVersion: 'https://pedroh-neves.github.io/PedroNeves.github.io/',
    linkToSource: 'https://github.com/PedroH-Neves/PedroNeves.github.io',
    id: '2',
  },

  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: './assets/Projects/Img-Placeholder-2.svg',
    technologies: ['rust', 'elixir', 'lua'],
    linkToLiveVersion: 'https://pedroh-neves.github.io/PedroNeves.github.io/',
    linkToSource: 'https://github.com/PedroH-Neves/PedroNeves.github.io',
    id: '3',
  },

  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: './assets/Projects/Img-Placeholder-2.svg',
    technologies: ['rust', 'elixir', 'lua'],
    linkToLiveVersion: 'https://pedroh-neves.github.io/PedroNeves.github.io/',
    linkToSource: 'https://github.com/PedroH-Neves/PedroNeves.github.io',
    id: '4',
  },

  {
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: './assets/Projects/Img-Placeholder-2.svg',
    technologies: ['rust', 'elixir', 'lua'],
    linkToLiveVersion: 'https://pedroh-neves.github.io/PedroNeves.github.io/',
    linkToSource: 'https://github.com/PedroH-Neves/PedroNeves.github.io',
    id: '5',
  },

];

workArr.forEach((item) => {
  if (item.id === 'main') {
    return;
  }
  sectionCards.innerHTML += ` 
    <div class="project-box-two project-box-two-hover">
          <h3 id="projectTwo" class="project-title-two">
            ${item.name}
          </h3>
          <p class="project-text-two">
            ${item.description}
          </p>
          <ul class="project-list-tags-two">
          ${item.technologies.map((tag) => {
    return `<li class="project-list-item-two"><span class="tag">${tag}</span></li>`;
  }).join('')}
          </ul>
          <a id="${item.id}" href="#" onclick="openModal(this.id)"
            class="project-link-two primary-color no-underscore button-hover button-pressed button-disabled">See
            Project</a>
    </div>    
  `;
});

const popup = document.getElementById('popup');

const openModal = (id) => {
  const project = workArr.filter(item => item.id === id);
  popup.style.display = 'block';
  popup.innerHTML = `
  <div class="popup-project">
    <div class="desktop-popup">
    <div class="popup-title">${project[0].name}</div>
    <img onclick="modalClose()" src="./assets/Icons/Icon.svg" alt="" class="popupClose closePop">
    <div class="popup-tec">
      <ul class="popup-list">
      ${project[0].technologies.map((tags) => {
    return `<li class="popup-list-itens">${tags}</li>`;
  }).join('')}
      </ul>
    </div>
    <img class="popup-img" src=${project[0].featuredImage} alt="placeholder image">
    </div>
    <div class="desktop-popup-2">
    <div class="popup-desc">${project[0].description}</div>
    <div class="popup-links primary-color">
      <div class="popup-link-source"><a href="${project[0].linkToLiveVersion}" rel="noopener" target="_blank" class="primary-color no-underscore">See Live</a><img
          src="./assets/Icons/arrow-icon.svg" alt="" class="popup-img-2"></div>
      <div class="popup-link-source"><a href="${project[0].linkToSource}" rel="noopener" target="_blank" class="primary-color no-underscore">See Source</a><img
          src="./assets/Icons/Github-white.svg" alt="" class="popup-img-2"></div>
    </div>
    </div>
  </div>
  `;
};

const modalClose = () => {
  popup.style.display = 'none';
};