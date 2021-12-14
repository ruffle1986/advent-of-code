const fs = require('fs');
const path = require('path');
const inputPuzzle = fs.readFileSync(path.join(__dirname, './input.txt')).toString().split('\n\n');
const partOne = require('./part-one');
const partTwo = require('./part-two');

const template = inputPuzzle[0];
const pairIns = inputPuzzle[1].split('\n')
  .filter(Boolean)
  .reduce((map, p) => {
    const [key, value] = p.split(' -> ');
    map.set(key, value);
    return map;
  }, new Map);

module.exports = {
  partOneAnswer: partOne(template, pairIns),
  partTwoAnswer: partTwo(template, pairIns)
};
