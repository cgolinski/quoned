import React, { Component } from 'react';
import PlayGridCell from './PlayGridCell.jsx';

class PlayGridRow extends Component {
  render() {
    return (
      <tr>
        {this.renderColumns()}
      </tr>
    );
  }

  renderColumns() {
    var columns = [];
    for (var i = 0; i < this.props.columns; i++) {
      columns.push(
        <PlayGridCell />
      );
    }
    return columns;
  } 
}



export default PlayGridRow;