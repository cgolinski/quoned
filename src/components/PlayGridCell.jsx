import React, { Component } from 'react';
import LetterTile from './LetterTile.jsx';

var PlayGridCellStyle = {
  border: "1px solid white",
  width: "50px",
  height: "50px",
  textAlign: "center",
  padding: "0px",
};

var LetterStyle = {
  fontSize: "24px",
  fontWeight: "bold"
};

class PlayGridCell extends Component {
  render() {
    return (
      <td style={PlayGridCellStyle}>
        <span style={LetterStyle}>
          <LetterTile letter="A" />
        </span>
      </td>
    );
  }
}

export default PlayGridCell;