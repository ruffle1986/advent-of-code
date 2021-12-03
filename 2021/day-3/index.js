const fs = require('fs');
const path = require('path');
const inputPuzzle = fs.readFileSync(path.join(__dirname, './input.txt')).toString().split('\r\n').filter(Boolean);
const partOne = require('./part-one');
const partTwo = require('./part-two');

module.exports = {
  inputPuzzle,
  partOneAnswer: partOne(inputPuzzle),
  partTwoAnswer: partTwo(inputPuzzle)
};
