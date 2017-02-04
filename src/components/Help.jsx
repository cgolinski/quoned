import React, { Component } from 'react';
import {colors} from '../helpers/colors.js';


const css = {
}

css.helpBanner = {
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textAlign: 'left',
  minHeight: '85%',
  height: '85%',
  width: '80%',
  backgroundColor: colors.darkGreen,
  top: '-85%',
  overflowY: 'scroll',
  fontSize: '18px',
  fontFamily: 'Futura',
  border: '3px double ' + colors.green,
  borderRadius: '4px',
  boxSizing: 'border-box',
  padding: '20px 5px 20px 10px',
  marginLeft: '10%',
  transition: 'top 0.8s ease-out',
};

css.helpBannerShowing = Object.assign({}, css.helpBanner, {top: '-3px',});

css.helpTitle = {
  fontSize: '20px',
  paddingBottom: '30px',
};


class Help extends Component {
  static propTypes = {
    
  };

  render() {
    var helpStyles = this.props.showHelp ? css.helpBannerShowing : css.helpBanner;
    var helpTitle = 'How To Play';
    var helpMessage = 'Create words with your letters, going left to right or top to bottom. When all words are connected, click the LETTER button to get another tile. Incorporate the new letter by rearranging letters into new words where necessary. Use all letters in the letterpile to win.';
    
    return (        
        <div style={helpStyles}>
          <div style={css.helpTitle}>{helpTitle}</div>
          <div>{helpMessage}</div>
        </div>
    );
  }
}

export default Help;