module.exports = function (input) {

  const opening = /[\{,\(,\[,\<]/;
  const pairs = {
    '{': '}',
    '[': ']',
    '(': ')',
    '<': '>',
  };
  const points = {
    ')': 1,
    ']': 2,
    '}': 3,
    '>': 4,
  };
  const scores = [];

  for (let i = 0; i < input.length; i++) {
    const line = input[i];
    const stack = [];
    let isCorrupt = false;
    let totalScore = 0;
    for (let j = 0; j < line.length; j++) {
      if (opening.test(line[j]) === true) {
        stack.push(line[j]);
      } else {
        const pair = stack.pop();
        if (pairs[pair] !== line[j]) {
          isCorrupt = true;
          break;
        }
      }
    }
    if (!isCorrupt) {
      while (stack.length > 0) {
        const opening = stack.pop();
        totalScore = totalScore * 5 + points[pairs[opening]];
      }
      scores.push(totalScore);
    }
  }
  

  scores.sort((a, b) => a - b);
  const middle = Math.floor(scores.length / 2);

  return scores[middle];
};
