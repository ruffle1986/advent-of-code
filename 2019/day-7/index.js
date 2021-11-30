const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split(',').map(Number);
const intCode = require('../day-5').intCode;

class Amplifier {
  constructor(program) {
    this.inputs = [];
    this.program = program;
  }

  setInputs(...inputs) {
    this.inputs = inputs;
  }

  calc() {
    return intCode([...this.inputs], this.program);
  }
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

/**
 * Heap's algorithm
 * https://en.wikipedia.org/wiki/Heap%27s_algorithm 
 */
function generatePerm(n, arr, output = []) {

  if (n === 1) {
    output.push([...arr]);
  } else {
    generatePerm(n - 1, arr, output);
  
    for (let i = 0; i < n - 1; i++) {
      if (n % 2 === 0) {
        swap(arr, i, n - 1);
      } else {
        swap(arr, 0, n - 1);
      }
  
      generatePerm(n - 1, arr, output);
    }
  }

  return output;
}

function getAllPermutations(arr) {
  return generatePerm(arr.length, [...arr]);
}

function getMaxThrusterSignal(permutations) {

  const thrusterSignals = [];
  while (permutations.length > 0) {
    const phaseSettings = permutations.pop();
    const amplifiers = ['A', 'B', 'C', 'D', 'E'].map(() => new Amplifier([...input]));

    let i = 0;
    let signal = 0;
    while (amplifiers.length > 0) {
      const amp = amplifiers.shift();
      amp.setInputs(phaseSettings[i++], signal);
      signal = amp.calc();
    }

    thrusterSignals.push(signal);
  }

  return Math.max(...thrusterSignals);
}

const permutations = getAllPermutations([0, 1, 2, 3, 4]);

const maxThrusterSignal = getMaxThrusterSignal(permutations);

console.log('Advent of Code (Day 7 / Part One): The answer is ' + maxThrusterSignal);