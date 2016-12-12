import React, { Component } from 'react';
import PlayGridRow from './PlayGridRow.jsx';

const css = {
  playGrid: {
    borderCollapse: 'collapse', 
  },
};

class PlayGrid extends Component {
  static propTypes = {
    gridData: React.PropTypes.array,
  };

  render() {
    if (this.props.gridData === null) { return null; }

    return (
      <table style={css.playGrid}>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }

  renderRows() {
    var rows = [];
    for (var i = 0; i < this.props.gridData.length; i++) {
      rows.push(
        <PlayGridRow key={i} rowData={this.props.gridData[i]} dragTile={this.props.dragTile.bind(null, i)} dropTile={this.props.dropTile.bind(null, i)} />
      );  
    }
    return rows;
  } 
}

export default PlayGrid;