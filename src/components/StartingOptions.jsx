import React, { Component } from 'react';
import getFormData from 'get-form-data';
import {colors} from '../helpers/colors.js';


const css = {
  hidden: {
    display: 'none',
  },
  gameTitle: {
    fontSize: '60px',
    textTransform: 'uppercase',
    paddingBottom: '30px',
    textAlign: 'center',
    fontFamily: 'courier',
    transform: 'rotate(-0.02turn)'
  },
  numOfPlayersForm: {
    textAlign: 'center',
  },
  numOfPlayersFormInput: {
    display: 'none',
  },
  numOfPlayersFormLabel: {
    display: 'inline-block',
    backgroundColor: colors.brown,
    border: '1px solid ' + colors.tan,
    margin: '5px 5px 15px 5px',
    height: '30px',
    width: '30px', 
    borderRadius: '15px',
    fontFamily: 'Arial',
    fontSize: '16px',
    textAlign: 'center',
    lineHeight: '30px',
  },
  numOfPlayersFormLabelSelected: {
    display: 'inline-block',
    backgroundColor: colors.white,
    color: colors.brown,
    margin: '5px 5px 15px 5px',
    height: '30px',
    width: '30px', 
    borderRadius: '15px',
    fontFamily: 'Arial',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: '30px',
  },
  startGame: {
    backgroundColor: colors.green,
    color: colors.white,
    fontSize: '24px',
    padding: '4px 16px 4px 16px',
    margin: '45px',
    borderRadius: '20px',
  },
}


class StartingOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    var data = getFormData(event.target);

    event.preventDefault();
    this.props.startGame(data);
  }  

  handleOnClick(event) {
    this.props.setStartingOption(event.target.name, parseInt(event.target.value));
  }

  renderNumOfPlayersRadioButtons () {
    var maxPlayers = 8;
    var radioButtons = [];
    for (var i = 1; i < maxPlayers + 1; i++) {
      let labelStyle = i === this.props.numOfPlayers ? css.numOfPlayersFormLabelSelected : css.numOfPlayersFormLabel;
      radioButtons.push (
        <span key={i-1}>
          <input style={css.numOfPlayersFormInput} type="radio" name="numOfPlayers" id={"p"+i} value={i} onClick={this.handleOnClick.bind(this)}/>
          <label style={labelStyle} htmlFor={"p"+i}>{i}</label>
        </span>
      );
    }
    return radioButtons;    
  }

  render() {
    return (
      <div>
        <div style={css.gameTitle}>
          Letter<br />Game!
        </div>
        <form style={css.numOfPlayersForm} onSubmit={this.handleSubmit}>
          {this.renderNumOfPlayersRadioButtons()}        
          <label><br />Players<br /></label>        
          <input style={css.startGame} type="submit" value="Play!" />
        </form>
      </div>
    );
  }
}

export default StartingOptions;