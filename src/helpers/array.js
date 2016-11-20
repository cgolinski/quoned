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