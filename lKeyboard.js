

function displayKeyboard(omitLetters) {

	var lKeyboard = document.getElementById('lKeyboard');

	let letterArray = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')

	
	function addHtml(e) {
		
		let onclick = `onclick=buttonClicked('${e}')`;		

		if (omitLetters.includes(e)) {
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
}