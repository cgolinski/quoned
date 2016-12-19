import CellData from './CellData.js';
import {flatten} from 'lodash';

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

export function fillGridData(gridData, letters) {
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

export function clearErrors (gridData) {
  for(var row = 0; row < gridData.length; row++){  
    for(var cell = 0; cell < gridData[row].length; cell++){
      gridData[row][cell].setError(false);
    }
  }
  return gridData;
}

export function findWords(gridData) {
  var numOfRows = gridData.length;
  var numOfCols = gridData[0].length;
  var word = '';
  var rowWords = [];
  var colWords = [];
  var startingRow;
  var startingCol;
  
  for (let row = 0; row < numOfRows; row++) {
    for (let col = 0; col < numOfCols; col++) {
      let cellLetter    = gridData[row][col].letter;
      let cellHasLetter = cellLetter !== undefined;
      let isLastCell    = col === numOfCols - 1;

      if (cellHasLetter) {
        if (word === '') {
          startingRow = row;
          startingCol = col;
        }
        word += cellLetter;
      }

      if (!cellHasLetter || isLastCell) {
        let wordIsNotEmpty = word !== '';
        if (wordIsNotEmpty) {
          rowWords.push({
            word: word,
            startingRow: startingRow, 
            startingCol: startingCol,
            endingRow: startingRow,
            endingCol: startingCol + word.length - 1,
          });
          word = '';
        }
      }
    }
  }

  for (let col = 0; col < numOfCols; col++) {
    for (let row = 0; row < numOfRows; row++) {
      let cellLetter    = gridData[row][col].letter;
      let cellHasLetter = cellLetter !== undefined;
      let isLastCell    = row === numOfRows - 1;

      if (cellHasLetter) {
        if (word === '') {
          startingRow = row;
          startingCol = col;
        }
        word += cellLetter;
      } 
      if (!cellHasLetter || isLastCell) {
        let wordIsNotEmpty = word !== '';
        if (wordIsNotEmpty) {
          colWords.push({
            word: word,
            startingRow: startingRow, 
            startingCol: startingCol,
            endingRow: startingRow + word.length - 1,
            endingCol: startingCol,
          });
          word = '';
        }
      }
    }
  }
  var allWords = rowWords.concat(colWords);
  console.log('allWords: ', allWords);
  return allWords;
}

export function checkWords (allWords, dictionary) {
  // if word is in dictionary, move onto next item in array
  // if word is not in dictionary, throw error to user (highlight word)
  var nonWords = [];
  for (var i = 0; i < allWords.length; i++) {
    if (!dictionary.has(allWords[i].word)) {
      nonWords.push(allWords[i]);
    }
  }
  console.log('nonWords: ', nonWords);
  return nonWords;
}

export function removeSingleLetterWords (nonWords) {
  return nonWords.filter(function(item) {
    return item.word.length > 1;
  });
}

export function setNonWordErrorCells (gridData, nonWords) {
  for (var i = 0; i < nonWords.length; i++) {
    for (var j = nonWords[i].startingRow; j < nonWords[i].endingRow + 1; j++) {
      for (var k = nonWords[i].startingCol; k < nonWords[i].endingCol + 1; k++) {
        gridData[j][k].setError(true);
      }
    }
  }
  return gridData;
}

export function findFirstLetter (gridData) { 
  var numOfRows = gridData.length;
  var numOfCols = gridData[0].length;
  
  for (let row = 0; row < numOfRows; row++) {
    for (let col = 0; col < numOfCols; col++) {
      let cellLetter = gridData[row][col].letter
      let cellHasLetter = cellLetter !== undefined;

      if (cellHasLetter) {
        console.log('firstletter is in row: ', row, 'col: ', col)
        return {row: row, col: col, letter: cellLetter};
      }
    }
  }
}

export function checkLettersConnected (gridData) { 
  console.log('checking if letters are connected')
  var visited = new Set();

  var startingCell = findFirstLetter(gridData);
  checkCell(startingCell.row, startingCell.col); 

  function checkCell (row, col) {
    var cellData = gridData[row] && gridData[row][col];

    if (cellData == null || !cellData.letter || visited.has(cellData)) {
      return;
    }
    
    visited.add(cellData);

    checkCell(row - 1, col); //up neighbor
    checkCell(row, col + 1); //right neighbor
    checkCell(row + 1, col); //down neighbor
    checkCell(row, col - 1); //left neighbor
  } 

  var totalLettersInGrid = flatten(gridData).filter(cellData => cellData.letter != null).length;
  
  if (visited.size !== totalLettersInGrid) {
    console.log('Error: All words must connect');
    return false;
  }
  return true;
}

      
/*
function testFindWord(findWord) {
  var letters = [['a', 'p',       'p', 'l', 'e'], 
                ['n',  undefined, 'i', undefined, undefined], 
                ['t',  undefined, 'e', undefined, undefined]];
  var words = findWord(letters);
  
  if words.length !== 3 
  if words[0] !== 'apple'
  if words[1] !== 'ant'
  if words[2] !== 'pie'
  if typeof words !== 'object'
}
*/

