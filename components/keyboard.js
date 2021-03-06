

function displayKeyboard(characterWhichHaveBeenChosen) {
	
	var lKeyboard = document.getElementById('letterKeyboard');

	let letterArray = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

	
	function addHtml(e) {
		

		let onclick = `onclick=buttonClicked('${e}')`;		

		if (characterWhichHaveBeenChosen.includes(e)) {
			onclick = 'class="disabledButton"'
		}

		let a = `<div id='${e}' ${onclick} > ${e} </div>`

		return a 
	}

	const keys = letterArray.map(addHtml)

	let keys2 =''

	for (var i = 0; i < keys.length ; i++) {
		keys2 = keys2 + keys[i]

	}

	lKeyboard.innerHTML = keys2;


	// CSS
	var styles = `
		#letterKeyboard {
			display: grid;
			grid-template-columns: repeat(6, 40px);
			grid-gap: 16px;
			color: #00bd00;
			align-items: center;
			justify-content: center;
		}

		#letterKeyboard > * {
			border: 1px solid #00bd00;
			height: 40px;
			font-size: 25px;
			line-height: 40px;
			border-radius: 8px;
			font-weight: 300;
		}
		
		#letterBox {
			height: 30px;
			line-height: 30px;
			width: 25px;
			background-color: #00bd00;
			margin: 2px;
		}
	`

	var styleSheet = document.createElement("style")
	styleSheet.type = "text/css"
	styleSheet.innerText = styles
	document.head.appendChild(styleSheet)
}



