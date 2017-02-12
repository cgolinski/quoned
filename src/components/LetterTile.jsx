import React, { Component } from 'react';
import {colors} from '../helpers/colors.js';

var LetterTileStyle = {
  alignItems: 'center',
  backgroundColor: colors.tan,
  borderRadius: '4px',
  color: colors.darkBrown,
  cursor: 'move',
  display: 'flex', 
  fontFamily: 'Futura, Helvetica, Arial, sans-serif',
  fontSize: '19px',
  height: '36px',
  justifyContent: 'center',
  margin: '7px',
  padding: '0px',
  textTransform: 'uppercase',
  width: '36px',
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