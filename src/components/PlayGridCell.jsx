import React, { Component } from 'react';
import LetterTile from './LetterTile.jsx';
import {colors} from '../helpers/colors.js';

const css = {
  playGridCell: {
    border: `2px dashed ${colors.lightBrown}`,
    height: '50px',
    padding: '0px',
    textAlign: 'center',
    width: '50px',
  },
  error: {
    backgroundColor: colors.pink,
  },
  letter: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
};

class PlayGridCell extends Component {
  static propTypes = {
    cellData: React.PropTypes.object,
    dropTile: React.PropTypes.func.isRequired,
  };

  dropHandler(event) {
    event.preventDefault();
    this.props.dropTile();
    console.log('Dropped!');
  }

  dragOverHandler(event) {
    event.preventDefault(); 
    event.dataTransfer.dropEffect = 'move';
    console.log('Drag Over Handler!');
  }

  getCellCss() {
    var styles = Object.assign({}, css.playGridCell);
    if (this.props.cellData.error) {
      Object.assign(styles, css.error);
    }
    return styles;
  }

  render() {
    return (
      <td 
        onDragOver={this.dragOverHandler.bind(this)}
        onDrop={this.dropHandler.bind(this)} 
        style={this.getCellCss()} 
      >
        {this.props.cellData.letter === undefined ? null : 
          <span style={css.letter}>
            <LetterTile 
              dragTile={this.props.dragTile}
              letter={this.props.cellData.letter}
            />
          </span> 
        }
      </td>
    );
  }
}

export default PlayGridCell;