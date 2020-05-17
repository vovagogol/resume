$(document).ready(function(){

	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slickPrev"><img src="img/left.png" alt="left"></div>',
		nextArrow: '<div class="slickNext"><img src="img/right.png" alt="right"></div>',
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}]

	});
	windowSize();
	let arrow = $('.slick-arrow');
	arrow.on('click', windowSize);

	$(window).on('resize', ()=> {
		windowSize();
		let arrow = $('.slick-arrow');
		arrow.on('click', windowSize);
	});



	function windowSize(){
		let arr = $('.slick-active');
		$(arr).css('opacity','1');
		let rez = arr.length-1;
		$(arr[rez]).css('opacity','0.2');
		if ($(window).width() <= '800') {
			$(arr).css('opacity','1');
		}
	}

});