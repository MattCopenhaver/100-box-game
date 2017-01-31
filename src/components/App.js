import React   from 'react';
import './App.css';
import Row from './Row';
var gameStore = require('../stores/gameStore');
var actions = require('../actions/actions');

function getAppState() {
  return {
    gameStore: gameStore.getState()
  };
}

var displayRows = function (rows, moveOptions) {
  var count = 0;
  var displayRows = [];
  rows.forEach(function (row) {
    displayRows.push(<Row key={count} moveOptions={moveOptions} row={row} rowNumber={count}/>)
    count++;
  });
  return (
    <div className='grid'>
      {
        displayRows
      }
    </div>
  )
}

var App = React.createClass({
  getInitialState: function() {
    return getAppState();
  },

  // Listen for changes
  componentDidMount: function() {
    gameStore.addChangeListener(this._onChange);
  },

  // Unbind change listener
  componentWillUnmount: function() {
    gameStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getAppState());
  },

  render: function() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>100 Box Game</h2>
        </div>
        <div className="body">
          {displayRows(this.state.gameStore.gameboard, this.state.gameStore.moveOptions)}
        </div>
        <button onClick={function () {actions.undo()}}>Undo</button>
        <button onClick={function () {actions.reset()}}>Reset</button>

      </div>
    );
  }
});

export default App;
