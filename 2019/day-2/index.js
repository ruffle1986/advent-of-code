const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split(',').map(Number);

function process(noun, verb, nums) {

  nums[1] = noun;
  nums[2] = verb;

  for (let i = 0; i < nums.length; i += 4) {
    const instruction = nums[i];

    if (instruction === 99) {
      break;
    }

    const input1Idx = nums[i + 1];
    const input2Idx = nums[i + 2];
    const outputIdx = nums[i + 3];
    const input1 = nums[input1Idx];
    const input2 = nums[input2Idx];
    
    switch(instruction) {
      case 1: {
        nums[outputIdx] = input1 + input2;
        break;
      }
      case 2: {
        nums[outputIdx] = input1 * input2;
        break;
      }
    }
  }

  return nums[0];
}

function findNounVerbThatProduce19690720() {

  for (let i = 0; i < 100; i++){
    for (let j = 0; j < 100; j++){
      if (process(i, j, [...input]) === 19690720) {
        return 100 * i + j;
      }
    }
  }
}

console.log('Advent of Code (Day 2 / Part One): The answer is ' + process(12, 2, [...input]));
console.log('Advent of Code (Day 2 / Part Two): The answer is ' + findNounVerbThatProduce19690720());