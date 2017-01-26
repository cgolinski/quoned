import React, { Component } from 'react';
import LetterPileInfo from './LetterPileInfo.jsx';
import StartingOptions from './StartingOptions.jsx';
import GameOverBanner from './GameOverBanner.jsx';
import {colors} from '../helpers/colors.js';


var css = {
  menuBar: {
    display: 'flex',
    flex: '2',
    flexFlow: 'column', 
    color: colors.white,
    fontSize: '18px',
    border: 'none',
    backgroundColor: colors.grey,
    minWidth: '100px', 
    marginLeft: '0px',
    position: 'relative',
  },
  hidden: {
    display: 'none',
  },
};

class MenuBar extends Component {
  static propTypes = {
    letters: React.PropTypes.object.isRequired,
    peel: React.PropTypes.func.isRequired,
    nextPeelWins: React.PropTypes.bool.isRequired,
    gameOver: React.PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div style={css.menuBar}>
        <GameOverBanner 
          startGame={this.props.startGame} 
          wordCount={this.props.wordCount}
          longestWord={this.props.longestWord}
          avgWordLength={this.props.avgWordLength}
          timeElapsed={this.props.timeElapsed}
          gameOver={this.props.gameOver}
        />
        <LetterPileInfo 
          style={css.hidden} 
          letters={this.props.letters} 
          nextPeelWins={this.props.nextPeelWins} 
          peel={this.props.peel} 
          bananas={this.props.bananas} 
          showHelp={this.props.showHelp}
          toggleHelp={this.props.toggleHelp}
        /> 
      </div>
    );
  }
}

export default MenuBar;