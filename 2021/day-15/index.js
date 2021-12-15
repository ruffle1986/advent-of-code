const fs = require('fs');
const path = require('path');
const { parse } = require('../../tools.js').numArr2D; 
const inputPuzzle = fs.readFileSync(path.join(__dirname, './input.txt')).toString();

const input1 = parse(inputPuzzle);
const input2 = parse(inputPuzzle);

const partOne = require('./part-one');
const partTwo = require('./part-two');

module.exports = {
  partOneAnswer: partOne(input1),
  partTwoAnswer: partTwo(input2)
};
