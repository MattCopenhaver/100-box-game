var dispatcher = require('../dispatcher/dispatcher.js');

var actions = {
  playMove: function (move) {
    dispatcher.dispatch({
      actionType: 'PLAY_MOVE',
      move: move
    });
  },

  undo: function () {
    dispatcher.dispatch({
      actionType: 'UNDO'
    });
  },

  reset: function () {
    dispatcher.dispatch({
      actionType: 'RESET'
    });
  }
}

module.exports = actions;
