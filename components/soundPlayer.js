

// Load sounds
var correctLetter = new Howl({
	src: ['./sounds/correctLetter.mp3']
});

var wrongLetter = new Howl({
	src: ['./sounds/wrongLetter.mp3']
});

var solved = new Howl({
	src: ['./sounds/solved.mp3']
});

var gameOverSound = new Howl({
	src: ['./sounds/gameOver.mp3']
});

function playSound(e) {
	e.play()
}