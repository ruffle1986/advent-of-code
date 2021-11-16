const fs = require('fs');

const wires = fs.readFileSync('./input.txt').toString().split('\n').map(w => w.trim());
const [wire1, wire2] = wires;

function getCoords(wire) {
  const a = wire.split(',');
  const coords = new Map();
  const pos = [0, 0];
  let steps = 0;
  for (let i = 0; i < a.length; i++) {
    const direction = a[i][0];
    const magnitude = Number(/\d+/.exec(a[i])[0]);
    for (let j = 0; j < magnitude; j++) {
      switch (direction) {
        case 'L': {
          pos[0]--;
          break;
        }
        case 'R': {
          pos[0]++;
          break;
        }
        case 'U': {
          pos[1]--;
          break;
        }
        case 'D': {
          pos[1]++;
          break;
        }
      }
      steps++;
      coords.set(pos.toString(), {
        coords: [...pos],
        stepsSoFar: steps
      });
    }
  }
  return coords;
}

function getManhattanDistance(coord1, coord2) {
  return Math.abs(coord2[0] - coord1[0]) + Math.abs(coord2[1] - coord1[1]);
}

const wire1Coords = getCoords(wire1);
const wire2Coords = getCoords(wire2);

const distancesFromCentralPort = [];
const totalStepsUntilIntersect = [];
for ([coordsStr] of wire2Coords) {
  if (wire1Coords.has(coordsStr)) {
    const wire1Meta = wire1Coords.get(coordsStr);
    const wire2Meta = wire2Coords.get(coordsStr)
    distancesFromCentralPort.push(getManhattanDistance([0, 0], wire1Meta.coords));
    totalStepsUntilIntersect.push(wire1Meta.stepsSoFar + wire2Meta.stepsSoFar);
  }
}

console.log('Advent of Code (Day 3 / Part One): The answer is ' + Math.min(...distancesFromCentralPort));
console.log('Advent of Code (Day 3 / Part Two): The answer is ' + Math.min(...totalStepsUntilIntersect));