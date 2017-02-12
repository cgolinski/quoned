import React, { Component } from 'react';
import LetterPileInfo from './LetterPileInfo.jsx';
import StartingOptions from './StartingOptions.jsx';
import GameOverBanner from './GameOverBanner.jsx';
import {colors} from '../helpers/colors.js';


var css = {
  menuBar: {
    backgroundColor: colors.grey,
    border: 'none',
    color: colors.white,
    display: 'flex',
    flex: '2',
    flexFlow: 'column', 
    fontSize: '18px',
    marginLeft: '0px',
    minWidth: '100px', 
    position: 'relative',
  },
  hidden: {
    display: 'none',
  },
};

class MenuBar extends Component {
  static propTypes = {
    gameOver: React.PropTypes.bool.isRequired,
    letters: React.PropTypes.object.isRequired,
    nextPeelWins: React.PropTypes.bool.isRequired,
    peel: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <div style={css.menuBar}>
        <GameOverBanner 
          avgWordLength={this.props.avgWordLength}
          gameOver={this.props.gameOver}
          longestWord={this.props.longestWord}
          startGame={this.props.startGame} 
          timeElapsed={this.props.timeElapsed}
          wordCount={this.props.wordCount}
        />
        <LetterPileInfo 
          bananas={this.props.bananas} 
          letters={this.props.letters} 
          nextPeelWins={this.props.nextPeelWins} 
          peel={this.props.peel} 
          showHelp={this.props.showHelp}
          style={css.hidden} 
          toggleHelp={this.props.toggleHelp}
        /> 
      </div>
    );
  }
}

export default MenuBar;