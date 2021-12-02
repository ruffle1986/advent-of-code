module.exports = function (input) {
  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;

  for (let i = 0; i < input.length; i++) {
    const [direction, position] = input[i];

    switch (direction) {
      case 'forward': {
        horizontalPosition += position;
        depth += aim * position;
        break;
      }
      case 'down': {
        aim += position;
        break;
      }
      case 'up': {
        aim -= position;
        break;
      }
    }
  }

  return horizontalPosition * depth;
};
