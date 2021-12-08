const P = [
  'abcefg',
  'cf',
  'acdeg',
  'acdfg',
  'bcdf',
  'abdfg',
  'abdefg',
  'acf',
  'abcdefg',
  'abcdfg'
];

module.exports = function (input) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    const [, output] = input[i];
    for (let j = 0; j < output.length; j++) {
      if ([P[1].length, P[4].length, P[7].length, P[8].length].includes(output[j].length)) {
        count++;
      }
    }
  }
  return count;
};
