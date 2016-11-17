import React, { Component } from 'react';
import LetterTile from './LetterTile.jsx';

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
        <span>
          Remaining tiles:
          {this.props.letters.count()}
        </span>
      </div>
    );
  }
}

export default LetterPileInfo;