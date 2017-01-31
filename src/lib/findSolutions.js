var findMoveOptions = require('./findMoveOptions');
var playMove = require('./playMove');
var _ = require('lodash');

const findSolutions = (gameboard, position, moveNumber) => {
  gameboard = playMove(gameboard, position, moveNumber);

  console.log(gameboard);
  console.log(position, moveNumber);

  var keepGoing = true;


  if (moveNumber === 100) {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log(gameboard)
    return false;
  }
  moveNumber++;
  var moveOptions = findMoveOptions(gameboard, position);
  var moveOptions = _.shuffle(moveOptions);

  moveOptions.every((moveOption) => {
    keepGoing = findSolutions(gameboard, moveOption, moveNumber);
    if (!keepGoing) {
      return false;
    } else {
      return true;
    }
  })
  if (!keepGoing) {
    return false;
  }

  moveNumber--;
  gameboard = playMove(gameboard, position, 0);
  return true;
}

module.exports = findSolutions
