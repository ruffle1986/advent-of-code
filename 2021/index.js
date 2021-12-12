console.log('Advent of Code 2021\n\n');

for (let i = 1; i <= 25; i++) {

  const day = require(`./day-${i}`);
  const board = [
    
    `Day ${i}/Part One: `, day.partOneAnswer,
    '\n',
    `Day ${i}/Part Two: `, day.partTwoAnswer,
  ];

  console.log(board.join('') + '\n\n');
}

console.log('Merry Christmas! :)');
