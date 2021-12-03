const binaryToDecimal = require('../binary-to-decimal');

/**
 * 
 * Recursive function that narrows down a given list of binary numbers
 * by a criteria function (compareFn) until only one remains.
 * 
 * @param {string[]} input - list of binary numbers with the same length.
 * @param {Function} compareFn - based on two binary lists, it can decide which list should be in the next recursion.
 * @param {number} position - the index of the bit in the binary that is under examination. 
 * @returns {string} - a binary number accepted by the bit criteria.
 */
function getBinaryByBitCriteria(input, compareFn, position = 0) {
  if (input.length === 1) {
    return input[0];
  }

  const numsWith0 = []; 
  const numsWith1 = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i][position] === '0') {
      numsWith0.push(input[i]);
    } else {
      numsWith1.push(input[i]);
    }
  }

  input = compareFn(numsWith0, numsWith1);

  return getBinaryByBitCriteria(input, compareFn, ++position);
}

module.exports = function (input) {
  const oxygenGeneratorRating = getBinaryByBitCriteria([...input], (a, b) => a.length <= b.length ? b : a);
  const co2ScrubberRating     = getBinaryByBitCriteria([...input], (a, b) => a.length > b.length ? b : a);

  return binaryToDecimal(oxygenGeneratorRating) * binaryToDecimal(co2ScrubberRating);
};
