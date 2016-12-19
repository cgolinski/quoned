import React, { Component } from 'react';
import MenuBar from './MenuBar.jsx';
import PlayGrid from './PlayGrid.jsx';
import LetterPile from '../model/LetterPile.js';
import {createStartingHand} from '../model/LetterPile.js';
import dictionary from '../model/dictionary.js';
import {findWords, checkWords, setNonWordErrorCells, removeSingleLetterWords, checkLettersConnected} from '../model/GridData.js';
import {createGridData, fillGridData, clearErrors} from '../model/GridData.js';

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
      gridData: null,
      nextPeelWins: false,
      originCell: undefined,
      showStartingOptions: true,
      showLetterPileInfo: false,
      gameStarted: false,
      numOfPlayers: null,
      showErrors: false,
      globalErrors: [],
    }; 
  }

  dragTile(row, column) {
    this.setState({
      originCell: {
        row: row,
        column: column,
      }
    });
  }

  dropTile(row, column) {
    var letterInDestinationCell = this.state.gridData[row][column].letter;
    var destinationCellIsEmpty = letterInDestinationCell === undefined;
    var originCell = this.state.originCell;
    var letterInOriginCell = this.state.gridData[originCell.row][originCell.column].letter;

    /* QUESTIONS: 
       1) Updating pointer variables, not original state. How to update original state
          so tile actually moves, while keeping function readable?
    */


    if (destinationCellIsEmpty) {
      letterInDestinationCell = letterInOriginCell;
      this.state.gridData[row][column].letter = letterInDestinationCell;
      this.state.gridData[originCell.row][originCell.column].letter = undefined;
      
      if (this.state.showErrors) {
        clearErrors(this.state.gridData);
      }

      this.setState({
        originCell: undefined,
        gridData: this.state.gridData,
        showErrors: false,
      });
    }
  }

  peel() {
    var lettersConnected = checkLettersConnected(this.state.gridData);
    var globalErrors = [];

    if (!lettersConnected) {
      globalErrors.push('All words must be connected.');
    } 

    clearErrors(this.state.gridData);

    var allWords = findWords(this.state.gridData);
    var nonWords = checkWords(allWords, dictionary);
    
    nonWords = removeSingleLetterWords(nonWords);
    
    var hasErrors = nonWords.length !== 0;

    if (hasErrors) {
      setNonWordErrorCells(this.state.gridData, nonWords);
    } else {
      fillGridData(this.state.gridData, letterPile.peel(1));
    }

    this.setState({
      gridData: this.state.gridData,
      nextPeelWins: letterPile.count() < this.state.numOfPlayers,
      showErrors: true, //rename to showCellErrors
      globalErrors: globalErrors, //was name hasErrors
    });
  }

  bananas() {
    this.peel();
  }

  startGame(data) {
    console.log('start game button was clicked');

    var startingLetters = createStartingHand(startingTilesPerPlayer(data.numOfPlayers), letterPile);

    this.setState({
      gridData: fillGridData(createGridData(rowCount, colCount), startingLetters),
      gameStarted: true,
      numOfPlayers: data.numOfPlayers,
    });
  };  

  render() {
    return (
      <div>
        <MenuBar 
          letters={letterPile} 
          nextPeelWins={this.state.nextPeelWins} 
          peel={this.peel.bind(this)} 
          bananas={this.bananas.bind(this)} 
          startGame={this.startGame.bind(this)} 
          gameStarted={this.state.gameStarted} 
          globalErrors={this.state.globalErrors}
        />
        <div style={css.stagingArea}>
          <PlayGrid 
            id="stagingArea" 
            gridData={this.state.gridData} 
            dragTile={this.dragTile.bind(this)} 
            dropTile={this.dropTile.bind(this)} 
          />
        </div>
      </div>
    );
  }
}

export default App;