const board = [];

for (let i = 1; i <= 25; i++) {

  try {
    const day = require(`./day-${i}`);
    board.push([
      `Day ${i}/Part One: `, day.partOneAnswer,
      '\n',
      `Day ${i}/Part Two: `, day.partTwoAnswer,
    ].join(''));
  } catch {}
}

console.log('Advent of Code 2021\n\n');
console.log(board.join('\n\n'));
