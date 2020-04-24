window.onload = function () {

	task1.onclick = function () {
		let auto = {
			firma: 'Mercedes',
			model: 'e220',
			year: '2003',
			speed: 160,
			averageSpeed: function(km) {
				let count = km / this.speed;
				let edTime = Math.floor(count / 4);
				if(count<4) {
					return count;
				} else if(count) {
					return count + edTime;
				}
			}
		};
		function allInfo(test, km) {
			for(let i in test) {
				if(i === 'averageSpeed') {
					if (km) {
						console.log(i, test[i](km));
					}
				} else {
					console.log(i,test[i]);
				}
			}
		};
		allInfo(auto,250);
	};

	task2.onclick = function () {

		let obj = {
			numerator: 2,
			denominator: 4,
			sum: function() {
				return this.numerator + this.denominator;
			},
			sub: function() {
				return this.numerator - this.denominator;
			},
			mul: function() {
				return this.numerator * this.denominator;
			},
			div: function() {
				return this.numerator / this.denominator;
			},
			red: function() {
				let numerator;
				let denominator;
				for (let i = 1; i <= this.numerator; i++) {
					for (let j = 1; j <= this.denominator; j++){
						console.log(j);
						if (this.numerator%i === 0 && this.denominator%j === 0 && i === j) {
							console.log(i);
							numerator = this.numerator / i;
							denominator = this.denominator / i;
						}
					}
				}
				return {numerator, denominator};
			}
		};
		console.log(obj.sum());
		console.log(obj.sub());
		console.log(obj.mul());
		console.log(obj.div());
		console.log(obj.red());

	};

	task3.onclick = function () {
		let time = {
			hours: null,
			minutes: null,
			seconds: null,
			displayTime: function(){
				return this.hours + ':' + this.minutes + ':' + this.seconds;
			}
		};
		time.hours = +prompt('enter hours');
		time.minutes = +prompt('enter minutes');
		time.seconds = +prompt('enter seconds');
		console.log(time.displayTime());
		function seconds (sec, oclock) {
			if (oclock === 'minutes') {
				sec *= 60;
			} else if (oclock === 'hours') {
				sec *= 3600;
			}
			let transf =  time.hours*3600 + time.minutes*60 + time.seconds + sec;
			let hours = Math.floor(transf / 3600);
			let minutes = Math.floor(((transf / 3600) - hours) * 60);
			let seconds = Math.round(((((transf / 3600) - hours) * 60) - minutes) * 60);
			return hours + ' год: ' + minutes + ' хв: ' + seconds + ' сек';
		}
		let newTime = +prompt('на скільки хоч змінити час?');
		let typeTime = prompt('шо!?');
		alert(seconds(newTime, typeTime));
	};
};