import React, { Component } from 'react';
import MainMenu from './MainMenu.jsx';
import MenuBar from './MenuBar.jsx';
import Game from './Game.jsx';
import PlayGrid from './PlayGrid.jsx';
import LetterPile from '../model/LetterPile.js';
import {createStartingHand} from '../model/LetterPile.js';
import dictionary from '../model/dictionary.js';
import {findWords, checkWords, setNonWordErrorCells, removeSingleLetterWords, checkLettersConnected} from '../model/GridData.js';
import {createGridData, fillGridData, clearErrors} from '../model/GridData.js';
import {colors} from '../helpers/colors.js';

var rowCount = 10;
var colCount = 10;

const ALL_LETTERS = 'aaaaaaaaaaaaabbbcccddddddeeeeeeeeeeeeeeeeeefffgggghhhiiiiiiiiiiiijjkklllllmmmnnnnnnnnoooooooooopppqqrrrrrrrrrsssssstttttttttuuuuuuvvvwwwxxyyyzz';
var letterPile = new LetterPile(ALL_LETTERS.split(''));

const css = {
  App: {
    height: '100%',
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
      showCellErrors: false,
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
      
      if (this.state.showCellErrors) {
        clearErrors(this.state.gridData);
      }

      this.setState({
        originCell: undefined,
        gridData: this.state.gridData,
        showCellErrors: false,
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
    
    var hasErrors = nonWords.length !== 0 || !lettersConnected;

    if (hasErrors) {
      setNonWordErrorCells(this.state.gridData, nonWords);
    } else {
      fillGridData(this.state.gridData, letterPile.peel(1));
    }

    this.setState({
      gridData: this.state.gridData,
      nextPeelWins: letterPile.count() < this.state.numOfPlayers,
      showCellErrors: true,
      globalErrors: globalErrors,
    });
  }

  bananas() {
    this.peel();
  }

  setStartingOption(name, value) {
    this.setState({
      [name]: value,
    });
  }

  startGame(data) {
    console.log('start game button was clicked');

    var startingLetters = createStartingHand(startingTilesPerPlayer(data.numOfPlayers), letterPile);

    this.setState({
      gridData: fillGridData(createGridData(rowCount, colCount), startingLetters),
      gameStarted: true,
      numOfPlayers: data.numOfPlayers,
    });
  }  

  render() {
    return (
      <div style={css.App}>
        {
          this.state.gameStarted
          ? <Game 
              letters={letterPile}
              nextPeelWins={this.state.nextPeelWins} 
              peel={this.peel.bind(this)} 
              bananas={this.bananas.bind(this)} 
              globalErrors={this.state.globalErrors}
              gridData={this.state.gridData} 
              dragTile={this.dragTile.bind(this)} 
              dropTile={this.dropTile.bind(this)}
            />
          : <MainMenu
              startGame={this.startGame.bind(this)} 
              numOfPlayers={this.state.numOfPlayers}
              setStartingOption={this.setStartingOption.bind(this)}
            />
        }
      </div>  
    );
  }
}

export default App;