function gameMenu(catagories, currentCategory) {
	
	var gMenu = document.getElementById('gameMenu');

	let htmlContent = '';
	let selected = '';

	function catagoriesHtml (e) {
		if (e == currentCategory) {
			selected = 'selected '
		} else {
			selected = ''
		}

		htmlContent = htmlContent + `<option ${selected} value="${e}">${e.toUpperCase()}</option>`
	}

	catagories.forEach(catagoriesHtml)


	


	gMenu.innerHTML = `
		<button onclick="newGame()">NEW GAME</button> 
		<button id="showAnswerButton" onclick="gameOver()">SHOW ANSWER</button>
		<select id="catagory" name="catagory" onchange="catagorySwitched()">
	 	${htmlContent}    	
	  	</select>	
	`;


	// CSS
	var styles = `
	    
		#gameMenu {
			color: #00bd00;
			display: flex;
			justify-content: center;
		}

		#gameMenu > * {
			height: 40px;
			color: #00bd00;
			outline: none;
			background: transparent;
			margin-right: 2px;
			margin-left: 12px;
			border-radius: 8px;			
			border: 1px solid #00bd00;
		}
		
		#catagory {
			color: #00bd00;
			outline: none;
			border: 1px solid #00bd00;
			border-radius: 8px;
			text-align: center;		
		}

		#catagory > * {
			text-align: center;		
		}

		.disabledButton {
			color: rgb(100,100,100) !important; 
			border: 1px solid rgb(100,100,100) !important;
		}
	`

	var styleSheet = document.createElement("style")
	styleSheet.type = "text/css"
	styleSheet.innerText = styles
	document.head.appendChild(styleSheet)
}
