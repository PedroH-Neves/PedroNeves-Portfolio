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
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: "./assets/Projects/Img\ Placeholder\ 2.svg",
    technologies: ["rust", "elixir", "lua"],
    linkToLiveVersion: "https://pedroh-neves.github.io/PedroNeves.github.io/",
    linkToSource: "https://github.com/PedroH-Neves/PedroNeves.github.io",
  },

  {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: "./assets/Projects/Img\ Placeholder\ 2.svg",
    technologies: ["rust", "elixir", "lua"],
    linkToLiveVersion: "https://pedroh-neves.github.io/PedroNeves.github.io/",
    linkToSource: "https://github.com/PedroH-Neves/PedroNeves.github.io",
  },

  {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: "./assets/Projects/Img\ Placeholder\ 2.svg",
    technologies: ["rust", "elixir", "lua"],
    linkToLiveVersion: "https://pedroh-neves.github.io/PedroNeves.github.io/",
    linkToSource: "https://github.com/PedroH-Neves/PedroNeves.github.io",
  },

  {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: "./assets/Projects/Img\ Placeholder\ 2.svg",
    technologies: ["rust", "elixir", "lua"],
    linkToLiveVersion: "https://pedroh-neves.github.io/PedroNeves.github.io/",
    linkToSource: "https://github.com/PedroH-Neves/PedroNeves.github.io",
  },

  {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: "./assets/Projects/Img\ Placeholder\ 2.svg",
    technologies: ["rust", "elixir", "lua"],
    linkToLiveVersion: "https://pedroh-neves.github.io/PedroNeves.github.io/",
    linkToSource: "https://github.com/PedroH-Neves/PedroNeves.github.io",
  },

  {
    name: "Profesional Art Printing Data",
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    featuredImage: "./assets/Projects/Img\ Placeholder\ 2.svg",
    technologies: ["rust", "elixir", "lua"],
    linkToLiveVersion: "https://pedroh-neves.github.io/PedroNeves.github.io/",
    linkToSource: "https://github.com/PedroH-Neves/PedroNeves.github.io",
  },

];

workArr.forEach(item => {
  console.log(item)
  sectionCards.innerHTML += ` 
  <div class="project-box-two project-box-two-hover">
          <h3 id="projectTwo" class="project-title-two">
            ${item.name}
          </h3>
          <p class="project-text-two">
            ${item.description}
          </p>
          <ul class="project-list-tags-two">
          ${item.technologies.map(tag => {
            return `<li class="project-list-item-two"><span class="tag">${tag}</span></li>`;
          }).join('')}
          </ul>
          <a href="#"
            class="project-link-two primary-color no-underscore button-hover button-pressed button-disabled">See
            Project</a>
        </div>
  `;
});