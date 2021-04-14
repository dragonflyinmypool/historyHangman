

// Words
const wordList = ['Lincoln', 'Einstein', 'Washington'];
const capitalizedWordList = wordList.map( n => n.toUpperCase())

// Game settings
var settings = {
	lives: 7,	
}

let chosenKeyboardCharacters = [];
let visibleLettersInDisplay = [];
let currentWord = '';

// *** Start the game ***
function startNewGame() {
	


	// Reset lives
	settings.lives = 7
	// Reset chosen characters
 	chosenKeyboardCharacters = []
 	// Get random word
	currentWord = capitalizedWordList[Math.floor(Math.random() * capitalizedWordList.length)].split('')
	// Reset visible letters
	visibleLettersInDisplay = currentWord.map( n => 0);

	// Start animation
	hangmanAnimation(settings.lives)
	// Start keyboard
	displayKeyboard(chosenKeyboardCharacters)
	// Start game menu
	gameMenu()
	
	// Send word to display
	displayWord(currentWord, visibleLettersInDisplay);
}

// Letter clicked
function buttonClicked(letter) {


	// Updated key board
	chosenKeyboardCharacters.push(letter)
	displayKeyboard(chosenKeyboardCharacters)


	// Check if {letter} is in the {currentWord}
	var indexes = [], i;
	for (i = 0; i < currentWord.length; i++) {
		if (currentWord[i] === letter)
			indexes.push(i);	
	}
	
	// If letter is found:
	if (indexes[0] > -1) {

		//Play {correctLetter} sound
		playSound(correctLetter)

		// Update {visibleLettersInDisplay}	
		for (var i = 0; i < indexes.length; i++) {
			visibleLettersInDisplay[indexes[i]] = 1
		}
		// Send updated {visibleLettersInDisplay} to {displayWord}
		displayWord(currentWord, visibleLettersInDisplay);
	
	// If letter is not found:	
	} else {

		//Play {wrongLetter} sound
		playSound(wrongLetter)

		// Take one life away and update {hangmanAnimation}
		settings.lives = settings.lives - 1;
		hangmanAnimation(settings.lives)
		if(settings.lives == 0) {
			gameOver();
		}
	}
}

// Game over
function gameOver() {
	console.log('The game is over')

	//Play {gameOverSound} sound
	playSound(gameOverSound)
	// Disable all keys
	displayKeyboard('abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''))

	// Show answer
	for (var i = 0; i < visibleLettersInDisplay.length; i++) {
		visibleLettersInDisplay[i] = 1
	}

	displayWord(currentWord, visibleLettersInDisplay);
	// Start new game after 5 seconds
}

startNewGame()
