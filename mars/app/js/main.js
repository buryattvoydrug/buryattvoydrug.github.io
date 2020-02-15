$(document).ready(function(){
        $('.about-us-carousel').slick({
            slidesToShow: 4,
            dots: false,
            variableWidth: true
        });
        $('.sponsors-carousel').slick({
            slidesToShow: 1,
            dots: true,
            arrows: false,
            variableWidth: true
        });
        $('a[href^="#"]').on('click', function(){
            var _href=$(this).attr("href");
            $('html,body').animate({ scrollTop: $(_href).offset().top -0 + "px" });
        });
});
