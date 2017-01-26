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
    fontSize: '30px',
    marginTop: '10px',
    marginBottom: '20px',
    textAlign: 'center',
    fontFamily: 'Futura',
    textTransform: 'uppercase',
  },
  peel: {
    display: 'block',
    width: '80%',
    height: '40px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: colors.green,
    borderRadius: '20px',
    border: 'none',
    fontFamily: 'Futura',
    textTransform: 'uppercase',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: '16px',
    outline: 'none',
  },
  bananas: {
    display: 'block',
    width: '80%',
    height: '40px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: colors.green,
    borderRadius: '20px',
    border: 'none',
    fontFamily: 'Futura',
    textTransform: 'uppercase',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: '16px',
    outline: 'none',
  },
  helpButton: {
    position: 'absolute',
    display: 'block',
    marginBottom: '20px',
    marginLeft: '10px',
    padding: '6px 14px',
    backgroundColor: colors.green,
    borderRadius: '20px',
    border: 'none',
    fontFamily: 'Futura',
    textTransform: 'uppercase',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: '18px',
    outline: 'none',
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
    marginBottom: '0px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  letterTileInPile: {
    borderTop: '1px solid ' + colors.darkTan,
    height: '8px',
    width: '50px',
    position: 'relative',
    backgroundColor: colors.tan,
  },
}

class LetterPileInfo extends Component {
  static propTypes = {
    letters: React.PropTypes.object.isRequired,
    peel: React.PropTypes.func.isRequired,
    bananas: React.PropTypes.func.isRequired,
    nextPeelWins: React.PropTypes.bool.isRequired,
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
            <button style={peelStyles} type="button" value="Peel" onClick={this.props.peel}>
              Letter
            </button>
            <button style={bananasStyles} type="button" value="Bananas" onClick={this.props.bananas}>
              Game
            </button>
          </div>
        </div>
        <div style={css.infoBottom}>
          <div>
            <button style={css.helpButton} onClick={this.props.toggleHelp}>
              ?
            </button>
            <Help showHelp={this.props.showHelp} /> 
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