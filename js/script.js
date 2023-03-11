$(document).ready(function () {

    // testimonial slider part =======

    $('.slider').slick({
        slidesToShow: 1,
        // autoplay: true,
        fade: true,

        prevArrow: '<span class="prevArrow"><span></span></span>',
        nextArrow: '<span class="nextArrow"><span></span></span>',
    });

    // counter up part =======

    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });


});