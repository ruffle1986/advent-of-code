const Board = require('../Board');

module.exports = function (numbers, boards) {

  boards = boards.map(board => new Board(board));
  
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < boards.length; j++) {
      const board = boards[j];
      const num = numbers[i];
      
      board.mark(num);

      if (board.gameOver === true) {
        return board.calcFinalScore(num);
      }
    }
  }
};
