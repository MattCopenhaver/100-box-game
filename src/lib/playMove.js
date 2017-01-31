const playMove = (gameboard, position, moveNumber) => {
  gameboard[position[0]][position[1]] = moveNumber;

  return gameboard;
}

module.exports = playMove;
