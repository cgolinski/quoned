const LETTER_EMPTY = undefined;

class CellData {
	constructor() {
		this.letter = LETTER_EMPTY;
		this.error = false;
	}

	setLetter(letter) {
		this.letter = letter;
		return this;
	}

	clearLetter() {
		this.letter = LETTER_EMPTY;
		this.setError(false);
		return this;
	}

	setError(error) {
		this.error = error;
		return this;
	}
}

export default CellData;