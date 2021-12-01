module.exports = function (input) {
  let increaseCount = 0;

  for (let i = 3; i < input.length; i++) {
    const windowA = input[i-1] + input[i-2] + input[i-3];
    const windowB = input[i] + input[i-1] + input[i-2];

    if (windowB > windowA) {
      increaseCount++;
    }
  }

  return increaseCount;
}
