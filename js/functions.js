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

function incrementCount(button) {
    const parent = button.parentElement;
    const superParent = parent.parentElement;
    const price = superParent.getElementsByClassName('product-price')[0];
    const oneProductPrice = parseInt(price.attributes.getNamedItem('data-price').value);
    const input = parent.getElementsByTagName('input')[0];
    const count = parseInt(input.value) + 1;
    input.value = count;
    price.innerHTML = count * oneProductPrice + ' р.';
}

function decrementCount(button) {
    const parent = button.parentElement;
    const superParent = parent.parentElement;
    const price = superParent.getElementsByClassName('product-price')[0];
    const input = parent.getElementsByTagName('input')[0];
    const oneProductPrice = parseInt(price.attributes.getNamedItem('data-price').value);
    const count = parseInt(input.value) <= 1 ? 1 : parseInt(input.value) - 1;
    input.value = count;
    price.innerHTML = count * oneProductPrice + ' р.';
}


function changeDropOutNavToListNavInMobileDevices() {
    var nav = $('#main-nav');
    var width = $(window).width();
    nav.removeClass('list-nav');
    nav.removeClass('drop-out-nav');
    if (width <= 1024) {
        nav.addClass('list-nav')
    } else {
        nav.addClass('drop-out-nav');
    }
}

$(document).on('click', '.list-nav > .item.has-sub-items', function (e) {
    if (e.target.tagName !== 'A') {
        $(this).toggleClass('active');
    }
});

$(document).ready(function () {
    changeDropOutNavToListNavInMobileDevices();
    $(window).resize(function () {
        changeDropOutNavToListNavInMobileDevices();
    });
});