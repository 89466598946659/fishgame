function waveObj() {
	 this.x = [];
	 this.y = [];
	 this.num = 10;
	 this.alive = []; // false状态可使用，true状态表明正在使用
	 this.r = [];
}

waveObj.prototype.init = function() {
	for (var i = 0; i < this.num; i++) {
		this.alive[i] = false;
		this.r[i] = 0;
	}
}

waveObj.prototype.draw = function() {
	ctx1.save();
	ctx1.lineWidth = 2;
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i]) {
			// draw
			this.r[i] += deltaTime * 0.03;
			if (this.r[i] > 60) {
				this.r[i] = 60;
				this.alive[i] = false;
				break;
			}
			var alpha = 1 - this.r[i] / 60;
			ctx1.beginPath();
			ctx1.arc(this.x[i], this.y[i], this.r[i], 0, 2 * Math.PI);
			ctx1.closePath();
			ctx1.strokeStyle = 'rgba(255, 255, 255, ' + alpha + ')';
			ctx1.stroke();
		}
	}
	ctx1.restore();
}

waveObj.prototype.born = function(x, y) {
	for (var i = 0; i < this.num; i++) {
		if (!this.alive[i]) {
			// born
			this.alive[i] = true;
			this.r[i] = 10;
			this.x[i] = x;
			this.y[i] = y;
			return;
		}
	}
}