import React, { Component } from 'react';
import MenuBar from './MenuBar.jsx';
import PlayGrid from './PlayGrid.jsx';
import LetterPile from '../model/LetterPile.js';
import {createStartingHand} from '../helpers/letters.js';
import {create2DArray} from '../helpers/array.js';
import {fill2DArray} from '../helpers/array.js';
import {findWord} from '../helpers/array.js';
import dictionary from '../model/dictionary.js';

console.log('word', dictionary.has('yes'));

var rowCount = 10;
var colCount = 10;

const ALL_LETTERS = 'aaaaaaaaaaaaabbbcccddddddeeeeeeeeeeeeeeeeeefffgggghhhiiiiiiiiiiiijjkklllllmmmnnnnnnnnoooooooooopppqqrrrrrrrrrsssssstttttttttuuuuuuvvvwwwxxyyyzz';
var letterPile = new LetterPile(ALL_LETTERS.split(''));

const css = {
  stagingArea: {
    display: 'inline-block',
    marginLeft: '10%',
  },
};

const NUMBER_OF_STARTING_TILES = {
  1: 21,
  2: 21,
  3: 21,
  4: 21,
  5: 15,
  6: 15,
  7: 11,
  8: 11
};

function startingTilesPerPlayer(numOfPlayers) {
  return NUMBER_OF_STARTING_TILES[numOfPlayers];
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gridLetters: create2DArray(rowCount, colCount),
      nextPeelWins: false,
      originCell: undefined,
      startingLetters: create2DArray(rowCount, colCount),
      showStartingOptions: true,
      showLetterPileInfo: false,
      gameStarted: false,
      numOfPlayers: null,
    }; 
  }


  //------Refactoring section------
  dragTile(row, column) {
    this.setState({
      originCell: {
        row: row,
        column: column,
      }
    });
  }

  dropTile(row, column) {
    var letterInDestinationCell = this.state.startingLetters[row][column];
    var destinationCellIsEmpty = letterInDestinationCell === undefined;
    var originCell = this.state.originCell;
    var letterInOriginCell = this.state.startingLetters[originCell.row][originCell.column];


    //PROBLEMS: 
    // 1) Updating pointer variables, not original state. How to update original state
    //    so tile actually moves, while keeping function readable?
    // 2) Plus sign briefly flashes as tile starts being dragged.


    if (destinationCellIsEmpty) {
      //then put the letter in state into the destination cell
      letterInDestinationCell = letterInOriginCell;
      //same as row above but directly updating state.
      this.state.startingLetters[row][column] = letterInDestinationCell;
      //and make the original cell empty
      this.state.startingLetters[originCell.row][originCell.column] = undefined;
      //run setState to refresh state
      this.setState({
        originCell: undefined,
        startingLetters: this.state.startingLetters,
      });
    }
  }


  //------End of reactoring section------


/*
  selectCell(row, column) {
    if (this.state.selectedCell !== undefined) {
      if (this.state.startingLetters[row][column] === undefined) {
        this.state.startingLetters[row][column] = this.state.startingLetters[this.state.selectedCell.row][this.state.selectedCell.column];
        this.state.startingLetters[this.state.selectedCell.row][this.state.selectedCell.column] = undefined;
        this.setState({
          selectedCell: undefined,
          startingLetters: this.state.startingLetters,
        });
      }
    } else if (this.state.selectedCell === undefined && this.state.startingLetters[row][column] !== undefined) {
      this.setState({
        selectedCell: {
          row: row,
          column: column,
        }
      });
    }
  }
*/

  peel() {
    fill2DArray(this.state.startingLetters, letterPile.peel(1));

    this.setState({
      startingLetters: this.state.startingLetters,
      nextPeelWins: letterPile.count() < this.state.numOfPlayers,
    });

    findWord(this.state.startingLetters);
  }

  bananas() {
    this.peel();
  }

  startGame(data) {
    console.log('start game button was clicked');

    var stagingStartingTiles = createStartingHand(startingTilesPerPlayer(data.numOfPlayers), letterPile);

    this.setState({
      startingLetters: fill2DArray(create2DArray(rowCount, colCount), stagingStartingTiles),
      gameStarted: true,
      numOfPlayers: data.numOfPlayers,
    });

  };

  render() {
    console.table(this.state.startingLetters);
    console.log('origin cell', this.state.originCell);
    return (
      <div>
        <MenuBar letters={letterPile} 
                 nextPeelWins={this.state.nextPeelWins} 
                 peel={this.peel.bind(this)} 
                 bananas={this.bananas.bind(this)} 
                 startGame={this.startGame.bind(this)} 
                 gameStarted={this.state.gameStarted} 
        />
        <div style={css.stagingArea}>
          <PlayGrid id="stagingArea" letters={this.state.startingLetters} dragTile={this.dragTile.bind(this)} dropTile={this.dropTile.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;