// DATA
const game = {
	world1: [
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	  [0, 0, -1, 2, 2, 2, 0, -2, 0, 0],
	  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
	  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
	  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
	  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
	  [0, 0, -3, 2, 2, 2, 2, -4, 0, 0],
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	],

	world2: [
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	  [0, 0, -1, 2, 2, 2, 2, -2, 0, 0],
	  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
	  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
	  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
	  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
	  [0, 0, -3, 2, 2, 2, 2, -4, 0, 0],
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	],

	world3: [
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	  [0, 0, -1, 2, 2, 2, 2, -2, 0, 0],
	  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
	  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
	  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
	  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
	  [0, 0, -3, 0, 2, 2, 2, -4, 0, 0],
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	],
	world4: [
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	  [0, 0, -1, 2, 2, 2, 2, -2, 0, 0],
	  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
	  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
	  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
	  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
	  [0, 0, -3, 2, 2, 2, 2, -4, 0, 0],
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	],
	startIndices: [[3, 6], [3, 6], [4, 6], [3, 6]],
	endIndices: [[6, 1], [1,3], [3,8], [8, 6]],
	endDirections: [0, 3, 2, 1],
	startDirection: 1,
	block: {
	  width: 40,
	  height: 40
	},
	movement: {
		MOVE: 0,
		TURN_LEFT: 1,
		TURN_RIGHT: 2
	},
	init: function() {
		this.worlds = [this.world1, this.world2, this.world3, this.world4];
		return this;
	}
}.init();

var currentWorld = 0;
var endIndex;
var endDirection;

var dogIndex;
var dogDirection;
let moves = [];
reset()

// GUI
var ctx, canvas;
let korelImg = new Image();
korelImg.src = "http://www.i2clipart.com/cliparts/3/b/1/c/1280453b1cb6ae270d5117c3c8c6035dab2097.png";

window.onload = function() {
	// JS GET ELEMENTS
	canvas = document.getElementById("grid");
	ctx = canvas.getContext('2d');
	//ctx.imageSmoothingEnabled = false;

	document.getElementById("worldSelection").onchange = onWorldChanged;
	document.getElementById("playButton").onclick = onPlay;


	// JS CODE
	draw();
}

function onWorldChanged(event) {
  currentWorld = parseInt(event.target.value, 10);
  reset();
  draw();
}

function onPlay() {
	moves.length = 0;
	start();
	window.setTimeout(replay, 300);
}

function replay() {
	console.log()
	if (moves.length > 0) {
		let move = moves.shift();
		if (move == game.movement.MOVE) {
			moveDog();
		} else if (move == game.movement.TURN_LEFT) {
			turnDogLeft();
		} else if (move == game.movement.TURN_RIGHT) {
			turnDogRight();
		}
		draw();
		if (isDogOutsideBoundary(dogIndex)) {
			setTimeout(function() {alert("your dog has left the park!");}, 300);
		} else if(isDogOnBox(dogIndex)) {
			setTimeout(function() {alert("your dog is on the wall!");}, 300);
		} else {
			setTimeout(replay, 300);
		}
	} else {
		var isCorrectIndex = endIndex[0] === dogIndex[0] && endIndex[1] === dogIndex[1];
		var isCorrectDirection = endDirection == dogDirection;
		var errorText = "";
		let didUserWin = false;
		if (!isCorrectIndex && !isCorrectDirection) {
			errorText = " Karel is at the wrong location AND is facing the wrong direction.";
		} else if (!isCorrectDirection) {
			errorText = " Karel is facing the wrong direction.";
		} else if (!isCorrectIndex) {
			errorText = " Karel is at the wrong location.";
		} else {
			didUserWin = true;
		}
		alert(didUserWin ? "You won!" : "You lost :(" + errorText);
	}
}

function moveDog() {
	moveIndexInDirection(dogDirection, dogIndex);
}

function getWorld() {
	return game.worlds[currentWorld];
}
function isDogOnBox(dogIndex) {
	
	return getWorld()[dogIndex[1]][dogIndex[0]] != 0;
}

function isDogOutsideBoundary(dogIndex) {
	let world = getWorld();
	return dogIndex[0] < 0 || dogIndex[0] >= world[0].length || dogIndex[1] < 0 || dogIndex[1] >= world.length;
}

function turnDogLeft() {
	dogDirection = turnDirectionLeft(dogDirection);
}

function turnDogRight() {
	dogDirection = turnDirectionRight(dogDirection);
}

// CANVAS
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid(game.worlds[currentWorld]);
  drawDog(dogIndex, dogDirection);
}

function drawGrid(grid) {
  for (var i = 0; i < grid.length; i++) {
    ctx.save();
    ctx.translate(0, i * game.block.height);
    for (var j = 0; j < grid[i].length; j++) {
      /* if (i === dogIndex[0] && j === dogIndex[1]) {
                gridUI.innerHTML += ">";
              } else {
                gridUI.innerHTML += "" + grid[i][j];
              } */
      gridValue = grid[i][j];
      if (gridValue === 0) {
        drawDot(ctx);
      } else if (gridValue === 1) {
        drawVertWall(ctx);
      } else if (gridValue === 2) {
        drawHorzWall(ctx);
      } else if (gridValue < 0) {
        drawCorner(ctx, gridValue);
      }
      ctx.translate(game.block.width, 0);

    }
    ctx.restore();
  }
}

