window.onload = function () {

	task1.onclick = function () {

        const name = prompt('Введіть своє ім*я.', 0);
        alert(`Привіт, ${name} !`);
	};

	task2.onclick = function () {

		let years = prompt('Введіть свій рік народження', 0);
        const thisYear = 2020;
        console.log('Ваш вік:', typeof years);
        const userYears = thisYear - years;
        alert('Вам ' + userYears + ' років.');
	};

	task3.onclick = function () {

        const lengthSquare = prompt('Введіть довжину сторони квадрата.', 0);
        const per = lengthSquare*4;
        // console.log('Периметр квадрата:' typeof lengthSquare);
        alert('Периметр квадрата: ' + per);
	};

	task4.onclick = function () {

        const circleRadius = prompt('Введіть радіус круга', 0);
        const PI = 3.14;
        const sqPL = PI*circleRadius*circleRadius;
	    alert('Радіус круга: ' + sqPL);
	}

	task5.onclick = function () {

		const distance = prompt('Введіть відстань між містами', 0);
        const time = prompt('За скільки часу хочете добратись', 0);
        const speed = distance / time;
        alert('Щоб проїхати ' +distance+ 'км за ' + time+ 'год рухайтесь з швидкістю ' + speed + ' км/год.');
	};

	task6.onclick = function () {

		const kesh = prompt('Введіть суму в доларах', 0);
        const dollar = 27.0154;
        const euro = 29.0240;
        alert('Ви отримаєте: ' + dollar/euro*kesh + ' євро');
	};

	task7.onclick = function () {

		const file = 820;
        const flashDriveGb = prompt ('Введіть об\'єм флешки в Gb');
        const flashDriveMb = flashDriveGb * 1024;
		const numberFiles = Math.floor(flashDriveMb / file);
		const remainder = flashDriveMb % file;
		alert('На флешку ' +flashDriveGb+ 'Гб поміститься файлів: ' +numberFiles+ ' , по ' + file + ' Мб. Залишок вільного місця: ' +remainder+ 'Мб');
	};

	task8.onclick = function () {

		const amountMoney = prompt('Введіть суму грошей');
        const priceChocolates = prompt('Введіть ціну шоколадки');
		const buyChocolate = Math.floor(amountMoney / priceChocolates);
		const restMoney = amountMoney % priceChocolates;
		alert('За: ' + amountMoney + 'грн. купите: ' + buyChocolate + ' шоколадок, по ціні: ' + priceChocolates + 'грн. Здача ' + restMoney + 'грн.');
	};

	task9.onclick = function () {

		const number = prompt('Введіть цифри щоб перевернути їх:');
        const n1 = number%10;
        const n2 = (number%100-n1)/10;
        const n3 = (number - number%100)/100;
		alert(n3, n2, n1);

	};

	task10.onclick = function () {

		const depositAmount = prompt('Введіть суму вкладу', 0);
		const month = prompt('Введіть кількість місяців', 0);
		const percent = prompt('Введіть процентну ставку річних', 0);
        alert('Сума нарахованих відсотків: ' + (((depositAmount * percent * (month * 30)) / (365 * 100)).toFixed(2)) + 'грн.');
    };
}