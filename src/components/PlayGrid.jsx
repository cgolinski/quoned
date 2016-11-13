import React, { Component } from 'react';
import PlayGridRow from './PlayGridRow.jsx';

var PlayGridStyle = {
  borderCollapse: "collapse", 
};

class PlayGrid extends Component {
  static propTypes = {
    letters: React.PropTypes.array.isRequired
  };

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
    for (var i = 0; i < this.props.letters.length; i++) {
      rows.push(
        <PlayGridRow key={i} letters={this.props.letters[i]} />
      );  
    }
    return rows;
  } 
}

export default PlayGrid;