$(document).ready(function(){
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
});
