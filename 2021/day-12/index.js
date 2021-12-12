function toAdjList(input) {
  return input.split('\n').filter(Boolean).reduce((acc, conn) => {
    const [node1, node2] = conn.split('-').map(s => s.trim());

    if (!acc[node1]) acc[node1] = [];
    acc[node1].push(node2);

    if (!acc[node2]) acc[node2] = [];
    acc[node2].push(node1);

    return acc;
  }, {});
}

const fs = require('fs');
const path = require('path');
const input = fs.readFileSync(path.join(__dirname, './input.txt')).toString();
const inputPuzzle1 = toAdjList(input);
const inputPuzzle2 = toAdjList(input);
const partOne = require('./part-one');
const partTwo = require('./part-two');

module.exports = {
  partOneAnswer: partOne(inputPuzzle1),
  partTwoAnswer: partTwo(inputPuzzle2)
};
