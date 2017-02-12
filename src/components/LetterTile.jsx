import React, { Component } from 'react';
import {colors} from '../helpers/colors.js';

var LetterTileStyle = {
  display: 'flex', 
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '19px',
  fontFamily: 'Futura, Helvetica, Arial, sans-serif',
  textTransform: 'uppercase',
  backgroundColor: colors.tan,
  color: colors.darkBrown,
  width: '36px',
  height: '36px',
  padding: '0px',
  margin: '7px',
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