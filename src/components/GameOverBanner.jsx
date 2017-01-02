import React, { Component } from 'react';
import {colors} from '../helpers/colors.js';


var css = {
  gameOverBanner: {
    position: 'absolute',
    display: 'block',
    height: '80%',
    width: '80%',
    backgroundColor: colors.tan,
    marginLeft: '10%',
    top: '0',
    fontSize: '24px',
    fontFamily: 'Futura',
    boxSizing: 'border-box',
    padding: '20px 0px 0px 0px',
    textAlign: 'center',
  },
  gameOver: {
    fontFamily: 'Futura',
    textTransform: 'uppercase',
  },
  restartButton: {
    display: 'block',
    width: '80%',
    height: '40px',
    marginBottom: '20px',
    marginLeft: '10%',
    marginTop: '380px',
    backgroundColor: colors.green,
    borderRadius: '20px',
    border: 'none',
    fontFamily: 'Futura',
    textTransform: 'uppercase',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: '16px',
    textDecoration: 'none',
    lineHeight: '40px', 
  },
};

class GameOverBanner extends Component {
  /*
  static propTypes = {
    letters: React.PropTypes.object.isRequired,
    peel: React.PropTypes.func.isRequired,
    nextPeelWins: React.PropTypes.bool.isRequired,
    gameStarted: React.PropTypes.bool.isRequired,
    gameOver: React.PropTypes.bool.isRequired,
  };
  */

  render() {
    return (
      <div style={css.gameOverBanner}>
        <span style={css.gameOver}>You Win</span>
        <button style={css.restartButton} type="submit" onClick={console.log("restart button clicked")}>Play again?</button>
      </div>
    );
  }
}

export default GameOverBanner;