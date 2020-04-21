$(document).ready( function() {
    "use strict";
    let $aboutWord = $('.about-word');
    let $bigDot = $('.dot');
    let $hello = $('.hello');
    $(window).on('load', function () {

        $hello.animate({
            left: '105px',
            opacity: '1'
        }, 1500);
    });

    $(window).scroll(function () {
       console.log('scrolled');
       $hello.animate({
           left: "320px"
       }, 1000);
        $bigDot.css('display', 'none');
        $bigDot.next().css('display', 'none');
        $aboutWord.fadeOut();
        $aboutWord.prev().fadeOut();
        $hello.children().children().show();
        $('.container-grid').animate({
            background: '#FFCE19'
        }, 1000);

    });

});