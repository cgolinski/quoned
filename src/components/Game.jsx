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
    alignItems: 'center',
    backgroundColor: colors.brown,
    display: 'flex',
    flex: '6',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  errorContainer: {
    height: '60px',  
  },
  errors: {
    color: colors.pink,
    fontFamily: 'Futura, Helvetica, Arial, sans-serif',
    padding: '20px',
  },
  hidden: {
    display: 'none',
  },
  helpButton: {
    backgroundColor: colors.brown,
    border: '2px solid ' + colors.tan,
    borderRadius: '20px',
    bottom: '20px',
    color: colors.tan,
    cursor: 'pointer',
    display: 'block',
    fontFamily: 'Helvetica',
    fontSize: '18px',
    fontWeight: 'bold',
    height: '2em',
    lineHeight: '0',
    outline: 'none',
    position: 'absolute',
    right: '20px',
    textTransform: 'uppercase',
    width: '2em',
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
          avgWordLength={this.props.avgWordLength}
          bananas={this.props.bananas} 
          gameOver={this.props.gameOver} 
          letters={this.props.letters}
          longestWord={this.props.longestWord}
          nextPeelWins={this.props.nextPeelWins} 
          peel={this.props.peel} 
          showHelp={this.props.showHelp}
          startGame={this.props.startGame}
          timeElapsed={this.props.timeElapsed}
          toggleHelp={this.props.toggleHelp}
          wordCount={this.props.wordCount}
        />       
        <div style={css.playArea}>
          <div style={css.errorContainer}>
            <div style={errorStyles}>
              {this.props.globalErrors}
            </div>
          </div>
          <PlayGrid 
            dragTile={this.props.dragTile} 
            dropTile={this.props.dropTile} 
            gridData={this.props.gridData} 
            id="playArea" 
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