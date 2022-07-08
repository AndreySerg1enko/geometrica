class Slider {
    constructor(selector, options) {
        this.container = document.querySelector(`.${selector}`);
        this.slides = this.container.children;
        this.activeSlide = 0;
        this.initSlider();
    }

    initSlider() {
        const styles = {
            display: 'flex',
            transition: '.3s',
            transform: 'translateX(0)'
        }

        Object.entries(styles).forEach(([key, value]) => {
            this.container.style[key] = value
        })
    }

    next() {

    }

    prev() {

    }
}

const slider1 = new Slider('slider__wrapper');