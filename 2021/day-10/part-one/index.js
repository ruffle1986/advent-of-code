module.exports = function (input) {

  const opening = /[\{,\(,\[,\<]/;
  const pairs = {
    '{': '}',
    '[': ']',
    '(': ')',
    '<': '>',
  };
  const points = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137,
  };
  let answer = 0;

  for (let i = 0; i < input.length; i++) {
    const line = input[i];
    const stack = [];
    for (let j = 0; j < line.length; j++) {
      if (opening.test(line[j]) === true) {
        stack.push(line[j]);
      } else {
        const pair = stack.pop();
        if (pairs[pair] !== line[j]) {
          answer += points[line[j]];
          break;
        }
      }
    }
  }

  return answer;
};
