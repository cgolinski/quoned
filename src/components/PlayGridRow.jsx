import React, { Component } from 'react';
import PlayGridCell from './PlayGridCell.jsx';

class PlayGridRow extends Component {
  static propTypes = {
    letters: React.PropTypes.array.isRequired,
  };

  render() {
    return (
      <tr>
        {this.renderColumns()}
      </tr>
    );
  }

  renderColumns() {
    var columns = [];
    for (var i = 0; i < this.props.letters.length; i++) {
      columns.push(
        <PlayGridCell key={i} letter={this.props.letters[i]} dragTile={this.props.dragTile.bind(null, i)} dropTile={this.props.dropTile.bind(null, i)} />
      );
    }

    return columns;
  } 
}

export default PlayGridRow;