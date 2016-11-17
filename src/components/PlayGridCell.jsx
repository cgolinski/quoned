import React, { Component } from 'react';
import LetterTile from './LetterTile.jsx';

const css = {
  playGridCell: {
    border: '1px solid grey',
    width: '50px',
    height: '50px',
    textAlign: 'center',
    padding: '0px',
  },
  letter: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

class PlayGridCell extends Component {
  static propTypes = {
    letters: React.PropTypes.string
  };

  render() {
    return (
      <td style={css.playGridCell}>
        <span style={css.letter}>
          <LetterTile letter={this.props.letters} onClick={this.props.selectCell} />
        </span>
      </td>
    );
  }
}

export default PlayGridCell;