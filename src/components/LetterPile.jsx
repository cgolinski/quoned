import React, { Component } from 'react';
import LetterTile from './LetterTile.jsx';

var LetterPileStyle = {
  
};

class LetterPile extends Component {
  static propTypes = {
    letters: React.PropTypes.array.isRequired,
    peel: React.PropTypes.func.isRequired,
    //numberOfPlayers: React.PropTypes.number.isRequired
  };

  render() {
    return (
      <div>
        <button type="button" value="Peel" onClick={this.props.peel}>Peel</button>
      </div>
    );
  }
}

export default LetterPile;