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
    letter: React.PropTypes.string
  };

  dropHandler(event) {
    event.preventDefault();
    this.props.selectCell();
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
        {this.props.letter === undefined ? null : 
          <span style={css.letter}>
            <LetterTile letter={this.props.letter}
                        selectCell={this.props.selectCell}
            />
          </span> 
        }
      </td>
    );
  }
}

export default PlayGridCell;