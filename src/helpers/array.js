export function create2DArray(rowCount, colCount){
  var rows = [];
  
  for(var i = 0; i < rowCount; i++){
    rows.push([]); 
  
    for(var j = 0; j < colCount; j++){
      rows[i].push(undefined);
    }
  }
  return rows;
}

export function fill2DArray(array, values){
  row_loop: 
  for(var row = 0; row < array.length; row++){  
    for(var cell = 0; cell < array[row].length; cell++){
      if (array[row][cell] === undefined) {
        array[row][cell] = values.shift();
        if (values.length === 0) {
          break row_loop;
        }
      }
    }
  }
  return array;
}

export function findWords(startingLetters) {
  var letters = startingLetters; 
  var numOfRows = letters.length;
  var numOfCols = letters[0].length;
  var word = '';
  var rowWords = [];
  var colWords = [];
  var startingRow;
  var startingCol;
  
  for (let row = 0; row < numOfRows; row++) {
    for (let col = 0; col < numOfCols; col++) {
      let cellLetter    = letters[row][col];
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
      let cellLetter    = letters[row][col];
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
  var notWords = [];
  for (var i = 0; i < allWords.length; i++) {
    if (!dictionary.has(allWords[i].word)) {
      notWords.push(allWords[i]);
    };
  }
  console.log('notWords: ', notWords);
  return notWords;
}

/*
TO DO
  - in checkWords, make array of all words (and their coordinates) not in dictionary, and return it
  - in new function called ...calculate? calculate all grid cells that will be highlighted 
    (all points between startingRow/endingRow startingCol/endingCol). Returns 2d array
  - refactor startingLetters to be gridData, containing objects instead of strings. 
    Includes letter key for letter, highlight key true/false (false by default). This way can add for more rules later.
  - Merge highlight data (from calculate function) into gridData highlight key. (this.state / setState to re-render)  
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



