import React, { Component } from 'react';
import Help from './Help.jsx';
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
    fontFamily: 'Futura, Helvetica, Arial, sans-serif',
    fontSize: '30px',
    marginBottom: '20px',
    marginTop: '10px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  peel: {
    backgroundColor: colors.green,
    border: 'none',
    borderRadius: '20px',
    color: colors.white,
    cursor: 'pointer',
    display: 'block',
    fontFamily: 'Futura, Helvetica, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    height: '40px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    outline: 'none',
    textTransform: 'uppercase',
    width: '80%',
  },
  bananas: {
    backgroundColor: colors.green,
    border: 'none',
    borderRadius: '20px',
    color: colors.white,
    cursor: 'pointer',
    display: 'block',
    fontFamily: 'Futura, Helvetica, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    height: '40px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    outline: 'none',
    textTransform: 'uppercase',
    width: '80%',
  },
  hidden: {
    display: 'none',
  },
  errors: { 
    fontWeight: 'bold',
    marginBottom: '20px',
    marginLeft: '500px',
  },
  letterPileImage: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column-reverse',
    marginBottom: '0px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  letterTileInPile: {
    backgroundColor: colors.tan,
    borderTop: '1px solid ' + colors.darkTan,
    height: '8px',
    position: 'relative',
    width: '50px',
  },
}

class LetterPileInfo extends Component {
  static propTypes = {
    bananas: React.PropTypes.func.isRequired,
    letters: React.PropTypes.object.isRequired,
    nextPeelWins: React.PropTypes.bool.isRequired,
    peel: React.PropTypes.func.isRequired,
  };

  renderLetterPileImage() {
    var letterPileCount = this.props.letters.count();
    var letterPileImage = [];
    var left = [0, 4, 2, 6, 4, 3, 2, 6, 2, 0, 2, 5, 3, 7, 4, 2, 7, 3, 4, 5, 0, 6, 4, 3, -1, 1, 4, -1, 5, 2];

    for (var i = 0; i < letterPileCount; i++) {
      var newStyle = Object.assign({}, css.letterTileInPile, { left: left[i] });

      letterPileImage.push (
        <div key={i}>
          <div style={newStyle}>
          </div>
        </div>
      )
    }
    return letterPileImage;
  }
 

  render() {
    var peelStyles = this.props.nextPeelWins ? css.hidden : css.peel;
    var bananasStyles = this.props.nextPeelWins ? css.bananas : css.hidden;

    return (
      <div style={css.letterPileInfo}>
        <div style={css.infoTop}>
          <div style={css.gameTitle}>
            Quoned!
          </div>
          <div>
            <button onClick={this.props.peel} style={peelStyles} type="button" value="Peel">
              Letter
            </button>
            <button onClick={this.props.bananas} style={bananasStyles} type="button" value="Bananas">
              Game
            </button>
          </div>
        </div>
        <div style={css.infoBottom}>
          <div>
            <Help showHelp={this.props.showHelp} toggleHelp={this.props.toggleHelp} /> 
          </div>
          <div style={css.letterPileImage}>
            {this.renderLetterPileImage()}
          </div>
        </div>
      </div>
    );
  }
}

export default LetterPileInfo;