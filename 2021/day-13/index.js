const fs = require('fs');
const path = require('path');
const inputPuzzle = fs.readFileSync(path.join(__dirname, './input.txt')).toString().split('\n\n');
const partOne = require('./part-one');
const partTwo = require('./part-two');

const dots = inputPuzzle[0].split('\n');
const folds = inputPuzzle[1].split('\n')
  .filter(Boolean)
  .map(fold => {
    fold = fold.split('=');
    return [fold[0][fold[0].length - 1], Number(fold[1])];
  });

module.exports = {
  partOneAnswer: partOne(dots, folds),
  partTwoAnswer: partTwo(dots, folds)
};
