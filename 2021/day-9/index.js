const fs = require('fs');
const path = require('path');
const inputPuzzle = fs.readFileSync(path.join(__dirname, './input.txt')).toString().split('\r\n')
  .filter(Boolean)
  .map((line) => line.split('').map(Number));
const partOne = require('./part-one');
const partTwo = require('./part-two');

module.exports = {
  partOneAnswer: partOne(inputPuzzle),
  partTwoAnswer: partTwo(inputPuzzle)
};
