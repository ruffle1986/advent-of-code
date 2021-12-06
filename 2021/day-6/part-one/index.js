module.exports = function (input) {
  let days = 0;

  while (days < 80) {

    const newFishes = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] === 0) {
        input[i] = 6;
        newFishes.push(8);
      } else {
        input[i]--;
      }
    }
    input = input.concat(newFishes);
    days++;
  }

  return input.length;
};
