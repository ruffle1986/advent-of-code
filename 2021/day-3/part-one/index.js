const binaryToDecimal = require('../binary-to-decimal');

module.exports = function (input) {
  const bitCountAt = [];
  for (let i = 0; i < input.length; i++) {
    const binary = input[i];
    for (let j = 0; j < binary.length; j++) {
      if (bitCountAt[j] == null) {
        bitCountAt[j] = [0, 0];
      }
      const digit = Number(binary[j]);
      bitCountAt[j][digit]++;
    }
  }

  let gamma = '';
  let epsilon = '';

  for (let i = 0; i < bitCountAt.length; i++) {
    if (bitCountAt[i][0] > bitCountAt[i][1]) {
      gamma += '0';
      epsilon += '1';
    } else {
      gamma += '1';
      epsilon += '0';
    }
  }

  return binaryToDecimal(gamma) * binaryToDecimal(epsilon);
};
