import React, { Component } from 'react';
import {colors} from '../helpers/colors.js';


const css = {
}

css.helpBanner = {
  alignItems: 'center',
  backgroundColor: colors.darkGreen,
  border: '3px double ' + colors.green,
  borderRadius: '4px',
  boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.5)',
  boxSizing: 'border-box',
  cursor: 'default',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Futura, Helvetica, Arial, sans-serif',
  fontSize: '18px',
  height: '85%',
  justifyContent: 'flex-start',
  marginLeft: '10%',
  minHeight: '85%',
  overflowY: 'auto',
  padding: '20px 5px 20px 10px',
  position: 'absolute',
  textAlign: 'left',
  top: '-86%',
  transition: 'top 0.8s ease-out',
  width: '80%',
  zIndex: '1',
};

css.helpBannerShowing = Object.assign({}, css.helpBanner, {top: '-3px',});

css.helpTitle = {
  fontSize: '20px',
  paddingBottom: '30px',
};

css.helpMessage = {
  maxWidth: '100%',
};

class Help extends Component {
  static propTypes = {
    
  };

  render() {
    var helpStyles = this.props.showHelp ? css.helpBannerShowing : css.helpBanner;
    var helpTitle = 'How To Play';
    var helpMessage = 'Create words with your letters, going from left to right or top to bottom. When all words are connected, click the LETTER button to get another tile. Incorporate the new letter by rearranging letters into new words where necessary. Use all letters in the letterpile to win.';
    
    return (        
        <div style={helpStyles} onClick={this.props.toggleHelp}>
          <div style={css.helpTitle}>{helpTitle}</div>
          <div style={css.helpMessage}>{helpMessage}</div>
        </div>
    );
  }
}

export default Help;