import React, { Component } from 'react';
import StartingOptions from './StartingOptions.jsx';
import {colors} from '../helpers/colors.js';

const css = {
  MainMenu: {
    height: '100%',
    fontSize: '18px',
    backgroundColor: colors.brown,
    color: colors.tan,
    minWidth: '100px', 
    textAlign: 'center',
  },
};

class MainMenu extends Component {
  static propTypes = {
    
  };

  render() {
    return (
      <div style={css.MainMenu}>
        <StartingOptions 
          style={css.startingOptions} 
          startGame={this.props.startGame}
          numOfPlayers={this.props.numOfPlayers}
          setStartingOption={this.props.setStartingOption}
        /> 
      </div>
    );
  }
}

export default MainMenu;