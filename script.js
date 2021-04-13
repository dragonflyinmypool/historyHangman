

// Words
const wordList = ['Lincoln', 'Einstein', 'Washington'];
const capitalizedWordList = wordList.map( n => n.toUpperCase())

// Game settings
var settings = {
	lives: 5,	
}

let chosenKeyboardCharacters = [];
let visibleLettersInDisplay = [];

// *** Start the game ***
function startNewGame() {

	// Reset lives
	settings.lives = 5
	// Reset chosen characters
 	chosenKeyboardCharacters = []
 	// Get random word
	let currentWord = capitalizedWordList[Math.floor(Math.random() * capitalizedWordList.length)]
	// Reset visible letters
	visibleLettersInDisplay = currentWord.split('').map( n => 0);

	// Start animation
	hangmanAnimation()
	// Start keyboard
	displayKeyboard(chosenKeyboardCharacters)
	// Start game menu
	gameMenu()

	
	
	// Send word to display
	displayWord(currentWord, visibleLettersInDisplay);
}


// Letter clicked
function buttonClicked(e) {

	chosenKeyboardCharacters.push(e)
	// Disable letter from keyboard
	displayKeyboard(chosenKeyboardCharacters)

	// Check if letter is in the word
	
		// If yes => 
			//Check were letter is in the word
			//Reveal letter in display
		
		// If no =>
			// Reduce lives by 1

}

function showAnswer() {
	console.log('Show the answer')
}

startNewGame()