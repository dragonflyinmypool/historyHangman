

function displayWord(word, visibleLettersInDisplay) {
		console.log(word)		

	var wDisplay = document.getElementById('wDisplay');
	let wordBlock = '';
	
	for (var i = 0; i < word.length; i++) {
		
		let letter = '';

		if (visibleLettersInDisplay[i]) {
			letter = word[i]
		}

		wordBlock = wordBlock + '<div id="letterBox">'+ letter + '</div>'
		wDisplay.innerHTML = wordBlock;

	}

	// CSS
	var styles = `
		#wDisplay {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 25px;
		}
	`

	var styleSheet = document.createElement("style")
	styleSheet.type = "text/css"
	styleSheet.innerText = styles
	document.head.appendChild(styleSheet)

}



