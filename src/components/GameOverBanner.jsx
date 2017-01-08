import React, { Component } from 'react';
import {colors} from '../helpers/colors.js';
import {timePad} from '../helpers/time.js';

var css = {
  gameOverBanner: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80%',
    width: '80%',
    backgroundColor: colors.tan,
    top: '0',
    fontSize: '24px',
    fontFamily: 'Futura',
    boxSizing: 'border-box',
    padding: '20px 0px 20px 0px',
    marginLeft: '10%',
  },
  gameOver: {
    fontFamily: 'Futura',
    textTransform: 'uppercase',
  },
  stats: {
    fontSize: '16px',
    fontFamily: 'Futura',
  },
  wordCount: {
    fontSize: '16px',
    fontFamily: 'Futura',
  },
  longestWord: {
    marginTop: '20px',
  },
  statsLevel2: {
    fontSize: '12px',
  },
  avgWordLength: {
    marginTop: '20px',
  },
  timeElapsed: {
    marginTop: '20px',
  },
  restartButton: {
    display: 'block',
    backgroundColor: colors.green,
    borderRadius: '20px',
    border: 'none',
    fontFamily: 'Futura',
    textTransform: 'uppercase',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: '16px',
    textDecoration: 'none',
    padding: '7%',
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

  renderTimeElapsed() {
    return (
      <div style={css.timeElapsed}>
        <span> Time Elapsed: </span>
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
      <div style={css.gameOverBanner}>
        <span style={css.gameOver}>You Win</span>
        <div style={css.stats}>
          <div style={css.wordCount}>
            <span>Word count: </span>
            {this.props.wordCount}
          </div>
          <div style={css.longestWord}>
            <span> Longest Word: </span>
            <div style={css.statsLevel2}>
              <div>{this.props.longestWord.word}</div>
              {this.props.longestWord.length}
              <span> letters</span>
            </div>
          </div>
          <div style={css.avgWordLength}>
            <span>Average Word Length: </span> 
            <div style={css.statsLevel2}>
              {this.props.avgWordLength}
              <span> letters</span>
            </div>
          </div>
          {this.renderTimeElapsed()}
        </div>
        <button style={css.restartButton} type="submit" onClick={this.props.startGame}>Play again?</button>
      </div>
    );
  }
}

export default GameOverBanner;