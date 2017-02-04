import React, { Component } from 'react';
import {colors} from '../helpers/colors.js';

var LetterTileStyle = {
  fontSize: '19px',
  fontFamily: 'Futura',
  textTransform: 'uppercase',
  backgroundColor: colors.tan,
  color: colors.darkBrown,
  width: '75%',
  height: '75%',
  paddingTop: '6px',
  display: 'inline-block',
  margin: '0px',
  borderRadius: '4px',
  cursor: 'move',
};

class LetterTile extends Component {
  static propTypes = {
    letter: React.PropTypes.string,
    onDragStart: React.PropTypes.func,
  };

  render() {
    return (
      <span style={LetterTileStyle} draggable="true" onDragStart={this.props.dragTile}>
        {this.props.letter}
      </span>
    );
  }
}

export default LetterTile;