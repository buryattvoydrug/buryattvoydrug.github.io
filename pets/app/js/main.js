$(document).ready(function(){
    if(document.documentElement.clientWidth < 768){
        $('.navbar__link').on('click', function(){
            $('.navbar__link').toggleClass('navbar__link_active');
            $('.navbar__nav').toggleClass('navbar__nav_active');
            $('body').toggleClass('no-scroll');
        });
        $('.nav__link').on('click',function(){
            setTimeout(function(){
                $('body').toggleClass('no-scroll');
                $('.navbar__link').toggleClass('navbar__link_active');
                $('.navbar__nav').toggleClass('navbar__nav_active');
            },500);
        });
    }
    $('a[href^="#"]').on('click', function(){
        var _href=$(this).attr("href");
        $('html,body').animate({ scrollTop: $(_href).offset().top -0 + "px" });
    });
    if(document.documentElement.clientWidth < 768){
        var i=1;
    }
    if(document.documentElement.clientWidth > 767){
        var i=2;
    }
    if(document.documentElement.clientWidth > 1000){
        var i=3;
    }
    $('.our-friends-block').slick({
        infinite: true,
        slidesToShow: i,
        variableWidth: true
    });
});
