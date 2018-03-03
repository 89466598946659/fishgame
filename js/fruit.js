function fruitObj() {
	this.num = 30;
	this.alive = [];
	this.x = [];
	this.y = [];
	this.l = [];
	this.spd = [];
	this.fruitType = [];
	this.aneNo = [];
	this.orange = new Image();
	this.blue = new Image();
}

fruitObj.prototype.init = function() {
	for (var i=0; i<this.num; i++) {
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.aneNo[i] = 0;
		this.spd[i] = Math.random() * 0.015 + 0.005; // [0.01, 0.015)
		this.fruitType[i] = '';
	}
	this.orange.src = './images/fruit.png';
	this.blue.src = './images/blue.png';
}

fruitObj.prototype.draw = function() {
	for (var i=0; i<this.num; i++) {
		if (this.alive[i]) {
			if (this.l[i] < 15) {
				this.x[i] = ane.headx[this.aneNo[i]];
				this.y[i] = ane.heady[this.aneNo[i]];
				this.l[i] += this.spd[i] * deltaTime;
			} else {
				this.y[i] -= this.spd[i] * 5 * deltaTime;
			}
			ctx2.drawImage(this.fruitType[i] === 'blue' ? this.blue : this.orange, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
			if (this.y[i] < -10) {
				this.alive[i] = false;
			}
		} else {

		}
	}
}

fruitObj.prototype.born = function(i) {
	var aneId = Math.floor(Math.random() * ane.num);
	this.aneNo[i] = aneId;
	this.l[i] = 0;
	this.alive[i] = true;
	var ran = Math.random();
	this.fruitType[i] = ran < 0.25 ? 'blue' : 'orange';
}
fruitObj.prototype.dead = function(i) {
	this.alive[i] = false;
}

function fruitMonitor(){
	var num = 0;
	for (var i=0; i<fruit.num; i++) {
		if (fruit.alive[i]) {
			num++;
		}
	}
	if (num < 15) {
		sendFruit();
		return;
	}
}

function sendFruit() {
	for (var i=0; i<fruit.num; i++) {
		if (!fruit.alive[i]) {
			fruit.born(i);
			return;
		}
	}
}

