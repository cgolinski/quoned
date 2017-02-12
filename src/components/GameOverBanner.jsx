import React, { Component } from 'react';
import {colors} from '../helpers/colors.js';
import {timePad} from '../helpers/time.js';

var css = {
  gameOver: {
    display: 'inline-block',
    fontFamily: 'Futura, Helvetica, Arial, sans-serif',
    textTransform: 'uppercase',
    padding: '0px 0px 10px 0px',
    borderBottom: '1px solid ' + colors.green,
  },
  stats: {
    fontSize: '16px',
    fontFamily: 'Futura, Helvetica, Arial, sans-serif',
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: '0px',
  },
  statsLevel1: {
    fontSize: '16px',
  },
  statsLevel2: {
    fontSize: '36px',
    fontWeight: 'normal',
    paddingTop: '3px',
    paddingBottom: '10px',
  },
  restartButton: {
    display: 'block',
    backgroundColor: colors.white,
    borderRadius: '20px',
    border: 'none',
    fontFamily: 'Futura, Helvetica, Arial, sans-serif',
    textTransform: 'uppercase',
    color: colors.darkGreen,
    fontWeight: 'bold',
    fontSize: '16px',
    textDecoration: 'none',
    padding: '10px 15px',
    outline: 'none',
  },
};

css.gameOverBanner = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'center',
  minHeight: '85%',
  height: '85%',
  width: '80%',
  backgroundColor: colors.darkGreen,
  top: '-85%',
  overflowY: 'auto',
  fontSize: '24px',
  fontFamily: 'Futura, Helvetica, Arial, sans-serif',
  border: '3px double ' + colors.green,
  borderRadius: '4px',
  boxSizing: 'border-box',
  padding: '20px 0px 20px 0px',
  marginLeft: '10%',
  transition: 'top 0.8s ease-out',
};

css.gameOverBannerShowing = Object.assign({},css.gameOverBanner, {top: '-3px',});

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

  renderTimeElapsed() {
    return (
      <div>
        <div style={css.statsLevel1}>
          Time Elapsed
        </div>
        <div style={css.statsLevel2}>
          {
            this.props.elapsedHours > 0 
            ? <span>
                {timePad(this.props.timeElapsed.hours)}
                <span>:</span>
              </span>
            : null
          }
          <span>
            {timePad(this.props.timeElapsed.minutes)}
            <span>:</span>
           </span> 
           <span>
            {timePad(this.props.timeElapsed.seconds)}
          </span>
        </div>
      </div>  
    );
  }

  render() {
    return (
      <div style={this.props.gameOver ? css.gameOverBannerShowing : css.gameOverBanner}>
        <div>
          <div>
            <span style={css.gameOver}>You Win</span>
          </div>
          <div style={css.stats}>
            <div style={css.statsLevel1}>
              Words
            </div>
            <div style={css.statsLevel2}>
              {this.props.wordCount}
            </div>
            <div style={css.statsLevel1}>
              Longest Word
            </div>
            <div style={css.statsLevel2}>
              {/*<div>{this.props.longestWord.word}</div>*/}
              {this.props.longestWord.length}
            </div>
            <div style={css.statsLevel1}>
              Average Word Length
            </div>  
            <div style={css.statsLevel2}>
              {this.props.avgWordLength}
            </div>
            {this.props.gameOver ? this.renderTimeElapsed() : null}
          </div>
        </div>
        <button style={css.restartButton} type="submit" onClick={this.props.startGame}>Play again?</button>
      </div>
    );
  }
}

export default GameOverBanner;