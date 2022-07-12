const formContainer = document.querySelector('.header__mobile-search');
const searchButton = document.querySelector('.header__mobile-search-btn');
const headerSlider = document.querySelector('.header__slider');

searchButton.addEventListener('click', mobileFormHandler)

function mobileFormHandler() {
   formContainer.classList.toggle('shown');
}
