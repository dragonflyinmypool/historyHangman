

const rawWordList = ['baby blues', 'i love', 'humble people'];
const wordList = sortWordList(rawWordList);

const catagories = ['countries', 'wars', 'rivers']


// Game settings
var settings = {
	lives: 7,
	catagory: 'rivers',
	difficulty: 1
}

let chosenKeyboardCharacters = [];
let visibleLettersInDisplay = [];
let currentWord = '';

// *** Start the game ***
function startNewGame() {

	let randomNumber = Math.floor(Math.random() * wordList.length);

	// Get random word
	currentWord = wordList[randomNumber][0];
	currentSpace = wordList[randomNumber][1];

	// Reset lives
	settings.lives = 7
	// Reset chosen characters
 	chosenKeyboardCharacters = []
	// Reset visible letters
	visibleLettersInDisplay = currentWord.map( n => 0);

	// Reset animation
	hangmanAnimation(settings.lives)
	// Reset display
	displayWord(currentWord, visibleLettersInDisplay, currentSpace);
	// Reset keyboard
	displayKeyboard(chosenKeyboardCharacters)
	// Reset game menu
	gameMenu(catagories, settings.catagory)	
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

		// Update {visibleLettersInDisplay}	
		for (var i = 0; i < indexes.length; i++) {
			visibleLettersInDisplay[indexes[i]] = 1
		}
		// Send updated {visibleLettersInDisplay} to {displayWord}
		displayWord(currentWord, visibleLettersInDisplay);
	

		checkForWin();	
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

// Check for win
function checkForWin(){
	if (visibleLettersInDisplay.includes(0) == false) {
		gameWon()
	} else {			
		//Play {correctLetter} sound
		playSound(correctLetter)
	}
}

// Game over
function gameOver() {

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

// Game won	
function gameWon () {
	console.log('You won')
	// Disable all keys
	displayKeyboard('abcdefghijklmnopqrstuvwxyz'.toUpperCase().split(''))
	playSound(solved)
}

startNewGame()
