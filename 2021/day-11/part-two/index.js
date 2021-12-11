function getAdjacents(pos, grid) {
  const [r, c] = pos;
  const tl = grid[r-1] && grid[r-1][c-1];
  const t = grid[r-1] && grid[r-1][c];
  const tr = grid[r-1] && grid[r-1][c+1];
  const ri = grid[r][c+1];
  const bri = grid[r+1] && grid[r+1][c+1];
  const b = grid[r+1] && grid[r+1][c];
  const bl = grid[r+1] && grid[r+1][c-1];
  const l = grid[r][c-1];

  return [
    tl !== undefined && [r-1, c-1], 
    t !== undefined && [r-1, c],
    tr !== undefined && [r-1, c+1], 
    ri !== undefined && [r, c+1], 
    bri !== undefined && [r+1, c+1], 
    b !== undefined && [r+1, c], 
    bl !== undefined  && [r+1, c-1], 
    l !== undefined && [r, c-1]
  ].filter(Boolean);
}

module.exports = function (grid) {

  let steps = 0;

  while (true) {

    let flashes = 0;
    const queue = [];
    
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        grid[i][j]++;
        if (grid[i][j] > 9) {
          grid[i][j] = 0;
          flashes++;
          queue.push([i, j]);
        }
      }
    }

    while (queue.length > 0) {
      const [i, j] = queue.shift();
      const adj = getAdjacents([i, j], grid);
      
      for (let i = 0; i < adj.length; i++) {
        const [ai, aj] = adj[i];
        if (grid[ai][aj] !== 0) {
          grid[ai][aj]++;
          if (grid[ai][aj] > 9) {
            grid[ai][aj] = 0;
            flashes++;
            queue.push([ai, aj]);
          }
        }
      }

    }

    steps++;

    if (flashes === 100) {
      return steps;
    }
  }
};
