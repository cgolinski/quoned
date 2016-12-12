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

/*
TO DO
  - DONE: in checkWords, make array of all words (and their coordinates) not in dictionary, and return it
  - DONE: refactor startingLetters to be gridData, containing objects instead of strings. 
    Includes letter key for letter, error key true/false (false by default, true highlights cell). 
    This way can add for more rules later.
  - in new function called ...calculate? calculate all grid cells that will be highlighted 
    (all points between startingRow/endingRow startingCol/endingCol). 
    Modify gridData
  - Merge highlight data (from calculate function) into gridData highlight key. (this.state / setState to re-render)  
  - Move everything from array.js into GridData.js
*/


      


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



