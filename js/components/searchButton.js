const formContainer = document.querySelector('.header__mobile-search-form');
const headerSearchButton = document.querySelector('.header__mobile-search-btn');


function mobileFormHandler() {
    formContainer.classList.toggle('active');
}


headerSearchButton.addEventListener('click', mobileFormHandler);