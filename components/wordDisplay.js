

function displayWord(word, visibleLettersInDisplay, currentSpace) {

	var wDisplay = document.getElementById('wDisplay');
	let wordBlock = '';


	
	for (var i = 0; i < word.length; i++) {
		
		let letter = '';

		//Add new line
		if (i == currentSpace) {
			
		}

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
			color:#006064;
		}
	`

	var styleSheet = document.createElement("style")
	styleSheet.type = "text/css"
	styleSheet.innerText = styles
	document.head.appendChild(styleSheet)

}



