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
        $('.l-w__category').click(function(){
            var value = $(this).attr('data-filter');
            var elem = $('.latest-work__item');
            if (value=="all"){
                $(elem).show('500');
            }
            else{
                $(elem).not('.'+value).hide("500");
                $(elem).filter('.'+value).show("500");
            }
        });
        $('.l-w__category').on('click',function() {
            $('.l-w__category').css('color','#555555');
            if (this.style.color == 'rgb(85, 85, 85)'){
                $(this).css('color', '#c0301c');
            }
            else{
                $(this).css('color', '#555');
            }
            $('.latest-works-block').css('justify-content','space-around');
        });
        $('.toggler__nav').on('click', function(){
            $('.nav').toggleClass('nav_active');
        });
});
