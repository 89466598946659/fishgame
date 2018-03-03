
var dataObj = function() {
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
}

dataObj.prototype.reset = function() {
	this.fruitNum = 0;
	this.double = 1;
}

dataObj.prototype.draw = function() {
	var w = canWidth;
	var h = canHeight;

	ctx1.save();
	ctx1.shadowBlur = 13;
	ctx1.shadowColor = 'white';
	ctx1.fillStyle = 'white';
	ctx1.font = '30px Verdana';
	ctx1.fillText('Score: ' + this.score, w * 0.5, h - 20);
	if (data.gameOver) {
		ctx1.font = '50px Verdana';
		this.alpha += deltaTime * 0.0005;
		if (this.alpha > 1) {
			this.alpha = 1;
		}
		ctx1.fillStyle = 'rgba(255, 255, 255, ' + this.alpha + ')';
		ctx1.fillText('Game Over!', w * 0.5, h * 0.5);
	}
	ctx1.restore();
}

dataObj.prototype.addScore = function() {
	this.score += this.fruitNum * 100 * this.double;
	this.fruitNum = 0;
	this.double = 1;
}