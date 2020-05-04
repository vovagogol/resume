window.onload = function () {

	task1.onclick = function () {
		let div = document.getElementById('text');
		document.addEventListener('keydown', function (event) {
			if (event.code == 'KeyZ') {
				console.log(event.code);
				event.preventDefault();
				let textIn = div.innerText;
				div.innerHTML = `<textarea id='area'>${textIn}</textarea>`;
			} else if (event.code == 'KeyX') {
				let areaText = document.getElementById('area').value;
				div.innerHTML = areaText;
				event.preventDefault();
			}
		})
	};
	task2.onclick = function () {
		let table = document.createElement("table");
			table.setAttribute('border',3);
		let cols = +prompt('Введіть кількість колонок таблиці');
		let row = +prompt('Введіть кількість рядків таблиці');
		let rows = row + 1;
		for (let i = 0; i < rows; i++) {
			let tr = document.createElement("tr");
			for (let j = 0; j < cols; j++) {
				if (i === 0) {
					let tableTitle = document.createElement("th");
					tableTitle.innerHTML = `title`;
					tr.appendChild(tableTitle);
				} else {
					let td = document.createElement("td");
					td.innerHTML = Math.floor(Math.random() * 90);
					tr.appendChild(td);
				}
			}
			table.appendChild(tr);
		}
		document.body.appendChild(table);

		let th = document.querySelectorAll(`th`);
		let td = document.querySelectorAll(`td`);
		let count = 0;

		let mas = [];
		for (let i = 0; i < rows-1; i++){
			mas[i] = [];
			for (let j = 0; j < cols; j++){
				mas[i][j] = td[count].innerHTML;
				count++;
			}
		}
		let arr2 = [];
		th.forEach((items,i) => {
			items.addEventListener('click', () => {
				let count2 = -1;
				for (let j = 0; j < rows-1; j++) {
					if (count2 > rows) {
						count2 = 0;
					}
					count2++;
					arr2.push(mas[count2][i]);
				}

				arr2.sort((a,b) => a - b);

				mas.forEach((item,ik) =>{
					mas[ik][i] = arr2[ik];
				});
				let getTable = document.querySelectorAll("td");
				let count3 = 0;
				for (let i = 0; i < rows-1; i++){
					for (let j = 0; j < cols; j++){
						getTable[count3].innerHTML = mas[i][j];
						count3++;
					}
				}
				arr2.length = 0;
			})
		})

	};
	task3.onclick = function () {

		function resize (e) {
			let mW = e.target.clientWidth + (e.offsetX - e.target.clientWidth+10);
			let mH = e.target.clientHeight + (e.offsetY - e.target.clientHeight+10);
			text.style.maxWidth = mW + 'px';
			text.style.minHeight = mH + 'px';
		}

		text.onmousemove = function (e) {
			if (e.target.clientWidth-5 < e.offsetX && e.target.clientHeight-10 < e.offsetY){
				text.style.cursor = 'nwse-resize';
				text.onmousedown = function() {
					document.addEventListener('mousemove', resize);
					text.onmouseup = function () {
						document.removeEventListener('mousemove', resize);
					};
				}

			} else {
				text.style.cursor = 'default';
			}

		}

	};
};