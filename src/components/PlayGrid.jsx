import React, { Component } from 'react';
import PlayGridRow from './PlayGridRow.jsx';

const css = {
  playGrid: {
    borderCollapse: 'collapse', 
  },
};

class PlayGrid extends Component {
  static propTypes = {
    letters: React.PropTypes.array.isRequired
  };

  render() {
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
    for (var i = 0; i < this.props.letters.length; i++) {
      rows.push(
        <PlayGridRow key={i} letters={this.props.letters[i]} selectCell={this.props.selectCell.bind(null, i)} />
      );  
    }
    return rows;
  } 
}

export default PlayGrid;