import React, { Component } from 'react';
import PlayGridCell from './PlayGridCell.jsx';

class PlayGridRow extends Component {
  static propTypes = {
    rowData: React.PropTypes.array.isRequired,
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
    for (var i = 0; i < this.props.rowData.length; i++) {
      columns.push(
        <PlayGridCell 
          cellData={this.props.rowData[i]} 
          dragTile={this.props.dragTile.bind(null, i)} 
          dropTile={this.props.dropTile.bind(null, i)} 
          key={i} 
        />
      );
    }

    return columns;
  } 
}

export default PlayGridRow;