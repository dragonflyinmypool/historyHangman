

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

	chosenKeyboardCharacters.push(letter)
	// Disable letter from keyboard
	displayKeyboard(chosenKeyboardCharacters)

	console.log(currentWord)

	// Check if {letter} is in the {currentWord}, and check for the position of {letter} in {currentWord}
	var indexes = [], i;
	for (i = 0; i < currentWord.length; i++) {
		if (currentWord[i] === letter)
			indexes.push(i);	
	}

	console.log(indexes[0])
	// If letter is found, do the following:
	if (indexes[0] > -1) {
		// Update word display
		console.log('You found the correct letter!')
		
		for (var i = 0; i < indexes.length; i++) {
			visibleLettersInDisplay[indexes[i]] = 1
		}
		displayWord(currentWord, visibleLettersInDisplay);
		
	} else {
		settings.lives = settings.lives - 1;

		console.log(settings.lives)
		hangmanAnimation(settings.lives)
		console.log('Wrong letter!')

	}

}

function showAnswer() {
	console.log('Show the answer')
}

startNewGame()