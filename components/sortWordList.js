

function sortWordList(wordList) {

	let newWordList = [];
	
  	wordList.forEach(specialFunction);

	function specialFunction (item, index, arr) {

		let spaceIndex = item.indexOf(' ');
		item = item.slice(0, spaceIndex) + item.slice(spaceIndex+1)

		let newArray = [item.toUpperCase().split(''), spaceIndex];

		newWordList.push(newArray)
	}

	return newWordList
}