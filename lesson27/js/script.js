window.onload = function () {

	let shoppingList = [
		{
			product: "Апельсин",
			quantity: 3,
			bought: true
		},
		{
			product: "Мандарин",
			quantity: 2,
			bought: false
		},
		{
			product: "Хліб",
			quantity: 5,
			bought: false
		},
		{
			product: "Вода",
			quantity: 1,
			bought: true
		},
		{
			product: "Молоко",
			quantity: 2,
			bought: false
		},
	];

	let res = (shoppingList.sort((a, b) => a.bought - b.bought));

	task11.onclick = function () {

		for (let key in res) {
			console.log(res[key]);
		}
	};
	task12.onclick = function () {

		for (let key in res) {
			console.log(res[key]);
		}
		console.log('...............................');

		let prod = prompt('Що ще маєм купити?');
		prod = prod[0].toUpperCase() + prod.slice(1);

		if(res.find((item) => item.product === prod)){
			res.forEach((item,i) => {
				if (res[i].product === prod) {
					res[i].quantity += 1;
				};
			});
		} else {
			let addProd = {
				product: '',
				quantity: 1,
				bought: false
			};
			addProd.product = prod;
			res.push(addProd);
		};
		for (let key in res) {
			console.log(res[key]);
		}
		console.log('...............................');

	};
	task13.onclick = function () {

		for (let key in res) {
			console.log(res[key]);
		}
		console.log('...............................');

		let prod = prompt('Що вже купили?');
		prod = prod[0].toUpperCase() + prod.slice(1);

		if(res.find((item) => item.product === prod)){
			res.forEach((item,i) => {
				if (res[i].product === prod) {
					res[i].bought = true;
				};
			});
		}
		for (let key in res) {
			console.log(res[key]);
		}
		console.log('...............................');

	};

	let check = [
		{
			product: "Апельсин",
			quantity: 3,
			price: 10
		},
		{
			product: "Мандарин",
			quantity: 2,
			price: 12
		},
		{
			product: "Хліб",
			quantity: 5,
			price: 11
		},
		{
			product: "Вода",
			quantity: 1,
			price: 17
		},
		{
			product: "Молоко",
			quantity: 2,
			price: 21
		},
	];

	task21.onclick = function () {

		check.forEach((item) => {
			console.log(item)
		})
	};
	task22.onclick = function () {

		let res = 0;
		check.forEach((item) => {
			res += (item.price * item.quantity);
		})

		alert(`Сума покупки: ${res} грн.`)

	};
	task23.onclick = function () {

		let res = [];
		check.forEach((item,i) => {
			console.log(item);
			res = item.price * item.quantity;
			check[i].summ = res;


		})
		check.sort((a,b) => b.summ - a.summ);
		alert(`Найдорожча покупка ${check[0].product}, кількість ${check[0].quantity}шт., ціна ${check[0].summ}грн. `);
		// let maxPrice = Math.max.apply(null, res);
		// console.log(maxPrice);



	};
	task24.onclick = function () {

		let i = 0;
		let res = 0;
		check.forEach((item) => {
			console.log(item)
			res += item.price * item.quantity;
			i++
		})
		alert(`Середня ціна товару ${res/i} грн.`)

	};
	task3.onclick = function () {

		let res = document.querySelector('.res')

		let cssStyles = [
			{
				color: 'red'
			},
			{
				'font-size': '27px'
			},
			{
				'text-align': 'center'
			},
			{
				'text-decoration': 'underline'
			},
			{
				'margin-top': '70px'
			},
			{
				'cursor': 'pointer'
			},
		]

		let arr = [];

		cssStyles.forEach((item,i) => {
			arr.push(Object.keys(cssStyles[i]) +': '+ Object.values(cssStyles[i])+';');
		})

		res.innerHTML = (`<p style='${arr.join(' ')}'>Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах < p > < / p >, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.</p>`);
	};

	let audience = [
		{
			name: "Aud_1",
			seats: "12",
			faculty: "physics",
		},
		{
			name: "Aud_2",
			seats: "17",
			faculty: "law",
		},
		{
			name: "Aud_3",
			seats: "15",
			faculty: "physics",
		},
		{
			name: "Aud_4",
			seats: "19",
			faculty: "it",
		},
		{
			name: "Aud_5",
			seats: "14",
			faculty: "chemistry",
		},
	]

	task41.onclick = function () {
		let arr = [];
		audience.forEach((item,i) => {
			arr.push(`Аудиторія: ${audience[i].name}, місць: ${audience[i].seats}, факультет: ${audience[i].faculty} \n`)
		})
		alert(arr.join(''));

	};
	task42.onclick = function () {

		let facul = prompt('Щоб відобразити аудиторії, введіть факультет! (physics, law, it, chemistry)')
		let arr = [];
		audience.forEach((item,i) => {
			if(audience[i].faculty === facul){
				arr.push(`Аудиторія: ${audience[i].name}, кількість місць: ${audience[i].seats} \n`)
			}
		})
		alert(arr.join(''));
	};
	task43.onclick = function () {

		let objectGroup = {
			name: "group_1",
			seats: "14",
			faculty: "physics",
		}
		let arr = [];
		audience.forEach((item,i) => {
			if(audience[i].seats >= objectGroup.seats && audience[i].faculty === objectGroup.faculty){
				arr.push(`Аудиторія: ${audience[i].name}, кількість місць: ${audience[i].seats}, вакультет ${audience[i].faculty} \n`)
			}
		})
		alert(arr.join(''));
	};
	task44.onclick = function () {

		let arr = [];

		let res = audience.sort((a,b) => a.seats - b.seats);
		res.forEach((item,i) => {
			arr.push(`Аудиторія: ${audience[i].name}, кількість місць: ${audience[i].seats}, вакультет ${audience[i].faculty} \n`)
		})

		alert(arr.join(''));
	};
	task45.onclick = function () {

		let arr = [];

		let res = audience.sort((a,b) => a.faculty > b.faculty);
		res.forEach((item,i) => {
			arr.push(`Аудиторія: ${audience[i].name}, кількість місць: ${audience[i].seats}, вакультет ${audience[i].faculty}\n`)
		})
		alert(`Відсортовано по факультету \n\n ${arr.join('')}`);
	};

};