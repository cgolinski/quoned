const shuffle = require('lodash/shuffle');

class LetterPile {
	constructor(letters) {
		this._letters = shuffle(letters);
	}

	count() {
		return this._letters.length;
	}

	peel(numberOfLettersToPeel) {
		return this._letters.splice(0, numberOfLettersToPeel);
	}
}

export default LetterPile;