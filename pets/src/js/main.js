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
    $('.pet__button').on('click',function(){
        $('.overlay').toggleClass('overlay_show');
        //копирование имени
        var name = $(this).prev().text();
        $('.modal-block__title').text(name);
        //копирование адреса картинки
        var imgBlock = $(this).prev().prev();
        var imgSrc= $('img',imgBlock).attr('src');
        $('.modal-img img').attr('src',imgSrc);
        //
        //var value= $(this).parent().attr('data-pet-text');
        var value= $(this).parent().attr('data-pet-text');
        alert(value);
        $('.modal-block__text').text(value);
        //
        var imgSrc= $(block).attr('data-pet-type');
        $('.modal-img img').attr('data-pet-type',imgSrc);
        //
        var imgSrc= $(block).attr('data-pet-parasites');
        $('.modal-img img').attr('data-pet-parasites',imgSrc);
        //
        var imgSrc= $(block).attr('data-pet-age');
        $('.modal-img img').attr('data-pet-age',imgSrc);
        //
        var imgSrc= $(block).attr('data-pet-inoculations');
        $('.modal-img img').attr('data-pet-inoculations',imgSrc);
        //
        var imgSrc= $(block).attr('data-pet-deseases');
        $('.modal-img img').attr('data-pet-deseases',imgSrc);
    });
    $('.modal_close').on('click',function(){
        $('.overlay').toggleClass('overlay_show');
    });  
});