import React, { Component } from 'react';
import MenuBar from './MenuBar.jsx';
import PlayGrid from './PlayGrid.jsx';
import dictionary from '../model/dictionary.js';
import {findWords, checkWords, setNonWordErrorCells, removeSingleLetterWords, checkLettersConnected} from '../model/GridData.js';
import {createGridData, fillGridData, clearErrors} from '../model/GridData.js';
import {colors} from '../helpers/colors.js';

const css = {
  wholeGame: {
    display: 'flex',
    flex: '1',
    height: '100%',
  },
  playArea: {
    display: 'flex',
    flex: '6',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.brown,
    flexDirection: 'column',
  },
  errorContainer: {
    height: '60px',  
  },
  errors: {
    color: colors.pink,
    padding: '20px',
    fontFamily: 'Futura, Helvetica, Arial, sans-serif',
  },
  hidden: {
    display: 'none',
  },
  helpButton: {
    position: 'absolute',
    display: 'block',
    //display: 'flex',
    //justifyContent: 'center',
    //alignItems: 'center',
    lineHeight: '0',
    bottom: '20px',
    right: '20px',
    height: '2em',
    width: '2em',
    backgroundColor: colors.brown,
    borderRadius: '20px',
    border: '2px solid ' + colors.tan,
    fontFamily: 'Helvetica',
    textTransform: 'uppercase',
    color: colors.tan,
    fontWeight: 'bold',
    fontSize: '18px',
    outline: 'none',
    cursor: 'pointer',
  },
};

class Game extends Component {
  static propTypes = {
    globalErrors: React.PropTypes.array.isRequired,
  }; 

  render() {
    var errorStyles = this.props.globalErrors.length > 0 ? css.errors : css.hidden;

    return (
      <div style={css.wholeGame}>
        <MenuBar 
          letters={this.props.letters}
          nextPeelWins={this.props.nextPeelWins} 
          peel={this.props.peel} 
          bananas={this.props.bananas} 
          gameOver={this.props.gameOver} 
          startGame={this.props.startGame}
          wordCount={this.props.wordCount}
          longestWord={this.props.longestWord}
          avgWordLength={this.props.avgWordLength}
          timeElapsed={this.props.timeElapsed}
          showHelp={this.props.showHelp}
          toggleHelp={this.props.toggleHelp}
        />       
        <div style={css.playArea}>
          <div style={css.errorContainer}>
            <div style={errorStyles}>
              {this.props.globalErrors}
            </div>
          </div>
          <PlayGrid 
            id="playArea" 
            gridData={this.props.gridData} 
            dragTile={this.props.dragTile} 
            dropTile={this.props.dropTile} 
          />
          <button style={css.helpButton} onClick={this.props.toggleHelp}>
            ?
          </button>
        </div>
      </div>
    );
  }
}

export default Game;