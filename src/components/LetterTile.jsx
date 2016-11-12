import React, { Component } from 'react';

var LetterTileStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  backgroundColor: "#f9ebc0",
  color: "#2b281d",
  width: "70%",
  height: "70%",
  paddingTop: "6px",
  display: "inline-block",
  margin: "0px",
  borderRadius: "4px",
  textShadow: "0px 1px 0px white",
  boxShadow: "inset 1px 1px 3px #ffffd0, inset -1px -1px 3px #d3ca94",
};

class LetterTile extends Component {
  static propTypes = {
    letter: React.PropTypes.string
  };

  render() {
    return (
      <span style={LetterTileStyle}>
        {this.props.letter}
      </span>
    );
  }
}

export default LetterTile;