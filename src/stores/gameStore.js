var dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
const objectAssign = require('object-assign');
const playMove = require('../lib/playMove');
const findMoveOptions = require('../lib/findMoveOptions');
var _ = require('lodash');

// Internal object of shoes
var _moveNumber = 1;
var _gameboard =
[ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ];
var _initalMoveOptions = [];
for (var x = 0; x < 10; x++) {
  for (var y = 0; y < 10; y++) {
    _initalMoveOptions.push([x, y]);
  }
}
var _moveOptions = _initalMoveOptions;
var _moveHistory = [];


// Merge our store with Node's Event Emitter
var gameStore = objectAssign(EventEmitter.prototype, {
  getState: function() {
    return {
      gameboard: _gameboard,
      moveOptions: _moveOptions
    }
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

dispatcher.register(function(payload) {
  switch (payload.actionType) {
    case 'PLAY_MOVE':
      _gameboard = playMove(_gameboard, payload.move, _moveNumber);
      _moveNumber++;
      _moveOptions = findMoveOptions(_gameboard, payload.move)
      _moveHistory.push(payload.move);
      break;

    case 'UNDO':
      if (_moveHistory.length === 0) { break; }
      _gameboard = playMove(_gameboard, _moveHistory.pop(), 0);
      if (_moveHistory.length === 0) {
        _moveOptions = _initalMoveOptions;
      } else {
        _moveOptions = findMoveOptions(_gameboard, _.last(_moveHistory));
      }
      _moveNumber--;
      break;

    case 'RESET':
      _moveNumber = 1;
      _moveOptions = _initalMoveOptions;
      _gameboard =
      [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ];
      _moveHistory = [];
      break;

    default:
     return;
  }

  gameStore.emitChange();

});

module.exports = gameStore;
