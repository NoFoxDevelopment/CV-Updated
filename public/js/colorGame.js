var colors = randomColors(difficulty);
var difficulty = 6;
var squares = document.querySelectorAll('.square');
var goalColor = pickColor();
var colorDisplay = document.querySelector('.goal');
var message = document.querySelector('.message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function () {
	easyBtn.classList.add('selected');
	hardBtn.classList.remove('selected');
	difficulty = 3;
	newGame();
})
hardBtn.addEventListener('click', function () {
	hardBtn.classList.add('selected');
	easyBtn.classList.remove('selected');
	difficulty = 6;
	newGame();
})

window.onload = newGame();

resetButton.addEventListener('click', function () {
	newGame();
})

function newGame() {
	//generate all new colors
	colors = randomColors(difficulty);
	//pick a new reandom color from array
	goalColor = pickColor();
	colorDisplay.textContent = goalColor;
	//change colors of squares
	genSquares();
	message.textContent = '';
	resetButton.textContent = 'New Colors'
	h1.style.backgroundColor = '#D84700';
}

function genSquares() {
	for (let i = 0; i < squares.length; i++) {
		if (colors[i]) {
			//initial colors
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = 'block';
		} else {
			squares[i].style.display = 'none';
		}
		//click listeners
		squares[i].addEventListener('click', function () {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to goalColor
			clickedColor === goalColor ? (
				resetButton.textContent = 'Play Again',
				changeColors(goalColor),
				h1.style.backgroundColor = clickedColor,
				message.textContent = 'Correct'
			) : (
					this.style.backgroundColor = 'rgba(0, 0, 0, 0)',
					message.textContent = 'Try Again'
				);
		});
	}
}

function changeColors(color) {
	for (let i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	// pick a random number between 0 and 2 or 0 and 5 for easy/hard respectively
	var randNum = Math.floor(Math.random() * colors.length);
	//return 
	return colors[randNum];
}

function randomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to array
	for (let i = 0; i < num; i++) {
		//get Random Color and push to array
		arr.push(colorCreator());
	}
	//return array
	return arr;
}

function colorCreator() {
	// pick a red
	var r = Math.floor(Math.random() * 255);
	// pick a green
	var g = Math.floor(Math.random() * 255);
	//pick a blue
	var b = Math.floor(Math.random() * 255);
	//return color as rbg()
	return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}	