new Swiper('.main-banner', {
    pagination: {
        el: '.swiper-pagination'
    },
    slidesPerView: 1,
    loop: true,
    initialSlide: 1,
});

new Swiper('.reviews-slider', {
    navigation: {
        nextEl: '#reviews-next',
        prevEl: '#reviews-prev'
    },
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        100: {
            slidesPerView: 1,
            spaceBetween: 5,
        }

    }
});

new Swiper('.recipes-slider', {
    navigation: {
        nextEl: '#rec-next',
        prevEl: '#rec-prev'
    },
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        1024: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        100: {
            slidesPerView: 1,
            spaceBetween: 5,
        }

    }
});

new Swiper('.master-class-slider', {
    navigation: {
        nextEl: '#master-class-next',
        prevEl: '#master-class-prev'
    },
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    breakpoints: {

        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        100: {
            slidesPerView: 1,
            spaceBetween: 5,
        }

    }
});


