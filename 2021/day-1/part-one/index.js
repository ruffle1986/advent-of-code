module.exports = function (input) {
  let increaseCount = 0;

  for (let i = 1; i < input.length; i++) {
    if (input[i] > input[i-1]) {
      increaseCount++;
    }
  }

  return increaseCount;
}
