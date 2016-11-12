import React, { Component } from 'react';
import MenuBar from './MenuBar.jsx' ;
import PlayGrid from './PlayGrid.jsx' ;

const ROWS = 10;
const COLS = 10;


function create2DArray(ROWS, COLS){
	var rows=[];
	
	for(var i=0; i<ROWS; i++){
		rows.push([]); 
	
		for(var j=0; j<COLS; j++){
			rows[i].push(undefined);
		}
	}
	return rows;
}


const allLetters = "aaaaaaaaaaaaabbbcccddddddeeeeeeeeeeeeeeeeeefffgggghhhiiiiiiiiiiiijjkklllllmmmnnnnnnnnoooooooooopppqqrrrrrrrrrsssssstttttttttuuuuuuvvvwwwxxyyyzz";

var letterPile = allLetters.split('');
console.log("letterPile: " + letterPile + " length: " + letterPile.length);

function selectRandomTile(setOfTilesMin, setOfTilesMax) {
	return Math.floor(Math.random() * (setOfTilesMax - setOfTilesMin) + setOfTilesMin)
}

function createStartingHand(number) {
	var startingHand = [];
	
	for (var i=0; i<number; i++) {
		var selectedTile = selectRandomTile(0, letterPile.length);
		console.log("selectedTile: " + selectedTile);

		startingHand.push(letterPile[selectedTile]);
		letterPile.splice(selectedTile, 1);
	}
	
	console.log("startingHand: " + startingHand + " length: " + startingHand.length);
	console.log("letterPile: " + letterPile + " length: " + letterPile.length);
	return(startingHand);
}

function fill2DArray(array, values){
	for(var row=0; row<array.length; row++){	
		for(var cell=0; cell<array[row].length; cell++){
			if (array[row][cell] === undefined) {
				array[row][cell] = values.shift();
			}
		}
	}
	return array;
}

var PlayingAreaStyle = {
  display: "inline-block",
  marginRight: "300px",
};

var StagingAreaStyle = {
  display: "inline-block",
};

class App extends Component {
  constructor(props) {
  	super(props);

  	var stagingStartingTiles = createStartingHand(21);

  	this.state = {
  		gridLetters: create2DArray(ROWS, COLS),
  		startingLetters: fill2DArray(create2DArray(10, 10), stagingStartingTiles)
  	};
  }

  render() {
    return (
    	<div>
	      <MenuBar>
	      </MenuBar>
	      <div style={PlayingAreaStyle}>
	 	      <PlayGrid id="playingArea" letters={this.state.gridLetters}/>
	      </div>
	      <div style={StagingAreaStyle}>
		      <PlayGrid id="stagingArea" letters={this.state.startingLetters}/>
		    </div>
	    </div>

    );
  }
}

export default App;