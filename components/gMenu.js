function gameMenu() {
	
	var gMenu = document.getElementById('gMenu');

	gMenu.innerHTML = `
		<button onclick="startNewGame()">NEW GAME</button> 
		<button onclick="gameOver()">SHOW ANSWER</button>
		<select id="catagory" name="catagory">
	    	<option value="presidents">PRESIDENTS</option>
	    	<option value="wars">WARS</option>
	    	<option value="wars">RIVERS</option>	    	
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
			background: black;
			margin-right: 2px;
			margin-left: 12px;
			border-radius: 8px;			
			border: 1px solid #00bd00;
		}
		
		#catagory {
			background-color:black;
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
