const button = document.querySelector('.products__btn');
const modal = document.querySelector('.products__modal');

button.addEventListener('click', toggleModal);
overlay.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('active')
    overlay.classList.toggle('shown');
    let count = 0;

    const timerId = setInterval(() => {
        if (count === 50) {
            clearTimeout(timerId);
        } else {
            count += 1;
            modal.style.top = `${count}%`
        }
    }, 30);
}