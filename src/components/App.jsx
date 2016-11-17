import React, { Component } from 'react';
import MenuBar from './MenuBar.jsx';
import PlayGrid from './PlayGrid.jsx';
import LetterPileInfo from './LetterPileInfo.jsx';
import LetterPile from '../model/LetterPile.js';
import {createStartingHand} from '../helpers/letters.js';
import {create2DArray} from '../helpers/array.js';
import {fill2DArray} from '../helpers/array.js';

var rowCount = 10;
var colCount = 10;

const ALL_LETTERS = 'aaaaaaaaaaaaabbbcccddddddeeeeeeeeeeeeeeeeeefffgggghhhiiiiiiiiiiiijjkklllllmmmnnnnnnnnoooooooooopppqqrrrrrrrrrsssssstttttttttuuuuuuvvvwwwxxyyyzz';
var letterPile = new LetterPile(ALL_LETTERS.split(''));

const css = {
  playingArea: {
    display: 'inline-block',
    marginRight: '300px',
  },
  stagingArea: {
    display: 'inline-block',
  },
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
};

class App extends Component {
  constructor(props) {
    super(props);

    var stagingStartingTiles = createStartingHand(NUMBER_OF_STARTING_TILES.onePlayer, letterPile);

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
        <div style={css.playingArea}>
          <PlayGrid id="playingArea" letters={this.state.gridLetters} selectCell={this.selectCell.bind(this)} />
        </div>
        <div style={css.stagingArea}>
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