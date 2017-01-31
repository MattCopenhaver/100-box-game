var createBlankBoard = require('./createBlankBoard');
var findMoveOptions = require('./findMoveOptions');
var playMove = require('./playMove');
var findSolutions = require('./findSolutions');

let gameboard = [
  [  1, 40, 51, 12, 41, 20, 11, 42, 21, 10 ],
  [ 29, 64, 54, 30, 63, 55, 31, 70, 56, 32 ],
  [ 50, 13,  0,  0, 52,  0,  0, 19, 79, 43 ],
  [  2, 39, 72,  0,  0, 71, 62,  0, 22,  9 ],
  [ 28, 65, 53, 75,  0,  0,  0, 69, 57, 33 ],
  [ 49, 14,  0,  0, 61,  0,  0, 18, 78, 44 ],
  [  3, 38, 73,  0,  0, 74,  0,  0, 23,  8 ],
  [ 27, 66, 60, 76, 67, 59, 77, 68, 58, 34 ],
  [ 48, 15,  0, 47, 16,  0, 46, 17,  0, 45 ],
  [  4, 37, 26,  5, 36, 25,  6, 35, 24,  7 ]
];

let position;


var moveOptions;

// gameboard = createBlankBoard();
position = [2, 5];
console.log(!findSolutions(gameboard, position, 80))

// for (var attempts = 1; true; attempts++) {
//   position = [Math.floor(Math.random()*10), Math.floor(Math.random()*10)];
//   gameboard = createBlankBoard();
//   for (var i = 1; i <= 100; i++) {
//     gameboard = playMove(gameboard, position, i);
//     moveOptions = findMoveOptions(gameboard, position);
//     if (moveOptions.length === 0) {
//       console.log(gameboard);
//       break;
//     }
//     position = moveOptions[Math.floor(Math.random()*moveOptions.length)];
//   }
//   if (i > 98) {
//     break;
//   }
// }

console.log(gameboard);
