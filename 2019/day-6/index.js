const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

function toHashmap(arr) {
  return arr.reduce((map, orbit) => {
    const [parent, child] = orbit.split(')').map(s => s.trim());
    if (map.has(child)) {
      throw Error('uh oh');
    }
    map.set(child, parent);
    return map;
  }, new Map());
}

function getTotalOrbits(map) {
  let totalCount = 0;
  for ([child, parent] of map) {
    while (parent) {
      totalCount++;
      parent = map.get(parent);
    }
  }
  return totalCount;
}

console.log('Advent of Code (Day 6 / Part One): The answer is ' + getTotalOrbits(toHashmap(input)));