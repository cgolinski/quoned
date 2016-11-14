import React, { Component } from 'react';
import MenuBar from './MenuBar.jsx' ;
import PlayGrid from './PlayGrid.jsx' ;
import LetterPileInfo from './LetterPileInfo.jsx' ;
import LetterPile from '../model/LetterPile.js' ;


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
var letterPile = new LetterPile(ALL_LETTERS.split(''));


//To Do: Delete this function
function selectRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createStartingHand(number) {
  return letterPile.peel(number);
}

function fill2DArray(array, values){
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
      startingCell: undefined, 
      startingLetters: fill2DArray(create2DArray(rowCount, colCount), stagingStartingTiles),
    };
  }

  selectCell(row, column) {
    if (this.state.startingCell !== undefined) {
      if (this.state.startingLetters[row][column] === undefined) {
        this.state.startingLetters[row][column] = this.state.startingLetters[this.state.startingCell.row][this.state.startingCell.column];
        this.state.startingLetters[this.state.startingCell.row][this.state.startingCell.column] = undefined;
        this.setState({
          startingCell: undefined,
          startingLetters: this.state.startingLetters,
        });
      }
    } else if (this.state.startingCell === undefined && this.state.startingLetters[row][column] !== undefined) {
      this.setState({
        startingCell: {
          row: row,
          column: column,
        }
      });
    }
  }

  peel() {
    fill2DArray(this.state.startingLetters, letterPile.peel(1));

    this.setState({
      startingLetters: this.state.startingLetters,
    });

    //if (letterPile.length < numberOfPlayers) {
    //  this.value = "Bananas"
    //}
  }

  render() {
    console.log('selected cell', this.state.startingCell);
    return (
      <div>
        <MenuBar>
        </MenuBar>
        <div style={PlayingAreaStyle}>
          <PlayGrid id="playingArea" letters={this.state.gridLetters} selectCell={this.selectCell.bind(this)} />
        </div>
        <div style={StagingAreaStyle}>
          <PlayGrid id="stagingArea" letters={this.state.startingLetters} selectCell={this.selectCell.bind(this)} />
        </div>
        <div>
          <LetterPileInfo letters={letterPile} peel={this.peel.bind(this)} />
        </div>
      </div>

    );
  }
}

export default App;