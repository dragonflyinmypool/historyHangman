

function displayWord(word) {

	wordArray = word.split('');
	var wDisplay = document.getElementById('wDisplay');
	let wordBlock = '';
	
	for (var i = 0; i < word.length; i++) {
		
		wordBlock = wordBlock + '<div id="letterBox">'+ wordArray[i] + '</div>'
		wDisplay.innerHTML = wordBlock;
	}


}