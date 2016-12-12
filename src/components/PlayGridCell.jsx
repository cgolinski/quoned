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

  render() {
    return (
      <td style={css.playGridCell} onDrop={this.dropHandler.bind(this)} onDragOver={this.dragOverHandler.bind(this)}>
        {this.props.cellData.letter === undefined ? null : 
          <span style={css.letter}>
            <LetterTile letter={this.props.cellData.letter}
                        dragTile={this.props.dragTile}
            />
          </span> 
        }
      </td>
    );
  }
}

export default PlayGridCell;