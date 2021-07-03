new Swiper('.main-banner', {
    pagination: {
        el: '.swiper-pagination'
    },
    slidesPerView: 1,
    loop: true,
    initialSlide: 1,
});

function productImagesSlider() {
    const products = document.getElementsByClassName('product');
    for (let i = 0; i < products.length; i++) {
        const product = products.item(i);
        new Swiper(product.getElementsByClassName('product-images-slider')[0], {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination'
            },
            slidesPerView: 1,
            loop: true,
            initialSlide: 1,
        });
    }
}