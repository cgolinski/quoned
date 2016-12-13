const shuffle = require('lodash/shuffle');

export function createStartingHand(number, letterPile) {
  return letterPile.peel(number);
}

class LetterPile {
	constructor(letters) {
		this._letters = shuffle(letters).slice(0,30);
	}

	count() {
		return this._letters.length;
	}

	peel(numberOfLettersToPeel) {
		return this._letters.splice(0, numberOfLettersToPeel);
	}
}

export default LetterPile;