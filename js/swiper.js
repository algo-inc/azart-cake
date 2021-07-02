new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },

    centeredSlides: true,
    initialSlide: 1,
});

var Swiper2 =  new Swiper ('.swiper2', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    slidesPerView: 3,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
});

var Swiper3 =  new Swiper ('.swiper3', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 'auto',
    initialSlide: 1,
    loop: true,

});

var Swiper4 =  new Swiper ('.swiper4', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    slidesPerView: 3,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
});
