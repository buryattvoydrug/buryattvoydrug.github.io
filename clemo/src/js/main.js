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
	$('#ex1').galereya({
    wave: false,
    modifier: 'ex1',
    spacing: 5,
    disableSliderOnClick: true,
    load: function(next) {
        $.getJSON('images.json', function(data) {
            next(data);
        });
    }
	});
});