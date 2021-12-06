module.exports = function (input) {
  let map = new Array(9).fill(0);

  for (let i = 0; i < input.length; i++) {
    const age = input[i];
    map[age]++;
  }

  for (let day = 0; day < 256; day++) {
    const tmp = new Array(9).fill(0);

    for (let age = 0; age < map.length; age++) {
      if (age > 0) {
        tmp[age-1] += map[age];
      } else {
        tmp[6] += map[age];
        tmp[8] += map[age];
      }
    }
  
    map = tmp;
  }

  return map.reduce((sum, count) => sum + count, 0);
};
