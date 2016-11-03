import React, { Component } from 'react';
import MenuBar from './MenuBar.jsx' ;
import PlayGrid from './PlayGrid.jsx' ;



class App extends Component {
  render() {
    return (
    	<div>
	      <MenuBar>
	      </MenuBar>
	      <PlayGrid rows={10} columns={10} />
      </div>
    );
  }
}

export default App;