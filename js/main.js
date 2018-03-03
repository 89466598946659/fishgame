var can1;
var can2;
var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var bgPic = new Image();

var ane;
var fruit;
var mom;
var baby;
var data;
var wave;
var halo;
var dust;
var dustPic = [];
var babyTail = [];
var babyEye = [];
var babyBody = [];

var momTail = [];
var momEye = [];
var momBodyOrange = [];
var momBodyBlue = [];

var mx;
var my;


document.body.onload = game;

function game() {
	init();
	gameloop();
}

function init() {
	lastTime = Date.now();
	// 上面一层canvas: fishes, dust, UI, circle
	can1 = document.getElementById('canvas1');
	ctx1 = can1.getContext('2d');
	// 下面一层canvas: background, ane, fruits
	can2 = document.getElementById('canvas2');
	ctx2 = can2.getContext('2d');

	can1.addEventListener('mousemove', onMouseMove, false);

	bgPic.src = './images/background.jpg';
	canWidth = can1.width;
	canHeight = can1.height;

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	mx = canWidth * 0.5;
	my = canHeight * 0.5;

	for (var i = 0; i < 8; i++) {
		babyTail[i] = new Image();
		babyTail[i].src = './images/babyTail' + i + '.png';
	}
	for (var i = 0; i < 2; i++) {
		babyEye[i] = new Image();
		babyEye[i].src = './images/babyEye' + i + '.png';
	}
	for (var i = 0; i < 20; i++) {
		babyBody[i] = new Image();
		babyBody[i].src = './images/babyFade' + i + '.png';
	}

	for (var i = 0; i < 8; i++) {
		momTail[i] = new Image();
		momTail[i].src = './images/bigTail' + i + '.png';
	}
	for (var i = 0; i < 2; i++) {
		momEye[i] = new Image();
		momEye[i].src = './images/bigEye' + i + '.png';
	}
	for (var i = 0; i < 8; i++) {
		momBodyOrange[i] = new Image();
		momBodyBlue[i] = new Image();
		momBodyOrange[i].src = './images/bigSwim' + i + '.png';
		momBodyBlue[i].src = './images/bigSwimBlue' + i + '.png';
	}

	ctx1.fillStyle = 'white';
	ctx1.textAlign = 'center';
	data = new dataObj();
	wave = new waveObj();
	wave.init();
	halo = new haloObj();
	halo.init();

	for (var i = 0; i < 7; i++) {
		dustPic[i] = new Image();
		dustPic[i].src = './images/dust' + i + '.png';
	}
	dust = new dustObj();
	dust.init();
}

function gameloop() {
	window.requestAnimFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if (deltaTime > 40) {
		deltaTime = 40;
	}

	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0, 0, canWidth, canHeight);
	mom.draw();
	baby.draw();
	data.draw();
	momFruitsCollision();
	momBabyCollision();
	wave.draw();
	halo.draw();
	dust.draw();
}

function onMouseMove(e) {
	if (data.gameOver) {
		return;
	}
	mx = e.offSetX || e.layerX;
	my = e.offSetY || e.layerY;
}