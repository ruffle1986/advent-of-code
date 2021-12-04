class Board {
  constructor(board) {
    this.gameOver = false;
    this.rowCount = board.length;
    this.colCount = board[0].length;
    this.map = new Map();
    this.markedX = new Array(this.rowCount).fill(1).map(() => []);
    this.markedY = new Array(this.colCount).fill(1).map(() => []);

    for (let i = 0; i < this.rowCount; i++) {
      for (let j = 0; j < this.colCount; j++) {
        this.map.set(board[i][j], [i, j]);
      }
    }
  }

  mark(num) {
    
    if (this.map.has(num) === false) {
      return;
    }

    const [row, col] = this.map.get(num);
    this.markedX[row].push(num);
    this.markedY[col].push(num);

    if (this.markedX[row].length === this.rowCount || this.markedY[col].length === this.colCount) {
      this.gameOver = true;
    }
  }

  calcFinalScore(winnerNum) {
    let unmarkedSum = 0;
    for (const item of this.map) {
      const num = item[0];
      const [row] = item[1];

      if (this.markedX[row].includes(num) === false) {
        unmarkedSum += num;
      }
    }

    return winnerNum * unmarkedSum;
  }
}

module.exports = Board;
