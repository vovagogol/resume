$(document).ready(function(){

	let control = $('.tabs__control--item');
	let text = $('.tabs__texts--text');

	control.on('click', function () {

		control.removeClass('activeControl');
		$(this).addClass('activeControl');

		let position = $.inArray(this, control);
		let positionText = text[position];

		text.removeClass('activeText');
		$(positionText).addClass('activeText');
	});

	$(".rateYo").rateYo({
		rating: 3.6,
		starWidth: "23px",
		spacing: "5px"
	});

	new CircleProgress('.progress', {
		max: 10,
		value: 7.8,
		textFormat: 'value',
	});
	new CircleProgress('.progress2', {
		max: 10,
		value: 5.3,
		textFormat: 'value',
	});
	new CircleProgress('.progress3', {
		max: 10,
		value: 9.9,
		textFormat: 'value',
	});

});