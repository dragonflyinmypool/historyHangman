
var lKeyboard = document.getElementById('lKeyboard');

let letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
let letterArray = letters.split('')
 
const keys = letterArray.map(x => '<div>' + x +'</div>')

console.log(keys)

let keys2 =''

for (var i = 0; i < keys.length ; i++) {
	keys2 = keys2 + keys[i]

}

lKeyboard.innerHTML = keys2;
