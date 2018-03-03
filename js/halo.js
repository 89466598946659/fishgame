function haloObj() {
	this.x = [];
	this.y = [];
	this.alive = [];
	this.r = [];
	this.num = 5;
}

haloObj.prototype.init = function() {
	for (var i = 0; i < this.num; i++) {
		this.x[i] = 0;
		this.y[i] = 0;
		this.r[i] = 0;
		this.alive[i] = false;
	}
}

haloObj.prototype.draw = function() {
	ctx1.save();
	ctx1.lineWidth = 2;
	ctx1.shadowBlur = 2;
	ctx1.shadowColor = 'rgba(203, 91, 0, 1)';
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
			ctx1.strokeStyle = 'rgba(203, 91, 0, ' + alpha + ')';
			ctx1.stroke();
		}
	}
	ctx1.restore();
}

haloObj.prototype.born = function(x, y) {
	for (var i = 0; i < this.num; i++) {
		if (!this.alive[i]) {
			// born
			this.alive[i] = true;
			this.r[i] = 15;
			this.x[i] = x;
			this.y[i] = y;
			return;
		}
	}
}