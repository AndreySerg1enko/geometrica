const burger = document.querySelector('.header__mobile-burger');
const mobileMenu = document.querySelector('.header__mobile-menu');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu)

function toggleMenu() {
    mobileMenu.classList.toggle('shown');
    overlay.classList.toggle('shown');
}