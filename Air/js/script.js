$(document).ready(function(){
	$('.slider__items').slick({
		  arrows: true,
		  speed: 900,
		  infinite: false,
		  slidesToShow: 1,
		  centerMode: true,
		  variableWidth: true,
	});
	$('.prodSlide__items').slick({
			arrows: false,
		  speed: 350,
		  infinite: true,
		  slidesToShow: 4,
			slidesToScroll: 2,
			centerMode: false,
			variableWidth: false,
	});
	$('.dropDown').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(400);
	});
});
