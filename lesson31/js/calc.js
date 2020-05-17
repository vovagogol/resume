$(document).ready(function(){

	let input = $('input');
	let buttonNum = $('.calc__but--num button');
	let buttonAct = $('.calc__but--act button');
	let buttonEqv = $('.calc__but--act button.ecv');
	let buttonC = $('.calc__but--act button.c');



	buttonNum.on('click', function() {
			res = input.val();
			act = ($(this).attr('data-value'));
			act = res + act;
			input.val(act);
	})

	buttonAct.on('click', function() {
			res = input.val();
			act = ($(this).attr('data-act'));
			act = res + act;
			input.val(act);
	})

	buttonEqv.on('click', function() {
		res = input.val();
		if (-1 < res.indexOf('+')){
			res = res.split('+')
			sum = res.reduce((a,b) => {
				return +a + +b;
			});
			input.val(sum);
		} else if (-1 < res.indexOf('-')){
			res = res.split('-')
			sum = res.reduce((a,b) => {
				return +a - +b;
			});
			input.val(sum);
		} else if (-1 < res.indexOf('*')){
			res = res.split('*')
			sum = res.reduce((a,b) => {
				return +a * +b;
			});
			input.val(sum);
		} else if (-1 < res.indexOf('/')){
			res = res.split('/')
			sum = res.reduce((a,b) => {
				return +a / +b;
			});
			input.val(sum);
		}
	})

	buttonC.on('click', function () {
		input.val('');
	})



});