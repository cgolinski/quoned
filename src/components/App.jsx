import React, { Component } from 'react';
import MainMenu from './MainMenu.jsx';
import Game from './Game.jsx';
import LetterPile from '../model/LetterPile.js';
import {createStartingHand} from '../model/LetterPile.js';
import dictionary from '../model/dictionary.js';
import {findWords, checkWords, setNonWordErrorCells, removeSingleLetterWords, checkLettersConnected} from '../model/GridData.js';
import {createGridData, fillGridData, clearErrors} from '../model/GridData.js';
import {findTimeElapsed} from '../helpers/time.js';
import {findLengthOfLongestWord, findAvgLengthOfWords} from '../helpers/words.js';



var rowCount = 10;
var colCount = 10;

//const ALL_LETTERS = 'cat';
//const ALL_LETTERS = 'appleeachperlum';
const ALL_LETTERS = 'aaaaaaaaaaaaabbbcccddddddeeeeeeeeeeeeeeeeeefffgggghhhiiiiiiiiiiiijjkklllllmmmnnnnnnnnoooooooooopppqqrrrrrrrrrsssssstttttttttuuuuuuvvvwwwxxyyyzz';

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
      letterPile: new LetterPile(ALL_LETTERS.split('')),
      gridData: null,
      nextPeelWins: false,
      originCell: undefined,
      showStartingOptions: true,
      showLetterPileInfo: false,
      gameStarted: false,
      numOfPlayers: null,
      showCellErrors: false,
      globalErrors: [],
      gameOver: false,
      showHelp: false,
      allWords: [],
      wordCount: null,
      longestWord: {
        word: null,
        length: null,
      },
      avgWordLength: null,
      startTime: null,
      endTime: null,
      timeElapsed: null,
    }; 
  }

  setStartingOption(name, value) {
    this.setState({
      [name]: value,
    });
  } 

  startGame() {
    this.state.gameOver ? this.state.letterPile = new LetterPile(ALL_LETTERS.split('')) : null;
    var startingLetters = createStartingHand(startingTilesPerPlayer(this.state.numOfPlayers), this.state.letterPile);

    var startTime = new Date();
    //only updates states that are not persistent for restarted games
    this.setState({
      nextPeelWins: false,
      originCell: undefined,
      showStartingOptions: true,
      showLetterPileInfo: true,
      gameStarted: true,
      showCellErrors: false,
      globalErrors: [],
      gameOver: false,

      startTime: startTime,
      letterPile: this.state.letterPile,
      gridData: fillGridData(createGridData(rowCount, colCount), startingLetters),
    });
  }  

  toggleHelp() {
    this.setState({
      showHelp: !this.state.showHelp,
    });
  }

  dragTile(row, column, event) {
    // Firefox requires that some data be set on the dataTransfer object or it will not 
    // respect the dragStart event. I am setting garbage data here.
    event.dataTransfer.setData('text/plain', 'garbage');
    
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

    if (destinationCellIsEmpty) {
      letterInDestinationCell = letterInOriginCell;
      this.state.gridData[row][column].letter = letterInDestinationCell;
      this.state.gridData[originCell.row][originCell.column].letter = undefined;
      
      if (this.state.showCellErrors) {
        clearErrors(this.state.gridData);
      }

      if (this.state.globalErrors) {
        this.state.globalErrors = [];
      }

      this.setState({
        originCell: undefined,
        gridData: this.state.gridData,
        showCellErrors: false,
        globalErrors: this.state.globalErrors,
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

    var allWords = removeSingleLetterWords(findWords(this.state.gridData));
    var nonWords = checkWords(allWords, dictionary);
        
    var hasErrors = nonWords.length !== 0 || !lettersConnected;

    if (hasErrors) {
      setNonWordErrorCells(this.state.gridData, nonWords);
    } else if (!this.state.nextPeelWins) {
      fillGridData(this.state.gridData, this.state.letterPile.peel(1));
    } else {
      return this.setGameOver();
    }

    this.setState({
      gridData: this.state.gridData,
      nextPeelWins: this.state.letterPile.count() < this.state.numOfPlayers,
      showCellErrors: true,
      globalErrors: globalErrors,
      allWords: allWords,
      wordCount: allWords.length,
    });
  }

  bananas() { 
    this.peel();
  }

  setGameOver() {
    console.log('setState to Game Over');
    this.state.endTime = new Date();

    var words = this.state.allWords.map(obj => obj.word);
    
    var longestWord = findLengthOfLongestWord(words);
    var avgWordLength = findAvgLengthOfWords(words);
    var timeElapsed = findTimeElapsed(this.state.startTime, this.state.endTime);

    this.setState({
      gameOver: true,
      endTime : this.state.endTime,
      timeElapsed: timeElapsed,
      longestWord: longestWord,
      avgWordLength: avgWordLength,
    });
  }

  render() {
    return (
      <div style={css.App}>
        {
          this.state.gameStarted
          ? <Game 
              gameOver={this.state.gameOver} 
              letters={this.state.letterPile}
              nextPeelWins={this.state.nextPeelWins} 
              peel={this.peel.bind(this)} 
              bananas={this.bananas.bind(this)} 
              globalErrors={this.state.globalErrors}
              gridData={this.state.gridData} 
              dragTile={this.dragTile.bind(this)} 
              dropTile={this.dropTile.bind(this)}
              startGame={this.startGame.bind(this)}
              wordCount={this.state.wordCount}
              longestWord={this.state.longestWord}
              avgWordLength={this.state.avgWordLength}
              timeElapsed={this.state.timeElapsed}
              showHelp={this.state.showHelp}
              toggleHelp={this.toggleHelp.bind(this)}
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