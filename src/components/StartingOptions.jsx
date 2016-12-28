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
    paddingTop: '80px',
    paddingBottom: '80px',
    textAlign: 'center',
  },
  numOfPlayersForm: {
    textAlign: 'center',
  },
  startGame: {
    backgroundColor: colors.green,
    color: colors.white,
    fontSize: '24px',
    width: '80px',
    height: '40px',
    margin: '10px',
    borderRadius: '5px',
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

  render() {
    return (
      <div>
        <div style={css.gameTitle}>
          Letter<br />Game!
        </div>
        <form style={css.numOfPlayersForm} onSubmit={this.handleSubmit}>
          <label> 
            <select name="numOfPlayers" >
              <option value="1">1</option> 
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <br />Players<br />
          </label>

          <input style={css.startGame} type="submit" value="Go!" />
        </form>
      </div>
    );
  }
}

export default StartingOptions;