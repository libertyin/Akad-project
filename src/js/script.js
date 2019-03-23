'use strict';

$(document).ready(function() {

    $('.js-animate-from-left').viewportChecker({
        classToAdd: 'fadeInLeftBig animated'
    });

    $('.js-animate-from-right').viewportChecker({
        classToAdd: 'fadeInRightBig animated'
    });

    // sticky header
    var header = $('.js-header');
    var headerHeight = header.innerHeight();

    $(window).scroll(function(event) {
        var scrollTop = $(this).scrollTop();

        if ( scrollTop >= headerHeight  ) {
            header.addClass('is-pre-fixed');
        } else {
            header.removeClass('is-pre-fixed');
        }
        
        if ( scrollTop >= 400 ) {
            header.addClass('is-fixed');
        } else {
            header.removeClass('is-fixed');
        }
    });


    // Scroll top button
    $('.js-top-button').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });

});