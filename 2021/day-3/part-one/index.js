const binaryToDecimal = require('../binary-to-decimal');

module.exports = function (input) {
  const helper = [];
  for (let i = 0; i < input.length; i++) {
    const binary = input[i];
    for (let j = 0; j < binary.length; j++) {
      if (helper[j] == null) {
        helper[j] = [0, 0];
      }
      const digit = Number(binary[j]);
      helper[j][digit]++;
    }
  }

  let gamma = [];
  let epsilon = [];

  for (let i = 0; i < helper.length; i++) {
    if (helper[i][0] > helper[i][1]) {
      gamma.push(0);
      epsilon.push(1);
    } else {
      gamma.push(1);
      epsilon.push(0);
    }
  }

  return binaryToDecimal(gamma.join('')) * binaryToDecimal(epsilon.join(''));
};
