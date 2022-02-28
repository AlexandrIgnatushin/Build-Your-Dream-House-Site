let menuIcon = document.querySelector('.menu-icon'),
    wrapperMenu = document.querySelector('.header__elems-wrapper'),
    reviewsSlider = document.querySelectorAll('.reviews__slider-item'),
    reviewsRightBtn = document.querySelector('.reviews__btn-right'),
    reviewsLeftBtn = document.querySelector('.reviews__btn-left'),
    portfolioBtnPrev = document.querySelector('.portfolio__btn-left'),
    portfolioBtnNext = document.querySelector('.portfolio__btn-right');

let index = 0;

menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('active');
    wrapperMenu.classList.toggle('active');
    document.body.classList.toggle('lock');
});

function removeAndAddActive(n) {

    for (e of reviewsSlider) {
        e.classList.remove('reviews__slider-item_active');
    }

    reviewsSlider[n].classList.add('reviews__slider-item_active');
}

function nextSlide() {

    if (index == reviewsSlider.length - 1) {
        index = 0;
        removeAndAddActive(index);
    } else {
        index++;
        removeAndAddActive(index);
    }
}

function prevSlide() {

    if (index == 0) {
        index = reviewsSlider.length - 1;
        removeAndAddActive(index);
    } else {
        index--;
        removeAndAddActive(index);
    }
}

reviewsRightBtn.addEventListener('click', nextSlide);
reviewsLeftBtn.addEventListener('click', prevSlide);


new Swiper('.portfolio__slider', {
    navigation: {
        nextEl: portfolioBtnPrev,
        prevEl: portfolioBtnNext,
    },
    spaceBetween: 40,
    loop: true,
    slidesPerView: '3',
    watchOverflow: true,
    centeredSlides: true,

    breakpoints: {

        320: {
            slidesPerView: '1.5',
        },

        576: {
            slidesPerView: '2',
        },

        768: {
            slidesPerView: '3',
        },

        992: {
            slidesPerView: '3',
        }
    }
});