const btnToggle = document.querySelector('.navbar__toggle');
const overlay = document.querySelector('.navbar__overlay');
const menuContainer = document.querySelector('.menu-container');

function openMenu() {
  btnToggle.classList.toggle('navbar__toggle_active');
  overlay.classList.toggle('navbar__overlay_active');
  menuContainer.classList.toggle('menu-container_active');
};

btnToggle.addEventListener('click', () => {
  openMenu();
});

overlay.addEventListener('click', (e) => {
  e.stopPropagation();
  openMenu();
});