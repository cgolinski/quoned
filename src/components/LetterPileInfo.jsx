import React, { Component } from 'react';
import LetterTile from './LetterTile.jsx';

var LetterPileInfoStyle = {
  
};

class LetterPileInfo extends Component {
  static propTypes = {
    letters: React.PropTypes.object.isRequired,
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

export default LetterPileInfo;