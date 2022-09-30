$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
		speed: 1200,
		infinite: false,
		draggable: false,
		variableWidth: true,
		responsive: [{
			breakpoint: 1415,
			settings: {
				slidesToShow: 1
			}
		}]
	});
});