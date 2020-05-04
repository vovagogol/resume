window.onload = function () {

	task1.onclick = function () {
		let playList = [
			{
				author: "LED ZEPPELIN",
				song: "STAIRWAY TO HEAVEN"
			},
			{
				author: "QUEEN",
				song: "BOHEMIAN RHAPSODY"
			},
			{
				author: "LYNYRD SKYNYRD",
				song: "FREE BIRD"
			},
			{
				author: "DEEP PURPLE",
				song: "SMOKE ON THE WATER"
			},
			{
				author: "JIMI HENDRIX",
				song: "ALL ALONG THE WATCHTOWER"
			},
			{
				author: "AC/DC",
				song: "BACK IN BLACK"
			},
			{
				author: "QUEEN",
				song: "WE WILL ROCK YOU"
			},
			{
				author: "METALLICA",
				song: "ENTER SANDMAN"
			}
		];
		let ol = document.createElement("ol");
		playList.forEach((item) => {
			let li = document.createElement("li");
				li.innerHTML = item.author + ' - ' + item.song;
				ol.appendChild(li);
		});
		document.body.appendChild(ol);
	};

	//task2
	let btn2 = document.querySelector('#task2');
	let styles = document.querySelector('.modalWindow ');
	let close = document.querySelector('span');

	btn2.addEventListener('click',() =>{
		styles.classList.add('active');
	});

	close.addEventListener('click',() =>{
		styles.classList.remove('active');
	});
	//task2

	//task3
	let btn3 = document.querySelector('#task3');
	let body = document.querySelector('body');
	i = 1;
	btn3.addEventListener('click',() =>{
		switch (i) {
			case 1:
				body.classList.remove('green');
				body.classList.add('red');
				break;

			case 2:
				body.classList.remove('red');
				body.classList.add('yellow');
				break;

			case 3:
				body.classList.remove('yellow');
				body.classList.add('green');
				break;
		}

		i++;

		if(i > 3){
			i = 1;
		}
	});

};