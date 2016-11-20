import React, { Component } from 'react';
import LetterPileInfo from './LetterPileInfo.jsx';


var MenuBarStyle = {
  color: 'blue',
  fontSize: '18px',
  border: '1px solid black',
  padding: '10px',
  paddingBottom: '60px',
  backgroundColor: 'orange',
  display: 'block',
  minWidth: '500px', 
  width: '60%',
  marginLeft: '50px',
  marginBottom: '20px',
};

class MenuBar extends Component {
  static propTypes = {
    letters: React.PropTypes.object.isRequired,
    peel: React.PropTypes.func.isRequired,
    nextPeelWins: React.PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div style={MenuBarStyle}>
        <LetterPileInfo letters={this.props.letters} nextPeelWins={this.props.nextPeelWins} peel={this.props.peel} bananas={this.props.bananas} />
      </div>

    );
  }
}

export default MenuBar;