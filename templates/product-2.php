<?php

$images = ['/img/product/product-img1.png',
    '/img/product/product-img2.png',
    '/img/product/product-img1.png'
];

shuffle($images);

?>
<a href="">
    <div class="like">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
             width="33"
             height="29" viewBox="0 0 33 29">
            <image id="Векторний_смарт-об_єкт_копія_31"
                   data-name="Векторний смарт-об’єкт копія 31"
                   width="33" height="29" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAdCAYAAAAkXAW5AAADNElEQVRIib2XW4hNYRTHf3MwfIo80JQiW58YlyiFFJJLgwc8YPJgmPBAUTwoeSPlgaJ4oYySey4PJJdMHox5GHlA1K5PCMUTZbvk0sp/szv2mXMO5qyXPd83a/3//73W/ta3Th05lsTRLGANMBMYAZjfW6ATOAWccT58Lo5M4qgeWA40A1OBwcB34ClwG2hzPrQXx9UVgQwDjgJzivw+Av0y6ydAi/OhMxNrpMeA0d3Emd20F3Q+PE83ChmQCUCXBLwDdgITgXrngwMagLUSYETtSRwtVqw927X/RH4NiqsXzk7hGn6X+H5nIomjIcB9YChwA1jpfHhTolR9gX3ABsBKsg3YI7JDwBbnw6cSscZzApgLvAQmGU8qwuq8ArgDzM6rdw7gQQlJ7ZDzYWMFcSb2FjAdOO18aK5L4qgReAR8sXQ6H0I5oExG7trbKIvTSmUgJzZS2foAYwv6ks1OVCrATIQLgHX2rFSAYoPKYtbcG5inxblKQTJgr4Ej1cZl+FqM3zIxSpudZYL+t6V8owpqKKgZ1dJSvsGFDGlxU+lp+8VnIl7o75E1FpHyvShkarOgxiJSvk4TcV6L1iSOetWCXTytWp4v6Ki8Ahp1ZGphLeIz3nMFtejtIt6rbtaTWTD8vVpuN/70dNgVfA0YBJxM4qh/Dwkw3JPiuSbe3/OEbji7ym2muAIsreQiq0KAXVwXgIWAzRKT05v6V5/QRpOaiDkeV+D/EnBcuIbflB0V/hjvNCFZqgYqI8ucDx/+QYCV4KwE2FAzPzuR5YpQ4GTgqlq6zRhLSg05ZQRYiS9qdkgz0FXslytCAOOUieGAXb0LnQ+PqxAwRvF2Gp4p/mGebyFvk5/fiAVMA+4JqENTeCUCzK9Dcfc08OQK6FaEhFgzmQFc0rG6nsTRqjIC7P/X5W9xM4RT0kqWowi4lxrMZm3tBnY4H75nfAxrV6bx7Qe2Oh++lsOvSESGyAbZA8rgGWC18yFJ4shG+zb98PkGbHI+HK
                    wUtyoREtIkAQN0A68HDgNTgPcmxPlwtRrMqkVIyHjgsk5OanYCFjkfHlSL1+2HWcpEZG9uH6DV3J5T/kYAwA8S0BtlGQveQwAAAABJRU5ErkJggg=="/>
        </svg>
    </div>
</a>
<div class="swiper-container product-images-slider">
    <div class="swiper-wrapper">
        <?php foreach ($images as $image): ?>
            <div class="swiper-slide">
                <img src="<?= $image ?>">
            </div>
        <?php endforeach; ?>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>
<h3>Капли шоколадные(глазурь)</h3>
<div class="input-group">
    <input type="button" value="+">
    <input class="text" type="text" step="1" name="quantity" value="1">
    <input type="button" value="-">
    <div class="price"> 1700 p.</div>
</div>
<button class="btn">В корзину</button>
<button class="one-click">Купить в один клик</button>
