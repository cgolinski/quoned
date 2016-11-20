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
}

class LetterPileInfo extends Component {
  static propTypes = {
    letters: React.PropTypes.object.isRequired,
    peel: React.PropTypes.func.isRequired,
    bananas: React.PropTypes.func.isRequired,
    nextPeelWins: React.PropTypes.bool.isRequired,
  };

  render() {
    var peelStyles = this.props.nextPeelWins ? css.hidden : css.peel;
    var bananasStyles = this.props.nextPeelWins ? css.bananas : css.hidden;

    return (
      <div>
        <button style={peelStyles} type="button" value="Peel" onClick={this.props.peel}>Peel</button>
        <button style={bananasStyles} type="button" value="Bananas" onClick={this.props.bananas}>Bananas</button>
        <div style={css.remainingTiles}>
          Remaining tiles:
          {this.props.letters.count()}
        </div>
      </div>
    );
  }
}

export default LetterPileInfo;