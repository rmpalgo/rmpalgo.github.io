$(document).ready( function() {
    "use strict";

    $(window).on('load', function () {

        $('.hello').animate({
            left: '105px',
            opacity: '1'
        }, 1500);
    });

    $(window).scroll(function () {
       console.log('scrolled');
       $('.hello').animate({
           left: "320px"
       }, 1000);
        $('.dot').css('display', 'none');
        $('.dot').next().css('display', 'none');
        $('.about-word').fadeOut();
        $('.about-word').prev().fadeOut();
        $('.hello').children().children().show();

    });

});