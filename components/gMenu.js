function gameMenu(catagories, currentCategory) {
	
	var gMenu = document.getElementById('gMenu');

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
		<button onclick="startNewGame()">NEW GAME</button> 
		<button onclick="gameOver()">SHOW ANSWER</button>
		<select id="catagory" name="catagory">
	 	${htmlContent}    	
	  	</select>	
	`;


	// CSS
	var styles = `
	    
		#gMenu {
			color: #00bd00;
			display: flex;
			justify-content: center;
		}

		#gMenu > * {
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
			color: rgb(100,100,100); 
			border: 1px solid rgb(100,100,100) !important;
		}
	`

	var styleSheet = document.createElement("style")
	styleSheet.type = "text/css"
	styleSheet.innerText = styles
	document.head.appendChild(styleSheet)
}
