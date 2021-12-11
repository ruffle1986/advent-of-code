const fs = require('fs');
const path = require('path');
const numArr2D = require('../../tools').numArr2D;
const inputPuzzle = fs.readFileSync(path.join(__dirname, './input.txt')).toString();
const inputPuzzle1 = numArr2D.parse(inputPuzzle);
const inputPuzzle2 = numArr2D.parse(inputPuzzle);
const partOne = require('./part-one');
const partTwo = require('./part-two');

module.exports = {
  partOneAnswer: partOne(inputPuzzle1),
  partTwoAnswer: partTwo(inputPuzzle2)
};
