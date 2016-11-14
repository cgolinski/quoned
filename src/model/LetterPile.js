const shuffle = require('lodash/shuffle');

class LetterPile {
	constructor(letters) {
		this._letters = shuffle(letters);
	}

	peel(numberOfLettersToPeel) {
		return this._letters.splice(0, numberOfLettersToPeel);
	}
}

export default LetterPile;