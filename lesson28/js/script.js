window.onload = function () {

	task1.onclick = function () {

		class Circle {
			constructor() {
				this.circleRadius = 50;
			}

			get getRadius() {
				return this.circleRadius;
			}

			set setRadius(setRadius) {
				this.circleRadius = setRadius;
			}

			get getDiameter() {
				return this.circleRadius * 2;
			}

			circleArea() {
				console.log(`Площа круга: ${Math.round(Math.PI * Math.pow(this.circleRadius, 2))}`);
			}

			circleLength() {
				console.log(`Довжина круга: ${Math.round(Math.PI * (this.circleRadius * 2))}`);
			}

		}

		let circle = new Circle();
		console.log(`Задиний радіус: ${circle.getRadius}`);
		circle.setRadius = 250;
		console.log(`Новий радіус: ${circle.getRadius}`);
		console.log(`Діаметр: ${circle.getDiameter}`);
		circle.circleArea();
		circle.circleLength();
		console.log('----------------------')

	};
	task2.onclick = function () {

		let res = document.querySelector('.res');

		class Marker {
			constructor() {
				this.markerColor = "#ff0002";
				this.inkQuantity = 75;
			}

			print(string) {
				let length = this.inkQuantity / 0.5;
				let text = string.substr(0, length);
				res.innerHTML = (`<p style='margin: 0 auto; text-align: center; max-width: 800px ;color:${this.markerColor}'>${text}</p>`);
			}
		}
		let marker = new Marker();
		marker.print('Реалізувати клас, що описує простий маркер. У класі повинні бути наступні компоненти, Реалізувати клас, що описує простий маркер. У класі повинні бути наступні компоненти');

		res = document.querySelector('.res1');

		class Refueling extends Marker {

			ref(ink){
				this.inkQuantity = ink;
			}
		}

		let refueling= new Refueling();
		refueling.ref(100);
		refueling.print('Реалізувати клас, що описує простий маркер. У класі повинні бути наступні компоненти, Реалізувати клас, що описує простий маркер. У класі повинні бути наступні компоненти У класі повинні бути наступні компоненти');
	};
	task3.onclick = function () {

		let employee = ["Андрій Петрович","Василь Тарасович","Петро Андрійович","Рая Іванівна","Марічка Олександрівна",];



		class EmpTable {
			constructor(arr){
				this.arr = arr;
			}

			 getHtml(){
				 var tbody = document.createElement('table');

				 for (var i = 0; i < this.arr.length; i++) {
					 var tr = document.createElement('tr');
					 tbody.appendChild(tr);
					 for (var j = 0; j < 1; j++) {
						 var td = document.createElement('td');
						 tr.appendChild(td);
						 td.appendChild(document.createTextNode(this.arr[i]));
					 }
				 }
				 document.body.appendChild(tbody);
			}
		}

		let empTable = new EmpTable(employee);
		empTable.getHtml();

	};

};