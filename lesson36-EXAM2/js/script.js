$(document).ready(function(){

  $('.hamb').on('click', function () {
	 $(this).toggleClass('hamb__active');
	 $('.overlay').toggleClass('overlay__active')
  });

  $('.overlay a').on('click', function () {
	 $('.overlay').toggleClass('overlay__active');
	 $('.hamb').toggleClass('hamb__active');
  });


  $("a[href^='#']").click(function () {
	 var target = $(this).attr('href');
	 $('html, body').animate({
		scrollTop: $(target).offset().top}, 800); //70 замените на любое количество пикселей
	 return false;
  });

  	$('.slider').slick({
	 arrows: false,
	 infinite:true,
	 autoplay: true,
	 autoplaySpeed: 2000,
	 slidesToShow:1,
	 slidesToScroll:1,
	 verticalSwiping: true,
	 vertical: true,
	 dots: true
  	});

  	$('.latestNews__slider').slick({
	 arrows: true,
	 infinite:true,
	 autoplay: true,
	 autoplaySpeed: 4000,
	 slidesToShow:3,
	 slidesToScroll:1,
	 dots: true,
	 responsive: [
			{
		  	breakpoint: 944,
		  		settings: {
			 	slidesToShow: 2,
			 	slidesToScroll: 1,
			 	infinite: true,
			 	arrows: false,
			 	dots: true
		 		}	
			},
			{
		  	breakpoint: 632,
		  		settings: {
			 	slidesToShow: 1,
			 	slidesToScroll: 1,
			 	infinite: true,
			 	arrows: false,
			 	dots: true
		  		}
			}
		]
  	});

});