window.onload = () => {
	let input = document.querySelector('input[type="text"]'),
		select = document.querySelector('select'),
		btn = document.querySelector('input[type="button"]'),
		result = document.querySelector('.result'),
		text = document.querySelector('.text'),
		close = document.querySelector('span'),
		styles = document.querySelector('.modalWindow '),
		pagination = document.querySelector('.pagination ');



	btn.onclick = () => {
		result.innerHTML = '';
		if (input.value !== '') {
			fetch (`http://www.omdbapi.com/?apikey=518ca0ce&t=${((input).value)}&type=${((select).value)}`)
				.then(response => response.json())
				.then(response => {
					result.innerHTML = ( response.Title );
					let more = document.createElement('input');
					more.value="Більше";
					more.type="button";
					more.style.cssText = "cursor: pointer; margin-left: 20px;";
					result.appendChild(more);
					if (response.Error) {
						result.innerHTML = (response.Error);
					}

					more.onclick = () => {
						result.innerHTML = '';
						for (let k in response){
							result.innerHTML += (k+' - '+response[k]+'<br>');

						}
						if (response.Poster) {
							result.innerHTML += (`<img src="${response.Poster}" alt="">`);
						}
					}
				})
				.catch(err => result.innerHTML = err);
		} else {

		  let isFirstLoad = true;

			async function getData(url) {
				const response = await fetch(url);
				const data = await response.json();
				return data;
			}
			function renderText(data) {
				result.innerHTML = '';
				for (let key in data.results) {
					result.innerHTML += `${data.results[key].name}<input type="button" value="Більше" class ="more"><br>`;
				}
				let more = document.querySelectorAll('.more');
				renderPopup(more,data);

				return pages = Math.round(data.count / data.results.length);

			}
			function renderPopup(btn,data) {
				btn.forEach((item,i) => {
					item.addEventListener('click',() =>{
						styles.classList.add('active');
					});
					item.addEventListener('click',() =>{
						for (let key in data.results[i]) {
							text.innerHTML += (`${key}: ${data.results[i][key]}<br>`);
						}
					});
					close.addEventListener('click',() =>{
						styles.classList.remove('active');
						text.innerHTML = '';
					});
				});
			}
		  let curentBtn;
			function showText() {
				let btnsPag = document.querySelectorAll('.pag');
				while(isFirstLoad) {
				  btnsPag[0].style.color = "red";
				  isFirstLoad = false;
				}
				btnsPag.forEach((items) => {
					items.addEventListener('click',() =>{
						 btnsPag.forEach( (items)=>{
							items.style.color = "black";
					  });

						result.innerHTML = '';
						getData(`https://swapi.co/api/people/?page=${items.value}`).then(data => {
							let more = document.querySelectorAll('.more');
							renderText(data);
							renderPopup(more,data);
						 	items.style.color = "red";
						   curentBtn = items.value
						})
					})
				})

			}
			function renderBtn() {
				let firstPage = 1,
					lastPage = 5;
				pagination.innerHTML = '';
				function createBtn (value,classList,nameBtn) {
						nameBtn.type = 'button';
						nameBtn.value = value;
						nameBtn.classList.add(classList);
						pagination.appendChild(nameBtn);
				}

				let btnNext = document.createElement('input');
				let btnPrev = document.createElement('input');
				createBtn('<', 'btnPrev',btnPrev);

				btnPrev.onclick = () => {
					if (firstPage > 1){
						firstPage--;
						lastPage--;
						btnNext.style.display = "block";
					}
					if (firstPage === 1) {
						btnPrev.style.display="none";
					}
					pagination.innerHTML = '';
					createBtn('<', 'btnPrev',btnPrev);
					for (let i = firstPage; i <= lastPage; i++){
						let btnPag = document.createElement('input');
						createBtn(i, 'pag',btnPag);

					}
					createBtn('>', 'btnNext',btnNext);

					showText();
				};

				for (let i = firstPage; i <= lastPage; i++){
					let btnPag = document.createElement('input');
					createBtn(i, 'pag',btnPag);

				}

				createBtn('>', 'btnNext',btnNext);

				btnNext.onclick = () => {
					if (lastPage < pages){
						firstPage++;
						lastPage++;
						btnPrev.style.display = "block";
					}
					if (lastPage === pages){
						btnNext.style.display = "none";
					}

					pagination.innerHTML = '';
					createBtn('<', 'btnPrev',btnPrev);
					for (let i = firstPage; i <= lastPage; i++){
						let btnPag = document.createElement('input');
						createBtn(i, 'pag',btnPag);
					}

					createBtn('>', 'btnNext',btnNext);

					showText();
				};

				showText();

			}

			getData('https://swapi.co/api/people/')
				.then(result.innerHTML = 'Виконується пошук...')
				.then(data => renderText(data))
				.then(data => renderBtn(data))
				.catch(err => result.innerHTML = err);


		}
	}
};
