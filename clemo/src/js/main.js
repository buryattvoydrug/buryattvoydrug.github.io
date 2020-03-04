$(document).ready(function(){
    if(document.documentElement.clientWidth < 767){
        $('.navbar__link').on('click', function(){
            $('.navbar__link').toggleClass('navbar__link_active');
            $('.nav').toggleClass('navbar__nav_active');
            $('.logo').toggleClass('logo_active');
            $('body').toggleClass('stop-scroll');
        });
        $('.nav__item').on('click',function(){
            setTimeout(function(){
                $('body').toggleClass('stop-scroll');
                $('.navbar__link').toggleClass('navbar__link_active');
                $('.nav').toggleClass('navbar__nav_active');
            },500);
        });
        $('.best-team-slider').addClass('best-team-slider-small');
        $('.best-team-slider-small').removeClass('best-team-slider');
    }
	$('.slider').slick({
		 dots: true,
         infinite: false,
         arrows: false,
         autoplay: true,
         autoplaySpeed: 3000,
         slidesToShow: 1
     });
    $('.best-team-slider').slick({
         dots: true,
         infinite: true,
         arrows: true,
         autoplay: true,
         autoplaySpeed: 3000,
         slidesToShow: 3,
         slidesToScroll:3
     });
    $('.best-team-slider-small').slick({
         dots: true,
         infinite: true,
         arrows: true,
         autoplay: true,
         autoplaySpeed: 3000,
         slidesToShow: 2,
         slidesToScroll:2
     });
    $('.best-works__item').slice(0,10).css('display','flex');

    $('#more').on('click',function(){
        $('.best-works__item:hidden').slice(0,10).css('display','flex');
        $('.best-works').masonry({
          itemSelector: '.best-works__item'
        });
        if($('.best-works__item:hidden').length==0){
            $('#more').css('display','none');
        }
    });
    $('.best-works').masonry({
      itemSelector: '.best-works__item'
    });
    $('a[href^="#"]').on('click', function(){
        var _href=$(this).attr("href");
        $('html,body').animate({ scrollTop: $(_href).offset().top -0 + "px" });
    });
    $('.full').magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            image: {
                verticalFit: true
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function(element) {
                    return element.find('img');
                }
            }
            
        });
    $("img.lazy").lazyload({
        effect : "fadeIn"
    });
});
