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
    });

});