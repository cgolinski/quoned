import {create2DArray, fill2DArray} from '../helpers/array.js';
import CellData from './CellData.js';


export function createGridData(rowCount, colCount) {
	var gridData = [];
  
  for(var i = 0; i < rowCount; i++){
    gridData.push([]); 
  
    for(var j = 0; j < colCount; j++){
      gridData[i].push(new CellData());
    }
  }

 return gridData;
}


export function fillGridData(gridData, letters){
  row_loop: 
  for(var row = 0; row < gridData.length; row++){  
    for(var cell = 0; cell < gridData[row].length; cell++){
      if (gridData[row][cell].letter === undefined) {
        gridData[row][cell].setLetter(letters.shift());
        if (letters.length === 0) {
          break row_loop;
        }
      }
    }
  }
  return gridData;
}