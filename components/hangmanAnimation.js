
function hangmanAnimation(lives) {
	var canvas = document.getElementById('hangmanAnimation');
	var ctx = canvas.getContext("2d");

	draw(7 - lives)

	function draw(step) {

		
		switch(step) {

			case 0:
				ctx.clearRect(0, 0, canvas.width, canvas.height);

				// Base
				ctx.beginPath();
				ctx.lineWidth = 6;
				ctx.strokeStyle = '#00bd00';

				ctx.moveTo(0, 145);
				ctx.lineTo(80, 145);

				ctx.moveTo(40, 145);
				ctx.lineTo(40, 25);
				ctx.lineTo(123, 25);
				ctx.stroke();
			break;

			case 1: 
				// Noose
				ctx.beginPath();
				ctx.moveTo(120, 28);
				ctx.lineTo(120, 45);
				ctx.stroke();
			break;

			case 2: 
				// Head
				ctx.beginPath();
				ctx.arc(120, 55, 12, 0, 2 * Math.PI);
				ctx.stroke();
			break;

			case 3:
				// Body
				ctx.beginPath();
				ctx.moveTo(120, 65);
				ctx.lineTo(120, 105);
				ctx.stroke();
			break;

			case 4:
				// Arm 1
				ctx.beginPath();
				ctx.moveTo(120, 75);
				ctx.lineTo(105, 90);
				ctx.stroke();
			break;

			case 5:
				// Arm 2
				ctx.beginPath();
				ctx.moveTo(120, 75);
				ctx.lineTo(135, 90);
				ctx.stroke();
			break;

			case 6:
				// Leg 1
				ctx.beginPath();
				ctx.moveTo(120, 105);
				ctx.lineTo(135, 132);
				ctx.stroke();
			break;

			case 7:
				// Leg 2
				ctx.beginPath();
				ctx.moveTo(120, 105);
				ctx.lineTo(105, 132);
				ctx.stroke();
			break;
		}

	}

	// Your CSS as text
	var styles = `
	   
		#hGraphic {
			background-color: black;
		}

	`

	var styleSheet = document.createElement("style")
	styleSheet.type = "text/css"
	styleSheet.innerText = styles
	document.head.appendChild(styleSheet)
}