var aneObj = function() {
	// start point, end point(sin), control point
	this.rootx = [];	// 起始点，海葵最底部
	this.headx = []; // 结束点
	this.heady = []; // 结束点
	this.amp = []; // 振幅
	this.num = 50;
	this.alpha = 0;
}

aneObj.prototype.init = function() {
	for (var i=0; i<this.num; i++) {
		this.rootx[i] = i * 16 + Math.random() * 20; //[0,1)
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - 250 + Math.random() * 50;
		this.amp[i] = Math.random() * 40 + 60;
	}

}

aneObj.prototype.draw = function() {
	this.alpha += deltaTime * 0.0008;
	var l = Math.sin(this.alpha); // [-1, 1]
	ctx2.save();
	ctx2.globalAlpha = 0.6;
	ctx2.strokeStyle = '#3b154e';
	ctx2.lineWidth = 20;
	ctx2.lineCap = 'round';
	for (var i=0; i<this.num; i++) {
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i], canHeight);
		this.headx[i] = this.rootx[i] + l * this.amp[i];
		ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i]);
		ctx2.stroke();
	}
	ctx2.restore();
}


