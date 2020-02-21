$(document).ready(function(){
    if(document.documentElement.clientWidth < 768){
        $('.articles-list').slick({
          dots: true,
          arrows: false
      });
    }
});
