import React, { Component } from 'react';

var MenuBarStyle = {
  color: "blue",
  fontSize: "18px",
  border: "1px solid black",
  padding: "10px",
  backgroundColor: "orange",
  display: "block", 
  width: "300px",
  marginLeft: "50px"
}

class MenuBar extends Component {
  render() {
    return (
      <p style={MenuBarStyle}>
        Hello, I am a Menu Bar.
      </p>
    );
  }
}

export default MenuBar;