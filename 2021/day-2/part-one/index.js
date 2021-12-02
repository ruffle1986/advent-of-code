module.exports = function (input) {
  let horizontalPosition = 0;
  let depth = 0;

  for (let i = 0; i < input.length; i++) {
    const [direction, position] = input[i];

    switch (direction) {
      case 'forward': {
        horizontalPosition += position;
        break;
      }
      case 'down': {
        depth += position;
        break;
      }
      case 'up': {
        depth -= position;
        break;
      }
    }
  }

  return horizontalPosition * depth;
};
