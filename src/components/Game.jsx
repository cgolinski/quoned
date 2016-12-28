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
  },
};

class Game extends Component {
  static propTypes = {
   
    }; 

  render() {
    return (
      <div style={css.wholeGame}>
        <MenuBar 
          letters={this.props.letters}
          nextPeelWins={this.props.nextPeelWins} 
          peel={this.props.peel} 
          bananas={this.props.bananas} 
          globalErrors={this.props.globalErrors}
        />       
        <div style={css.playArea}>
          <PlayGrid 
            id="playArea" 
            gridData={this.props.gridData} 
            dragTile={this.props.dragTile} 
            dropTile={this.props.dropTile} 
          />
        </div>
      </div>
    );
  }
}

export default Game;