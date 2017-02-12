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
const ALL_LETTERS = 'aaaaaaaaaaaaabbbcccddddddeeeeeeeeeeeeeeeeeefffgggghhhiiiiiiiiiiiijjkklllllmmmnnnnnnnnooooooooooppprrrrrrrrrsssssstttttttttuuuuuuvvvwwwxxyyyzz';

const css = {
  App: {
    height: '100%',
  },
};

const NUMBER_OF_STARTING_TILES = {
  1: 21, 
  2: 18, 
  3: 15,
  4: 11 
};

function startingTiles(difficulty) {
  return NUMBER_OF_STARTING_TILES[difficulty];
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allWords: [],
      avgWordLength: null,
      difficulty: null,
      endTime: null,
      gameOver: false,
      gameStarted: false,
      globalErrors: [],
      gridData: null,
      letterPile: new LetterPile(ALL_LETTERS.split('')),
      longestWord: {
        word: null,
        length: null,
      },
      nextPeelWins: false,
      originCell: undefined,
      showCellErrors: false,
      showHelp: false,
      showLetterPileInfo: false,
      showStartingOptions: true,
      startTime: null,
      timeElapsed: null,
      wordCount: null,
    }; 
  }

  setStartingOption(name, value) {
    this.setState({
      [name]: value,
    });
  } 

  startGame() {
    this.state.gameOver ? this.state.letterPile = new LetterPile(ALL_LETTERS.split('')) : null;
    var startingLetters = createStartingHand(startingTiles(this.state.difficulty), this.state.letterPile);

    var startTime = new Date();
    //only updates states that are not persistent for restarted games
    this.setState({
      gameOver: false,
      gameStarted: true,
      globalErrors: [],
      gridData: fillGridData(createGridData(rowCount, colCount), startingLetters),
      letterPile: this.state.letterPile,
      nextPeelWins: false,
      originCell: undefined,
      showCellErrors: false,
      showLetterPileInfo: true,
      showStartingOptions: true,
      startTime: startTime,
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
        column: column,
        row: row,
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
        globalErrors: this.state.globalErrors,
        gridData: this.state.gridData,
        originCell: undefined,
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
      allWords: allWords,
      globalErrors: globalErrors,
      gridData: this.state.gridData,
      nextPeelWins: this.state.letterPile.count() < this.state.difficulty,
      showCellErrors: true,
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
      avgWordLength: avgWordLength,
      endTime : this.state.endTime,
      gameOver: true,
      longestWord: longestWord,
      timeElapsed: timeElapsed,
    });
  }

  render() {
    return (
      <div style={css.App}>
        {
          this.state.gameStarted
          ? <Game 
              avgWordLength={this.state.avgWordLength}
              bananas={this.bananas.bind(this)} 
              dragTile={this.dragTile.bind(this)} 
              dropTile={this.dropTile.bind(this)}
              gameOver={this.state.gameOver} 
              globalErrors={this.state.globalErrors}
              gridData={this.state.gridData} 
              letters={this.state.letterPile}
              longestWord={this.state.longestWord}
              nextPeelWins={this.state.nextPeelWins} 
              peel={this.peel.bind(this)} 
              showHelp={this.state.showHelp}
              startGame={this.startGame.bind(this)}
              timeElapsed={this.state.timeElapsed}
              toggleHelp={this.toggleHelp.bind(this)}
              wordCount={this.state.wordCount}
            />
          : <MainMenu
              difficulty={this.state.difficulty}
              setStartingOption={this.setStartingOption.bind(this)}
              startGame={this.startGame.bind(this)} 
            />
        }
      </div>  
    );
  }
}

export default App;