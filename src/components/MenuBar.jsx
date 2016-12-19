import React, { Component } from 'react';
import LetterPileInfo from './LetterPileInfo.jsx';
import StartingOptions from './StartingOptions.jsx';


var css = {
  menuBar: {
    color: 'blue',
    fontSize: '18px',
    border: '1px solid black',
    padding: '10px',
    paddingBottom: '60px',
    backgroundColor: 'orange',
    display: 'block',
    minWidth: '500px', 
    width: '60%',
    marginLeft: '50px',
    marginBottom: '20px',
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
    globalErrors: React.PropTypes.array.isRequired,
  };

  render() {
    return (
      <div style={css.menuBar}>
        {
          this.props.gameStarted
          ? <LetterPileInfo 
              style={css.hidden} 
              letters={this.props.letters} 
              nextPeelWins={this.props.nextPeelWins} 
              peel={this.props.peel} 
              bananas={this.props.bananas} 
              globalErrors={this.props.globalErrors}
            /> 
          : <StartingOptions 
              style={css.startingOptions} 
              startGame={this.props.startGame}
            /> 
        }
      </div>
    );
  }
}

export default MenuBar;