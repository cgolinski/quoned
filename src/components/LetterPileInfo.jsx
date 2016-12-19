import React, { Component } from 'react';
import LetterTile from './LetterTile.jsx';

const css = {
  peel: {
    width: '70px',
    height: '40px',
    display: 'block', 
    position: 'absolute',
    float: 'left',
  },
  bananas: {
    width: '70px',
    height: '40px',
    display: 'block', 
    position: 'absolute',
    float: 'left',
  },
  hidden: {
    display: 'none',
  },
  remainingTiles: {
    float: 'left',
    marginLeft: '100px',
    marginTop: '10px',
  },
  errors: {
    fontWeight: 'bold',
    display: 'block',
    float: 'left',
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
      <div>
        <button style={peelStyles} type="button" value="Peel" onClick={this.props.peel}>Peel</button>
        <button style={bananasStyles} type="button" value="Bananas" onClick={this.props.bananas}>Bananas</button>
        <div style={css.remainingTiles}>
          Remaining tiles:
          {this.props.letters.count()}
        </div>
        <div style={errorStyles}>
          {this.props.globalErrors}
        </div>
      </div>
    );
  }
}

export default LetterPileInfo;