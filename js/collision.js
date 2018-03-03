function momFruitsCollision() {
	if (data.gameOver) {
		return;
	}
	for (var i = 0; i < fruit.num; i++) {
		if (fruit.alive[i]) {
			var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
			if (l < 900) {
				fruit.dead(i);

				data.fruitNum++;
				mom.momBodyCount++;
				if (mom.momBodyCount > 7) {
					mom.momBodyCount = 7;
				}
				if (fruit.fruitType[i] === 'blue') {
					data.double = 2;
				}
				wave.born(fruit.x[i], fruit.y[i]);
			}
		}
	}
}

function momBabyCollision() {
	if (data.gameOver) {
		return;
	}
	if (data.fruitNum > 0) {
		var l = calLength2(baby.x, baby.y, mom.x, mom.y);
		if (l < 900) {
			// 复活
			baby.babyBodyCount = 0;
			mom.momBodyCount = 0; 
			data.addScore();
			halo.born(baby.x, baby.y);
		}
	}
}

