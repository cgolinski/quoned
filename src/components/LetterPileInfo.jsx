import React, { Component } from 'react';
import LetterTile from './LetterTile.jsx';
import {colors} from '../helpers/colors.js';


const css = {
  letterPileInfo: {
    display: 'flex',
    flex: '1',
    flexFlow: 'column',
    justifyContent: 'space-between',
  },
  infoTop: {
    height: '400px',
  },
  infoBottom: { 
  },
  gameTitle: {
    fontSize: '30px',
    marginTop: '10px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  peel: {
    display: 'block',
    width: '80%',
    height: '40px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: colors.white,
    borderRadius: '7px',
  },
  bananas: {
    display: 'block',
    width: '80%',
    height: '40px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: colors.white,
    borderRadius: '7px',
  },
  hidden: {
    display: 'none',
  },
  errors: { 
    fontWeight: 'bold',
    marginBottom: '20px',
    marginLeft: '10px',
  },
  letterPileImage: {
    border: '1px solid black',
    height: '160px',
    width: '100px',
    display: 'block',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: colors.tan,
  },
  remainingTiles: {
    display: 'flex',
    backgroundColor: colors.grey,
    height: '40px',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

class LetterPileInfo extends Component {
  static propTypes = {
    letters: React.PropTypes.object.isRequired,
    peel: React.PropTypes.func.isRequired,
    bananas: React.PropTypes.func.isRequired,
    nextPeelWins: React.PropTypes.bool.isRequired,
    globalErrors: React.PropTypes.array.isRequired,
  };

  render() {
    var peelStyles = this.props.nextPeelWins ? css.hidden : css.peel;
    var bananasStyles = this.props.nextPeelWins ? css.bananas : css.hidden;
    var errorStyles = this.props.globalErrors.length > 0 ? css.errors : css.hidden;

    return (
      <div style={css.letterPileInfo}>
        <div style={css.infoTop}>
          <div style={css.gameTitle}>
            Letter Game
          </div>
          <div>
            <button style={peelStyles} type="button" value="Peel" onClick={this.props.peel}>
              Peel!
            </button>
            <button style={bananasStyles} type="button" value="Bananas" onClick={this.props.bananas}>
              Bananas!
            </button>
          </div>
          <div style={errorStyles}>
            Errors:&nbsp;
            {this.props.globalErrors}
          </div>
        </div>
        <div style={css.infoBottom}>
          <div style={css.letterPileImage}>
            [Image goes here]
          </div>
          <div style={css.remainingTiles}>
            Remaining tiles:&nbsp;
            {this.props.letters.count()}
          </div>
        </div>
      </div>
    );
  }
}

export default LetterPileInfo;