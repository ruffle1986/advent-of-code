const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split(',').map(Number);

function parseInstruction(instruction) {
  const opcode = instruction % 100;
  const param1Mode = Math.floor((instruction / 100)) % 10;
  const param2Mode = Math.floor(instruction / 1000) % 10;
  const param3Mode = Math.floor(instruction / 10000);
  return {
    opcode,
    param1Mode,
    param2Mode,
    param3Mode
  };
}

function getOperand(param, input, mode) {
  if (mode === 0) {
    return input[param];
  } else if (mode === 1) {
    return param;
  }
}

function calculateOutput(inputArr, data) {
  let output = 0;
  let stepSize = 4;
  for (let i = 0; i < data.length; i += stepSize) {
    const instruction = parseInstruction(data[i]);

    if (instruction.opcode === 99) {
      break;
    }

    switch (instruction.opcode) {
      case 1: {
        const param1 = data[i + 1];
        const param2 = data[i + 2];
        const outIdx = data[i + 3];

        const op1 = getOperand(param1, data, instruction.param1Mode);
        const op2 = getOperand(param2, data, instruction.param2Mode);

        data[outIdx] = op1 + op2;
        stepSize = 4;
        break;
      }
      case 2: {
        const param1 = data[i + 1];
        const param2 = data[i + 2];
        const outIdx = data[i + 3];

        const op1 = getOperand(param1, data, instruction.param1Mode);
        const op2 = getOperand(param2, data, instruction.param2Mode);

        data[outIdx] = op1 * op2;
        stepSize = 4;
        break;
      }
      case 3: {
        const inputIdx = data[i + 1];
        data[inputIdx] = inputArr.shift();
        stepSize = 2;
        break;
      }
      case 4: {
        const param = data[i + 1];
        output = data[param]; 
        stepSize = 2;
        break;
      }
      case 5: {
        const param1 = data[i + 1];
        const param2 = data[i + 2];

        const op1 = getOperand(param1, data, instruction.param1Mode);
        const op2 = getOperand(param2, data, instruction.param2Mode);

        if (op1 > 0) {
          i = op2;
          stepSize = 0;
        } else {
          stepSize = 3;
        }
        break;
      }
      case 6: {
        const param1 = data[i + 1];
        const param2 = data[i + 2];

        const op1 = getOperand(param1, data, instruction.param1Mode);
        const op2 = getOperand(param2, data, instruction.param2Mode);

        if (op1 === 0) {
          i = op2;
          stepSize = 0;
        } else {
          stepSize = 3;
        }
        break;
      }
      case 7: {
        const param1 = data[i + 1];
        const param2 = data[i + 2];
        const outIdx = data[i + 3];

        const op1 = getOperand(param1, data, instruction.param1Mode);
        const op2 = getOperand(param2, data, instruction.param2Mode);

        data[outIdx] = (op1 < op2) ? 1 : 0;
        
        stepSize = 4;
        break;
      }
      case 8: {
        const param1 = data[i + 1];
        const param2 = data[i + 2];
        const outIdx = data[i + 3];

        const op1 = getOperand(param1, data, instruction.param1Mode);
        const op2 = getOperand(param2, data, instruction.param2Mode);

        data[outIdx] = (op1 === op2) ? 1 : 0;
        
        stepSize = 4;
        break;
      }
    }
  }
  return output;
}

console.log('Advent of Code (Day 5 / Part One): The answer is ' + calculateOutput([1], [...input]));
console.log('Advent of Code (Day 5 / Part Two): The answer is ' + calculateOutput([5], [...input]));

module.exports = {
  intCode: calculateOutput
};