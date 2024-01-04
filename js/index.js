$(document).ready(function () { 
$(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 55) {
            $("nav").addClass("fixed-top");
        } else {
            $("nav").removeClass("fixed-top");
    }
        var scroll = $(window).scrollTop();
    });

    $(".fa-bars").click(function(){
        $(this).toggleClass("fa-xmark");
    });

    $('li .nav-link').click(function () {
        $('li .nav-link.active').removeClass('active');
        $(this).toggleClass('active');
    });

    $(".language-button").click(function () {
        $(this).text($(this).text() == 'English' ? 'Arabic' : 'English');
    });

});