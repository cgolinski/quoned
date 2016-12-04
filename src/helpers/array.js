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

export function findWord(startingLetters) {
  var letters = startingLetters; 
  var numOfRows = letters.length;
  var numOfCols = letters[0].length;
  var word = '';
  var rowWords = [];
  var colWords = [];
  
  for (let row = 0; row < numOfRows; row++) {
    for (let col = 0; col < numOfCols; col++) {
      let cellLetter    = letters[row][col];
      let cellHasLetter = cellLetter !== undefined;
      let isLastCell    = col === numOfCols;

      if (cellHasLetter) {
        word += cellLetter;
      } else if (!cellHasLetter || isLastCell) {
        let wordIsNotEmpty = word !== '';
        if (wordIsNotEmpty) {
          rowWords.push(word);
          word = '';
        }
      }
    }
  }

  for (let col = 0; col < numOfCols; col++) {
    for (let row = 0; row < numOfRows; row++) {
      let cellLetter    = letters[row][col];
      let cellHasLetter = cellLetter !== undefined;
      let isLastCell    = row === numOfRows;

      if (cellHasLetter) {
        word += cellLetter;
      } else if (!cellHasLetter || isLastCell) {
        let wordIsNotEmpty = word !== '';
        if (wordIsNotEmpty) {
          colWords.push(word);
          word = '';
        }
      }
    }
  }
  var allWords = rowWords.concat(colWords);
  console.log('allWords: ', allWords);
  return allWords;
}

/*
export function checkWords (allWords) {
  // takes in allWords as array of words
  // loop through array
  // if word is in dictionary, move onto next item in array
  // if word is not in dictionary, throw error to user (highlight word)
}
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



