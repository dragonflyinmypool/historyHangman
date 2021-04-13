

// Words
const words = ['Lincoln', 'Einstein', 'Washington'];
const cWords = words.map( n => n.toUpperCase())

// Game settings
let lives = 5;
let pickedLetters = [];
let wordArray1 = [];
let pickedLetters2 = [];

// *** Start the game ***
function startNewGame() {

	displayKeyboard('')
	// Get random word
	let word = cWords[Math.floor(Math.random() * words.length)]

	// Set pick letters tracker
	wordArray1 = word.split('');
	pickedLetters = wordArray1.map( n => 0);

	// Send word to display
	displayWord(word, pickedLetters);

}


// Letter clicked
function buttonClicked(e) {

	pickedLetters2.push(e)
	// Disable letter from keyboard
	displayKeyboard(pickedLetters2)

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