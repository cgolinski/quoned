import React, { Component } from 'react';
import {colors} from '../helpers/colors.js';
import {timePad} from '../helpers/time.js';

var css = {
  gameOver: {
    borderBottom: '1px solid ' + colors.green,
    display: 'inline-block',
    fontFamily: 'Futura, Helvetica, Arial, sans-serif',
    padding: '0px 0px 10px 0px',
    textTransform: 'uppercase',
  },
  stats: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Futura, Helvetica, Arial, sans-serif',
    fontSize: '16px',
    justifyContent: 'space-between',
    paddingTop: '10px',
    top: '0px',
  },
  statsLevel1: {
    fontSize: '16px',
  },
  statsLevel2: {
    fontSize: '36px',
    fontWeight: 'normal',
    paddingBottom: '10px',
    paddingTop: '3px',
  },
  restartButton: {
    backgroundColor: colors.white,
    border: 'none',
    borderRadius: '20px',
    color: colors.darkGreen,
    display: 'block',
    fontFamily: 'Futura, Helvetica, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    outline: 'none',
    padding: '10px 15px',
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
};

css.gameOverBanner = {
  alignItems: 'center',
  backgroundColor: colors.darkGreen,
  border: '3px double ' + colors.green,
  borderRadius: '4px',
  boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.5)',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Futura, Helvetica, Arial, sans-serif',
  fontSize: '24px',
  height: '85%',
  justifyContent: 'space-between',
  marginLeft: '10%',
  minHeight: '85%',
  overflowY: 'auto',
  padding: '20px 0px 20px 0px',
  position: 'absolute',
  textAlign: 'center',
  top: '-86%',
  transition: 'top 0.8s ease-out',
  width: '80%',
  zIndex: '1',
};

css.gameOverBannerShowing = Object.assign({},css.gameOverBanner, {top: '-3px',});

class GameOverBanner extends Component {

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