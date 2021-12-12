const fs = require('fs');

let day = process.argv[2];
if (!day) throw new Error('please provide a day between 1 and 25');

const mainDir = `./day-${day}`;
const dirs = [
`${mainDir}/part-one`,
`${mainDir}/part-two`
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(`${dir}/index.js`, 'module.exports = function (input) {};');
  } else {
    throw new Error(dir + ' already exists');
  }
});


const mainContent = `const fs = require('fs');
const path = require('path');
const inputPuzzle = fs.readFileSync(path.join(__dirname, './input.txt')).toString();
const partOne = require('./part-one');
const partTwo = require('./part-two');

module.exports = {
  partOneAnswer: partOne(inputPuzzle),
  partTwoAnswer: partTwo(inputPuzzle)
};`

fs.writeFileSync(`${mainDir}/index.js`, mainContent);

if (!fs.existsSync('./index.js')) {
  
  const year = process.argv[3];
  if (!year) {
    throw new Error('please provide a year to create the main file');
  }
  const content = `console.log('Advent of Code ${year}\\n\\n');

for (let i = 1; i <= 25; i++) {

  const day = require('./day-' + i);
  const board = [
    
    'Day ' + i + '/Part One: ', day.partOneAnswer,
    '\\n',
    'Day ' + i + '/Part Two: ', day.partTwoAnswer,
  ];

  console.log(board.join('') + '\\n\\n');
}

console.log('Merry Christmas! :)');`;

  fs.writeFileSync('./index.js', content);
}




console.log('Happy Coding!');
