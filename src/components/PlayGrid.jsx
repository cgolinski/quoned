import React, { Component } from 'react';
import PlayGridRow from './PlayGridRow.jsx';


var PlayGridStyle = {
  borderCollapse: "collapse", 
};

class PlayGrid extends Component {
  render() {
    return (
      <table style={PlayGridStyle}>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }

  renderRows() {
    var rows = [];
    for (var i = 0; i < this.props.rows; i++) {
      rows.push(
        <PlayGridRow columns={this.props.columns} />
      );  
    }
    return rows;
  } 
}



export default PlayGrid;