import React, { Component } from 'react';
import LetterTile from './LetterTile.jsx';
import {colors} from '../helpers/colors.js';

const css = {
  playGridCell: {
    border: `2px dashed ${colors.lightBrown}`,
    width: '50px',
    height: '50px',
    textAlign: 'center',
    padding: '0px',
  },
  error: {
    backgroundColor: 'yellow',
  },
  letter: {
    fontSize: '24px',
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
        style={this.getCellCss()} 
        onDrop={this.dropHandler.bind(this)} 
        onDragOver={this.dragOverHandler.bind(this)}
      >
        {this.props.cellData.letter === undefined ? null : 
          <span style={css.letter}>
            <LetterTile 
              letter={this.props.cellData.letter}
              dragTile={this.props.dragTile}
            />
          </span> 
        }
      </td>
    );
  }
}

export default PlayGridCell;