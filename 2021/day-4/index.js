const fs = require('fs');
const path = require('path');
const partOne = require('./part-one');
const partTwo = require('./part-two');

const inputPuzzle = fs.readFileSync(path.join(__dirname, './input.txt')).toString().split('\n\n');
const numbers = inputPuzzle.shift().split(',').map(Number);
const boards = inputPuzzle.map(board => {
  return board.split('\n').map(row => row.split(' ').filter(Boolean).map(Number)).filter(arr => !!arr.length);
});

module.exports = {
  partOneAnswer: partOne(numbers, boards),
  partTwoAnswer: partTwo(numbers, boards)
};
