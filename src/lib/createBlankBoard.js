let createBlankBoard = () => {
  let gameboard = [];
  for (var i=0; i<10 ; i++) {
    gameboard.push([]);
  }

  for (var i=0; i<10 ; i++) {
    for (var j=0; j<10 ; j++) {
      gameboard[i].push(0);
    }
  }

  return gameboard;
}

module.exports = createBlankBoard;
