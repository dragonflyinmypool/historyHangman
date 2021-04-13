

function displayWord(word, pickedLetters) {

	let wordArray = word.split('');
	var wDisplay = document.getElementById('wDisplay');
	let wordBlock = '';
	
	for (var i = 0; i < word.length; i++) {
		
		let letter = '';

		if (pickedLetters[i]) {
			letter = wordArray[i]
		}

		wordBlock = wordBlock + '<div id="letterBox">'+ letter + '</div>'
		wDisplay.innerHTML = wordBlock;

	}

}