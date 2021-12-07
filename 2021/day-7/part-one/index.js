module.exports = function (input) {
  
  const map = new Map();
  
  for (let i = 0; i < input.length; i++) {
    if (!map.has(input[i])) {
      map.set(input[i], 1);
    } else {
      map.set(input[i], map.get(input[i]) + 1);
    }
  }
  
  const maxX = input.sort((a, b) => a - b)[input.length - 1];
  const total = [];
  
  for (let x = 0; x <= maxX; x++) {
    let fuel = 0;
    for (const [y, sum] of map) {
      fuel += Math.abs(x-y) * sum;
    }
    total.push(fuel);
  }

  return total.sort((a, b) => a - b)[0];
};
