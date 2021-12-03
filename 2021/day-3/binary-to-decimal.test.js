const assert = require('assert');
const binaryToDecimal = require('./binary-to-decimal');
const { inputPuzzle } = require('./');

for (let i = 0; i < inputPuzzle.length; i++) {
  assert(parseInt(inputPuzzle[i], 2) === binaryToDecimal(inputPuzzle[i]));
}

