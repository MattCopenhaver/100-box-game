const findMoveOptions = (gameboard, position) => {
  let moveOptions = [];

  // Right
  if (position[0] + 3 < 10 && !gameboard[position[0] + 3][position[1]]) {
    moveOptions.push([position[0] + 3, position[1]])
  }

  // Left
  if (position[0] - 3 >= 0 && !gameboard[position[0] - 3][position[1]]) {
    moveOptions.push([position[0] - 3, position[1]])
  }

  // Up
  if (position[1] + 3 < 10 && !gameboard[position[0]][position[1] + 3]) {
    moveOptions.push([position[0], position[1] + 3])
  }

  // Down
  if (position[1] - 3 >= 0 && !gameboard[position[0]][position[1] - 3]) {
    moveOptions.push([position[0], position[1] - 3])
  }

  // Right-Up
  if (position[0] + 2 < 10 && position[1] + 2 < 10 && !gameboard[position[0] + 2][position[1] + 2]) {
    moveOptions.push([position[0] + 2, position[1] + 2])
  }

  // Left-Up
  if (position[0] - 2 >= 0 && position[1] + 2 < 10 && !gameboard[position[0] - 2][position[1] + 2]) {
    moveOptions.push([position[0] - 2, position[1] + 2])
  }

  // Right-Down
  if (position[0] + 2 < 10 && position[1] - 2 >= 0 && !gameboard[position[0] + 2][position[1] - 2]) {
    moveOptions.push([position[0] + 2, position[1] - 2])
  }

  // Left-Down
  if (position[0] - 2 >= 0 && position[1] - 2 >= 0 && !gameboard[position[0] - 2][position[1] - 2]) {
    moveOptions.push([position[0] - 2, position[1] - 2])
  }

  return moveOptions;
}

module.exports = findMoveOptions;
