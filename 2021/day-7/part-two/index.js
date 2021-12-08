module.exports = function (input) {

  const map = new Map();

  for (let i = 0; i < input.length; i++) {
    if (!map.has(input[i])) {
      map.set(input[i], 1);
    } else {
      map.set(input[i], map.get(input[i]) + 1);
    }
  }
  
  const sorted = input.sort((a, b) => a - b);
  const minX = sorted[0];
  const maxX = sorted[sorted.length - 1];
  
  let lowest = Infinity;

  for (let x = minX; x <= maxX; x++) {
    let fuel = 0;
    
    for (const [y, sum] of map) {
      const steps = Math.abs(x-y);
      const fuelNeeded = steps * (steps + 1) / 2;
      fuel += fuelNeeded * sum;
    }

    if (fuel < lowest) {
      lowest = fuel;
    }
  }

  return lowest;
};
