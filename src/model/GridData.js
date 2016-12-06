import {create2DArray, fill2DArray} from '../helpers/array.js';
import CellData from './CellData.js';


export default function createGridData(rowCount, colCount, startingLetters_ = []) {
	var startingCellData = startingLetters_.map(letter => (new CellData()).setLetter(letter));

	var emptyCells = rowCount * colCount - startingCellData.length;
	var emptyCellData = (new Array(emptyCells)).map(() => new CellData());

	var allCellData = startingCellData.concat(emptyCellData);

	var gridData = fill2DArray(create2DArray(rowCount, colCount), allCellData);

	return gridData;
}