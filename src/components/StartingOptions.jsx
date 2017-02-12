import React, { Component } from 'react';
import getFormData from 'get-form-data';
import {colors} from '../helpers/colors.js';


const css = {
  hidden: {
    display: 'none',
  },
  gameTitle: {
    fontFamily: 'Futura, Helvetica, Arial, sans-serif',
    fontSize: '60px',
    paddingBottom: '30px',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  startingOptionsForm: {
    fontFamily: 'Futura, Helvetica, Arial, sans-serif',
    textAlign: 'center',
  },
  difficultyForm: {
    borderBottom: '3px double ' + colors.tan,
    borderTop: '3px double ' + colors.tan,
  },
  difficultyFormInput: {
    display: 'none',
  },
  difficultyFormLabel: {
    backgroundColor: colors.brown,
    border: '2px solid ' + colors.tan,
    borderRadius: '17px',
    cursor: 'pointer',
    display: 'inline-block',
    fontFamily: 'Futura, Helvetica, Arial, sans-serif',
    fontSize: '16px',
    height: '30px',
    lineHeight: '30px',
    margin: '0px 5px 25px 5px',
    textAlign: 'center',
    width: '30px', 
  },
  difficultyFormLabelSelected: {
    backgroundColor: colors.tan,
    border: '1px solid ' + colors.tan,
    borderRadius: '17px',
    color: colors.brown,
    display: 'inline-block',
    fontFamily: 'Futura, Helvetica, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
    height: '30px',
    lineHeight: '30px',
    margin: '0px 5px 25px 5px',
    textAlign: 'center',
    width: '30px', 
  },
  startGame: {
    backgroundColor: colors.green,
    border: 'none',
    borderRadius: '20px',
    color: colors.white,
    cursor: 'pointer',
    fontFamily: 'Futura, Helvetica, Arial, sans-serif',
    fontSize: '20px',
    margin: '45px',
    padding: '4px 20px 4px 20px',
    textTransform: 'uppercase',
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
    this.props.startGame();
  }  

  handleOnClick(event) {
    this.props.setStartingOption(event.target.name, parseInt(event.target.value));
  }

  renderDifficultyRadioButtons() {
    var maxDifficulty = 4;
    var radioButtons = [];
    for (var i = 1; i < maxDifficulty + 1; i++) {
      let labelStyle = i === this.props.difficulty ? css.difficultyFormLabelSelected : css.difficultyFormLabel;
      radioButtons.push (
        <span key={i-1}>
          <input style={css.difficultyFormInput} type="radio" name="difficulty" id={"p"+i} value={i} onClick={this.handleOnClick.bind(this)}/>
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
          Quoned!
        </div>
        <form style={css.startingOptionsForm} onSubmit={this.handleSubmit}>
          <div style={css.difficultyForm}>
            <p>Difficulty Level:</p>
            {this.renderDifficultyRadioButtons()}  
          </div>              
          <input style={css.startGame} type="submit" value="Play" />
        </form>
      </div>
    );
  }
}

export default StartingOptions;