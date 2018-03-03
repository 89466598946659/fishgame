
window.requestAnimFrame = (function() {
	return window.requestAnimFrame 
		|| window.webkitRequestAnimFrame 
		|| window.mozRequestAnimFrame
		|| window.oRequestAnimFrame
		|| window.msRequestAnimFrame
		|| function(callback) {
			return window.setTimeout(callback, 1000 / 60 );
		}
})();

function lerpAngle(a, b, t) {     //每一次旋转的角度
	var d = b - a;
	if (d > Math.PI) d = d - 2 * Math.PI;
	if (d < -Math.PI) d = d + 2 * Math.PI;
	return a + d * t;
}

//aim：目标   cur：当前   ratio：百分比     每一次趋近的距离
function lerpDistance(aim, cur, ratio) {
	var delta = cur - aim;
	return aim + delta * ratio;
}

function calLength2(x1, y1, x2, y2) {    //计算两个点之间的距离，，， 先求平方和，再开平方
	return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
	// return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}