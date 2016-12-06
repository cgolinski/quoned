// set state showErrors. when first tile is moved, set state showErrors = false, and clear all cellData.error


//import cell data into gridData. 

//In GridData, fill2DArray with initial values (CellData?) same as in app.js. 
//Newly initialized cellData objects
 

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