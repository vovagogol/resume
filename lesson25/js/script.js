window.onload = function () {

	task1.onclick = function () {
		
		function moreLessEven(num1, num2) {
			let result;
			if (num1 < num2) {
				result =  -1;
			} else if (num1 > num2) {
				result =  1;
			} else {
				result =  0;
			}

			return result;
		}

		let firstNumber = +prompt('Введіть перше число');
		if (firstNumber == ''){
			alert('Ви не ввели число');
			return false
		}
	    let secondNumber = +prompt('Введіть друге число');
		if (secondNumber == ''){
			alert('Ви не ввели число');
			return false
		}

		alert(moreLessEven(firstNumber,secondNumber));
	};

	task2.onclick = function () {
		
		function factorial(n) {
			let result = 1;
			while (n){
				result *= n--;
			}
			return result;
		};

		let n = +prompt('Введіть перше число');
		if (n == ''){
			alert('Ви не ввели число');
			return false
		}

		alert(factorial(n));
	};

	task3.onclick = function () {
		
		function connectNumbers(number1,number2,number3) {
			return number1 + number2 + number3;
		}

		let number1 = prompt('Перше число');
		if (number1 == ''){
			alert('Ви не ввели число');
			return false
		}
		let number2 = prompt('Друге число');
		if (number2 == ''){
			alert('Ви не ввели число');
			return false
		}
		let number3 = prompt('Третє число');
		if (number3 == ''){
			alert('Ви не ввели число');
			return false
		}

		alert(connectNumbers(number1,number2,number3));
	};

	task4.onclick = function () {

		function rectanglSquare(a,b = a) {
			return a * b;
		}

		let number1 = +prompt('Перше число');
		let number2 = +prompt('Друге число');

		if (number2 == ''){
			number2 = number1;
			alert(`Площа квадрата: ${rectanglSquare(number1,number2)}`);
			return false;
		}

		alert(`Площа прямокутника: ${rectanglSquare(number1,number2)}`);
	};

	function perfectNumber(n) {
		let count=0 ;

		for (const i=1 ; i<n ; i++){
			if (n % i === 0){
				count= count + i ;
			}
		}

		if (n !== count){
			return false;
		}else{
			return true;
		}
	}

	task5.onclick = function () {

		let a = +prompt('Введіть число');

		if (perfectNumber(a)) {
			alert('Число досконале')
		} else {
			alert('Число недосконале')
		}

	};

	task6.onclick = function () {

		function genPerfectNumber(min,max) {
			let arr = [];
			for (min; min < max; min++){
				if (perfectNumber(min)){
					arr.push(min);
				}
			}
			return arr;
		};

		let firstNumber = +prompt('Введіть перше число');
		if (firstNumber == ''){
			alert('Ви не ввели число');
			return false
		}
		let secondNumber = +prompt('Введіть друге число, але не більше 10000, довго рахує)))');
		if (secondNumber == ''){
			alert('Ви не ввели число');
			return false
		}

		alert(genPerfectNumber(firstNumber,secondNumber));

	};

	task7.onclick = function () {

		function showTime(h,m,s) {

			if(h[0] !== 0 && h < 10) {
				h = '0' + h;
			} else if (h == '') {
				h = '00';
			}
			if(m[0] != 0 && m < 10) {
				m = '0' + m;
			} else if (m == '') {
				m = '00';
			}
			if(s[0] != 0 && s < 10) {
				s = '0' + s;
			} else if (s == '') {
				s = '00';
			}

			return (`${h} : ${m} : ${s}`);

		}

		let h = +prompt('Введіть години (формат 24 год.)');
		if (h < 0 || h > 23){
			alert('Ви ввели не коректну годину');
			return false;
		}
		let m = +prompt('Введіть хвилини');
		if (m < 0 || m > 59){
			alert('Ви ввели не коректну хвилину');
			return false;
		}
		let s = +prompt('Введіть секунди');
		if (s < 0 || s > 59){
			alert('Ви ввели не коректну секунду');
			return false;
		}


		alert(showTime(h,m,s))
	};

	function hourToSecond(h,m,s) {

		h = h * 60 * 60;
		m = m * 60;
		s = h + m + s;
		return s;
	}

	task8.onclick = function () {

		let h = +prompt('Введіть години (формат 24 год.)');
		if (h < 0 || h > 23){
			alert('Ви ввели не коректну годину');
			return false;
		}
		let m = +prompt('Введіть хвилини');
		if (m < 0 || m > 59){
			alert('Ви ввели не коректну хвилину');
			return false;
		}
		let s = +prompt('Введіть секунди');
		if (s < 0 || s > 59){
			alert('Ви ввели не коректну секунду');
			return false;
		}

		alert(`${hourToSecond(h,m,s)} секунд`);


		
	};

	function secondToHour(s) {

		let h = Math.floor(s / 3600);
		let m = Math.floor((s - h * 3600) / 60);
		s = s - h * 3600 - m * 60;

		return hms = (`${h} : ${m} : ${s}`);
	};

	task9.onclick = function () {

		let s = +prompt('Введіть секунди');

		if (isNaN(s)){
			alert('Не коректно ввели секунди');
			return false;
		}

		alert(secondToHour(s));

	};

	task10.onclick = function () {
		
		function compareTime(h1,m1,s1,h2,m2,s2) {

			let firstSecond = hourToSecond(h1,m1,s1);
			let secondSecond = hourToSecond(h2,m2,s2);

			let difSecond = firstSecond - secondSecond;

			return secondToHour(difSecond);

		};

		let h1 = +prompt('Введіть години (формат 24 год.)');
		if (h1 < 0 || h1 > 23){
			alert('Ви ввели не коректну годину');
			return false;
		}
		let m1 = +prompt('Введіть хвилини');
		if (m1 < 0 || m1 > 59){
			alert('Ви ввели не коректну хвилину');
			return false;
		}
		let s1 = +prompt('Введіть секунди');
		if (s1 < 0 || s1 > 59){
			alert('Ви ввели не коректну секунду');
			return false;
		}

		let h2 = +prompt('Введіть години (формат 24 год.)');
		if (h2 < 0 || h2 > 23){
			alert('Ви ввели не коректну годину');
			return false;
		}
		let m2 = +prompt('Введіть хвилини');
		if (m2 < 0 || m2 > 59){
			alert('Ви ввели не коректну хвилину');
			return false;
		}
		let s2 = +prompt('Введіть секунди');
		if (s2 < 0 || s2 > 59){
			alert('Ви ввели не коректну секунду');
			return false;
		}

		alert(`Різниця: ${compareTime(h1,m1,s1,h2,m2,s2)}`);
		
	};

};