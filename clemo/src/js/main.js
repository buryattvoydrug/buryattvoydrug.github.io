$(document).ready(function(){
	$('.slider').slick({
			dots: true,
         infinite: false,
         arrows: false,
         autoplay: true,
         autoplaySpeed: 4000,
         slidesToShow: 1
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