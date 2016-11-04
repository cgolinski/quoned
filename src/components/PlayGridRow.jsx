import React, { Component } from 'react';
import PlayGridCell from './PlayGridCell.jsx';

var PlayGridRowStyle = {

};

class PlayGridRow extends Component {
  render() {
    return (
      <tr style={PlayGridRowStyle}>
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