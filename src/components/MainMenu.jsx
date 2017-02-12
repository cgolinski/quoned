import React, { Component } from 'react';
import StartingOptions from './StartingOptions.jsx';
import {colors} from '../helpers/colors.js';

const css = {
  MainMenu: {
    alignItems: 'center',
    backgroundColor: colors.brown,
    color: colors.tan,
    display: 'flex',
    fontSize: '18px',
    height: '100%',
    justifyContent: 'center',
    minWidth: '100px', 
  },
};

class MainMenu extends Component {
  static propTypes = {
    
  };

  render() {
    return (
      <div style={css.MainMenu}>
        <StartingOptions 
          difficulty={this.props.difficulty}
          setStartingOption={this.props.setStartingOption}
          startGame={this.props.startGame}
          style={css.startingOptions} 
        /> 
      </div>
    );
  }
}

export default MainMenu;