function drawDot(ctx) {
  ctx.save();
  ctx.translate(game.block.width / 2, game.block.height / 2);
  ctx.beginPath();
  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();
}

function drawVertWall(ctx) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(game.block.width / 2, 0);
  ctx.lineTo(game.block.width / 2, game.block.height);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}

function drawHorzWall(ctx) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(0, game.block.height / 2);
  ctx.lineTo(game.block.width, game.block.height / 2);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}

function drawCorner(ctx, gridValue) {
  ctx.save();
  ctx.beginPath();
  if (gridValue === -1) {
    ctx.moveTo(game.block.width, game.block.height / 2);
    ctx.lineTo(game.block.width / 2, game.block.height / 2);
    ctx.lineTo(game.block.width / 2, game.block.height);
  } else if (gridValue === -2) {
    ctx.moveTo(0, game.block.height / 2);
    ctx.lineTo(game.block.width / 2, game.block.height / 2);
    ctx.lineTo(game.block.width / 2, game.block.height);
  } else if (gridValue === -3) {
    ctx.moveTo(game.block.width / 2, 0);
    ctx.lineTo(game.block.width / 2, game.block.height / 2);
    ctx.lineTo(game.block.width, game.block.height / 2);
  } else {
    ctx.moveTo(0, game.block.height / 2);
    ctx.lineTo(game.block.width / 2, game.block.height / 2);
    ctx.lineTo(game.block.width / 2, 0);
  }
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
}

function drawDog(dogIndex, dogDirection) {
	let dogSize = 35;
	let x = dogIndex[0] * game.block.width;
	let y = dogIndex[1] * game.block.height;
	ctx.save();

	console.log(`drawDog(): index: [${dogIndex[0]}, ${dogIndex[1]}], direction: ${dogDirection}`);

	ctx.translate(x, y);
	ctx.translate(dogSize / 2, dogSize / 2);
	var radians = 0;
	if (dogDirection === 0) {
		radians = -Math.PI / 2;
	} else if (dogDirection === 2 ) {
		radians = Math.PI / 2;
	} else if (dogDirection === 3) {
		ctx.scale(-1, 1);
	}
	ctx.rotate(radians);
	ctx.translate(-dogSize / 2, -dogSize / 2);
	ctx.drawImage(korelImg, 0, 0, dogSize, dogSize);
	ctx.restore();
}

function reset() {
	endIndex = game.endIndices[currentWorld].slice();
	endDirection = game.endDirections[currentWorld];
	dogIndex = game.startIndices[currentWorld].slice();
	dogDirection = game.startDirection;
	logicalDogIndex = dogIndex.slice();
	logicalDogDirection = dogDirection;
}

function moveIndexInDirection(direction, index) {
	if (direction == 0) {
		index[1] -= 1;
	} else if (direction == 1) {
		index[0] += 1;
	} else if (direction == 2) {
		index[1] +=1;
	} else if (direction == 3) {
		index[0] -= 1;
	}
}

function turnDirectionLeft(direction) {
	if (direction == 0) {
		direction = 3;
	} else if (direction == 1) {
		direction = 0;
	} else if (direction == 2) {
		direction = 1;
	} else if (direction == 3) {
		direction = 2;
	}
	return direction;
}

function turnDirectionRight(direction) {
	if (direction == 0) {
		direction = 1;
	} else if (direction == 1) {
		direction = 2;
	} else if (direction == 2) {
		direction = 3;
	} else if (direction == 3) {
		direction = 0;
	}
	return direction;
}

// KOREL METHODS

function move() {
	moves.push(game.movement.MOVE);
	let dogIndex = logicalDogIndex.slice();
	moveIndexInDirection(logicalDogDirection, dogIndex);
	

	if (isDogOutsideBoundary(dogIndex)) {
		console.log("%cCan't move due to leaving boundary", "color: red");
	} else if(isDogOnBox(dogIndex)) {
		console.log("%cCan't move due to obstruction", "color: red");
	} else {
		logicalDogIndex = dogIndex;
	}
	console.log(`logicalDogIndex: [${logicalDogIndex[0]}, ${logicalDogIndex[1]}]`);
}

function turnLeft() {
	moves.push(game.movement.TURN_LEFT);
	logicalDogDirection = turnDirectionLeft(logicalDogDirection);
}

function turnRight() {
	moves.push(game.movement.TURN_RIGHT);
	logicalDogDirection = turnDirectionRight(logicalDogDirection);
}

function frontIsClear() {
	let dogIndex = logicalDogIndex.slice();
	moveIndexInDirection(logicalDogDirection, dogIndex);
	let world = getWorld();
	return world[dogIndex[1]][dogIndex[0]] == 0;
}

function frontIsBlocked() {
	return !frontIsClear();
}

function leftIsBlocked() {
	let dogIndex = logicalDogIndex.slice();
	let directionToLeft = turnDirectionLeft(logicalDogDirection);
	moveIndexInDirection(directionToLeft, dogIndex);

	let world = getWorld();
	return world[dogIndex[1]][dogIndex[0]] != 0;
}

function rightIsBlocked() {
	let dogIndex = logicalDogIndex.slice();
	let directionToRight = turnDirectionRight(logicalDogDirection);
	moveIndexInDirection(directionToRight, dogIndex);

	let world = getWorld();
	return world[dogIndex[1]][dogIndex[0]] != 0;
}
