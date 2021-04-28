
function wordDisplay(word, visibleLettersInDisplay) {
	

	var wDisplay = document.getElementById('wordDisplay');
	let wordBlock = '';


	// Create boxes, insert letter if it has been picked
	for (var i = 0; i < word.length; i++) {
		
		let letter = '';

		if (visibleLettersInDisplay[i]) {
			letter = word[i]
		}

		wordBlock = wordBlock + '<div class="letterBox">'+ letter + '</div>'
		wDisplay.innerHTML = wordBlock;
	}




	// CSS
	var styles = `
		#wordDisplay {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 23px;
			color: #006064;
		}
		.letterBox {
			width: 25px;
			height: 30px;
			margin: 3px;
			line-height: 33px;
			background-color: #00bd00;
		}


	`

	var styleSheet = document.createElement("style")
	styleSheet.type = "text/css"
	styleSheet.innerText = styles
	document.head.appendChild(styleSheet)

}