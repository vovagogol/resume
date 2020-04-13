window.onload = function () {

    task1.onclick = function () {
        let old = prompt('Скільки вам років ?', 0);
        if (old > 0 && old < 3) {
            alert ('дитя');
        }
        else if (old > 12 && old < 19) {
            alert ('підліток');
        }
        else if (old > 18 && old < 61) {
            alert ('дорослий');
        }
        else {
            alert ('пенсіонер')
        }
    }

	task6.onclick = function () {

		let usd = prompt('Введіть USD');
		if (usd == 0 || !usd.replace (/[^0-9\.]/g, '').length || usd === ''){
			alert ('Ви не ввели USD, або ввели 0!');
			return false;
		}
		let currency = prompt('Введіть валюту EUR, UAN, AZN');
		switch (currency) {
			case 'EUR':
				alert(usd * 0.88);
				break;

			case 'UAN':
				alert(usd * 23.32);
				break;

			case 'AZN':
				alert(usd * 0.59);
				break;

			default:
				alert('Не правильно введена валюта');
				break;
		}


	};

	task7.onclick = function () {

		let purchaseAmount = prompt('Введіть суму покупки');
		if (purchaseAmount == 0 || !purchaseAmount.replace (/[^0-9\.]/g, '').length || purchaseAmount === ''){
			alert ('Ви не ввели суму покупки, або ввели 0!');
			return false;
		}

		let discount = 7;

		if (purchaseAmount < 200){
			alert (`Сума до сплати ${purchaseAmount}. Не достатьна сума покупки для отримання знижки`);
			return false;
		} else if (purchaseAmount >= 200 && purchaseAmount < 300) {
			discount = 3;
		}else if (purchaseAmount >= 300 && purchaseAmount < 500) {
			discount = 5;
		}

		let discountedAmount = purchaseAmount / 100 * discount;

		alert(`До сплати: ${purchaseAmount-discountedAmount}. Знижка: ${discount}%`);
	};

	task8.onclick = function () {

		let circleLength = prompt('Введіть довжину кола');
		if (circleLength == 0 || !circleLength.replace (/[^0-9\.]/g, '').length || circleLength === ''){
			alert ('Ви не ввели довжину кола, або ввели 0!');
			return false;
		}
		let squarePerimeter = prompt('Введіть периметр квадрата');
		if (squarePerimeter == 0 || !squarePerimeter.replace (/[^0-9\.]/g, '').length || squarePerimeter === ''){
			alert ('Ви не ввели довжину кола, або ввели 0!');
			return false;
		}

		let circleDiameter = circleLength / Math.PI;
		let squareSide = squarePerimeter / 4;

		if (squareSide >= circleDiameter) {
			alert('Круг поміститься в квадрат');
		} else {
			alert('Круг НЕ поміститься в квадрат');
		}
	};

	task9.onclick = function () {

		let firstQuestion = +prompt('Питання: 2 + 2 = ?  Варіанти відповідів: 1) 3; 2) 5; 3) 4;');
		let secondQuestion = +prompt('Питання: 2 + 2 * 2 = ?  Варіанти відповідів: 1) 6; 2) 5; 3) 4;');
		let thirdQuestion = +prompt('Питання: (4 + 3) * 2 = ?  Варіанти відповідів: 1) 3; 2) 5; 3) 14;');

		let mark = 0;

		if (firstQuestion === 3) {
			mark = mark + 2;
		}

		if (secondQuestion === 1) {
			mark = mark + 2;
		}

		if (thirdQuestion === 3) {
			mark = mark + 2;
		}

		alert(`Ви набрали балів: ${mark}`);
	};

	task10.onclick = function () {

		let day = prompt('Введіть день');

		if (day == 0 || day.replace (/\d/g, '').length || day === '' || day > 31){
			alert ('Ви не ввели день, або ввели 0 або більш 31!');
			return false;
		}

		let month = prompt('Введіть місяць');

		if (month == 0 || month.replace (/\d/g, '').length || month === '' || month > 12){
			alert ('Ви не ввели місяць, або ввели 0 або більш 12!');
			return false;
		}

		let year = prompt('Введіть рік');

		if (year == 0 || year.replace (/\d/g, '').length || year === ''){
			alert ('Ви не ввели рік, або ввели 0 або більш 12!');
			return false;
		}

		let leapYear = false;

		if ((year%400 === 0 || year%4 === 0) && year%100 !== 0 ) {
			leapYear = true;
		}

		if ((day > 30 && (month == 4 || month == 6 || month == 9 || month == 11)) || (day > 29 && month == 2 && leapYear === true) || (day > 28 && month == 2 && leapYear === false)) {
			alert('В вибраному Вами місяці, стільки днів не може бути!');
			return false;
		}

		if (day == 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10)) {
			day = 1;
			month = +month + 1;
		} else if (day == 31 && month == 12) {
			day = 1;
			month = 1;
			year = +year + 1;
		} else if (day == 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
			day = 1;
			month = +month + 1;
		} else if (day == 29 && month == 2 && leapYear === true) {
			day = 1;
			month = +month + 1;
		} else if (day == 28 && month == 2 && leapYear === false) {
			day = 1;
			month = +month + 1;
		} else {
			day = +day + 1;
		}

		alert(`${day} - ${month} - ${year}`)
	};
};