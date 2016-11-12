import React, { Component } from 'react';
import MenuBar from './MenuBar.jsx' ;
import PlayGrid from './PlayGrid.jsx' ;

var rowCount = 10;
var colCount = 10;

function create2DArray(rowCount, colCount){
  var rows = [];
  
  for(var i = 0; i < rowCount; i++){
    rows.push([]); 
  
    for(var j = 0; j < colCount; j++){
      rows[i].push(undefined);
    }
  }
  return rows;
}

const ALL_LETTERS = 'aaaaaaaaaaaaabbbcccddddddeeeeeeeeeeeeeeeeeefffgggghhhiiiiiiiiiiiijjkklllllmmmnnnnnnnnoooooooooopppqqrrrrrrrrrsssssstttttttttuuuuuuvvvwwwxxyyyzz';

var letterPile = ALL_LETTERS.split('');
console.log('letterPile: ' + letterPile + ' length: ' + letterPile.length);

function selectRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function selectRandomTile(setOfTilesMin, setOfTilesMax) {
  return selectRandomNumber(setOfTilesMin, setOfTilesMax);
}

function createStartingHand(number) {
  var startingHand = [];
  
  for (var i = 0; i < number; i++) {
    var selectedTile = selectRandomTile(0, letterPile.length);

    startingHand.push(letterPile[selectedTile]);
    letterPile.splice(selectedTile, 1);
  }
  
  console.log('startingHand: ' + startingHand + ' length: ' + startingHand.length);
  console.log('letterPile: ' + letterPile + ' length: ' + letterPile.length);
  return startingHand;
}

function fill2DArray(array, values){
  for(var row = 0; row < array.length; row++){  
    for(var cell = 0; cell < array[row].length; cell++){
      if (array[row][cell] === undefined) {
        array[row][cell] = values.shift();
      }
    }
  }
  return array;
}

var PlayingAreaStyle = {
  display: 'inline-block',
  marginRight: '300px',
};

var StagingAreaStyle = {
  display: 'inline-block',
};

const NUMBER_OF_STARTING_TILES = {
  onePlayer   : 21,
  twoPlayers  : 21,
  threePlayers: 21,
  fourPlayers : 21,
  fivePlayers : 15,
  sixPlayers  : 15,
  sevenPlayers: 11,
  eightPlayers: 11
}

class App extends Component {
  constructor(props) {
    super(props);

    var stagingStartingTiles = createStartingHand(NUMBER_OF_STARTING_TILES.onePlayer);

    this.state = {
      gridLetters: create2DArray(rowCount, colCount),
      startingLetters: fill2DArray(create2DArray(rowCount, colCount), stagingStartingTiles)
    };
  }

  render() {
    return (
      <div>
        <MenuBar>
        </MenuBar>
        <div style={PlayingAreaStyle}>
          <PlayGrid id="playingArea" letters={this.state.gridLetters}/>
        </div>
        <div style={StagingAreaStyle}>
          <PlayGrid id="stagingArea" letters={this.state.startingLetters}/>
        </div>
      </div>

    );
  }
}

export default App;