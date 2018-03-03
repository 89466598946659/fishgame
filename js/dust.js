function dustObj() {
	this.x = [];
	this.y = [];
	this.amp = [];
	this.NO = [];
	this.alpha;
	this.num = 30;
}

dustObj.prototype.init = function () {
	for (var i = 0; i < this.num; i++) {
		this.x[i] = Math.random() * canWidth;
		this.y[i] = Math.random() * canHeight;
		this.amp[i] = 20 + Math.random() * 15;
		this.NO[i] = Math.floor(Math.random() * 7); // [0, 7)
	}
	this.alpha = 0;
}

dustObj.prototype.draw = function () {
	this.alpha += deltaTime * 0.0008;
	var l = Math.sin(this.alpha);

	for (var i = 0; i < this.num; i++) {
		ctx1.drawImage(dustPic[this.NO[i]], this.x[i] + this.amp[i] * l, this.y[i]);
	}
}