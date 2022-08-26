import Swiper from 'swiper/bundle';

var swiper = new Swiper(".thumbsSwiper", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'horizontal',
    breakpoints: {
        1025: {
            direction: 'vertical',
        }
    }

});
var swiper2 = new Swiper(".mainSwiper", {
    loop: false,
    spaceBetween: 10,
    navigation: false,
    lazy: true,
    thumbs: {
        swiper: swiper,
    },
    mousewheel: false,
    zoom: false,
    breakpoints: {
        1025: {}
    },
});


document.addEventListener("DOMContentLoaded", ready);
function ready () {
    document.querySelector('.thumbsSwiper').style.display = 'block';
    document.querySelector('.mainSwiper').style.display = 'block';

}
var popupSwiper = new Swiper(".popupThumbsSwiper", {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'horizontal',
    breakpoints: {
        1025: {
            direction: 'vertical',
        }
    }

});
var popupSwiper2 = new Swiper(".popupMainSwiper", {

    loop: false,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    lazy: true,
    thumbs: {
        swiper: popupSwiper,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    mousewheel: true,
    zoom: true,
    breakpoints: {
        1025: {}
    },
});

window.onload = function () {
    document.querySelectorAll('.pop-up-slider .swiper-block div.swiper-zoom-container').forEach(image => {
        image.onclick = () => {
            let mainImg = (image.querySelector('img'))
            document.querySelector('.popup-window').style.display = 'block';
            document.querySelector('.popup-window span').style.display = 'block'
        }
    })
    document.querySelector('.popup-window span').onclick = () => {
        document.querySelector('.popup-window').style.display = 'none';
        document.querySelector('.popup-window span').style.display = 'none';
    }
};


const swipeAllSliders = (index) => {
    swiper2.slideTo(index);
    popupSwiper2 .slideTo(index);
}

swiper2.on('slideChange', () => swipeAllSliders(swiper2.activeIndex));
popupSwiper2.on('slideChange', () => swipeAllSliders(popupSwiper2.activeIndex));




