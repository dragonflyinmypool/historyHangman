
// Word list catagory war
let wordList = ['12345678911', 'MUSKET', 'SWORD']
let catagories = ['war', 'peoples']

// Game variables
let current = {}
current.word = ''
current.livesLost = 0
current.correctLettersPicked = [];
current.chosenLetters = [];
current.catagory = 'peoples';


// NEW GAME AND HELPER FUNCTIONS
function newGame() {

	// RESET GAME VARIABLES
	current.livesLost = 0
	current.word = getRandomWord()
	current.chosenLetters = [];
	// Creat an array with zeros value for each letter
	current.correctLettersPicked = createZeroArray(current.word)

	// START COMPONENTS
	hangmanGraphic(current.livesLost)
	wordDisplay(current.word, current.correctLettersPicked)
	displayKeyboard(current.chosenLetters)
	gameMenu(catagories, current.catagory);
}
function getRandomWord() {

	let randomNumber = Math.floor(Math.random() * wordList.length);
	let word = wordList[randomNumber];

	return word
}
function createZeroArray(currentWord) {
	let newArray = [];

	for (let i=0; i < currentWord.length; i++){
		newArray.push(0)
	}

	return newArray
}

// LETTER CLICKED AND HELPER FUNCTIONS
function buttonClicked(letter) {

	// UPDATE VARIABLES
	// Updated keyboard
	current.chosenLetters.push(letter)
	displayKeyboard(current.chosenLetters)

	// GAME LOGIC
	// Check if {letter} is in the {current.word}
	var indexes = [], i;
	for (i = 0; i < current.word.length; i++) {
		if (current.word[i] === letter)
			indexes.push(i);	
	}
	
	// If letter is found:
	if (indexes[0] > -1) {

		// Update {current.correctLettersPicked}	
		for (var i = 0; i < indexes.length; i++) {
			current.correctLettersPicked[indexes[i]] = 1
		}	

		checkForWin();	
	
	// If letter is not found:	
	} else {

		//Play {wrongLetter} sound
		playSound(wrongLetter)

		// Take one life away and update {hangmanAnimation}
		current.livesLost = current.livesLost + 1;

		if(current.livesLost == 7) {
			gameOver();
		}
	}

	// UPDATE COMPONENTS
	hangmanGraphic(current.livesLost)
	wordDisplay(current.word, current.correctLettersPicked);
}
// Check for win
function checkForWin(){
	if (current.correctLettersPicked.includes(0) == false) {
		gameWon()
	} else {			
		//Play {correctLetter} sound
		playSound(correctLetter)
	}
}
// Game won
function gameWon () {
	console.log('You won')
	// Disable all keys
	displayKeyboard('abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''))
	playSound(solved)
}

// Game over
function gameOver() {

	console.log('You lost')
	//Play {gameOverSound} sound
	playSound(gameOverSound)
	
	// Show answer
	for (var i = 0; i < current.correctLettersPicked.length; i++) {
		current.correctLettersPicked[i] = 1
	}

	// Update components
	displayKeyboard('abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''))
	wordDisplay(current.word, current.correctLettersPicked);
	// Start new game after 5 seconds
}

// NEW GAME, SHOW ANSWER

// CHANGE CATAGORY


newGame();