import React, { Component } from 'react';
import getFormData from 'get-form-data';

const css = {
  hidden: {
    display: 'none',
  },
  gameTitle: {
    fontSize: '30px',
    marginTop: '10px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  startGame: {
    backgroundColor: 'white',
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
          Letter Game
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>No. of players 
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
          </label>

          <input style={css.startGame} type="submit" value="Start Game" />
        </form>
      </div>
    );
  }
}

export default StartingOptions;