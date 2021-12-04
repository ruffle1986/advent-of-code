const Board = require('../Board');

module.exports = function (numbers, boards) {

  boards = boards.map(board => new Board(board));
  const winnerBoards = new Map();
  let lastWinnerBoard;
  
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < boards.length; j++) {
      const board = boards[j];
      const num = numbers[i];
      
      if (winnerBoards.has(board) === false) {
        board.mark(num);
        
        if (board.gameOver === true) {
          winnerBoards.set(board, num);
          lastWinnerBoard = [board, num];
        }
      }

    }
  }

  return lastWinnerBoard[0].calcFinalScore(lastWinnerBoard[1]);
};
