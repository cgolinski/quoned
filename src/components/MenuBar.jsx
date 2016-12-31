import React, { Component } from 'react';
import LetterPileInfo from './LetterPileInfo.jsx';
import StartingOptions from './StartingOptions.jsx';
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
  },
  hidden: {
    display: 'none',
  },
  startingOptions: {
    border: '1px solid black',
  },
};

class MenuBar extends Component {
  static propTypes = {
    letters: React.PropTypes.object.isRequired,
    peel: React.PropTypes.func.isRequired,
    nextPeelWins: React.PropTypes.bool.isRequired,
    gameStarted: React.PropTypes.bool.isRequired,
    //globalErrors: React.PropTypes.array.isRequired,
  };

  render() {
    return (
      <div style={css.menuBar}>
        {/*
        {
          this.props.gameStarted
          ? */}
          <LetterPileInfo 
              style={css.hidden} 
              letters={this.props.letters} 
              nextPeelWins={this.props.nextPeelWins} 
              peel={this.props.peel} 
              bananas={this.props.bananas} 
              //globalErrors={this.props.globalErrors}
            /> 
          {/*
          : <StartingOptions 
              style={css.startingOptions} 
              startGame={this.props.startGame}
            /> 
        }
      */}
      </div>
    );
  }
}

export default MenuBar;