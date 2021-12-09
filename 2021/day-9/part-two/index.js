function getAdjacents(point, input) {
  const [i, j] = point;
  const top = (input[i-1] && input[i-1][j]) !== undefined ? input[i-1][j] : Infinity;
  const right = input[i][j+1] !== undefined ? input[i][j+1] : Infinity;
  const bottom = (input[i+1] && input[i+1][j]) !== undefined ? input[i+1][j] : Infinity;
  const left = input[i][j-1] !== undefined ? input[i][j-1] : Infinity;
  return [
    [top, i-1, j], 
    [right, i, j+1], 
    [bottom, i+1, j], 
    [left, i, j-1]
  ];
}

function calcBasin(point, input) {
  const queue = [point];
  const visited = {};
  let basin = 1;
  while (queue.length > 0) {
    const p = queue.shift();
    const [num, i, j] = p;
    const adjacents = getAdjacents([i, j], input);
    for (let i = 0; i < adjacents.length; i++) {
      const [adj, j, k] = adjacents[i];
      if (num < adj && adj < 9 && !visited[[j, k]]) {
        visited[[j,k]] = true;
        queue.push([adj, j, k]);
        basin++;
      }
    }
  }

  return basin;
}

module.exports = function (input) {
  const basins = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {    
      const num = input[i][j];
      const adjacents = getAdjacents([i, j], input);
      const [top] = adjacents[0];
      const [right] = adjacents[1];
      const [bottom] = adjacents[2];
      const [left] = adjacents[3];

      if (num < top && num < right && num < bottom && num < left) {
        basins.push(calcBasin([num, i, j], input));
      }
    }
  }

  basins.sort((a, b) => b - a);

  return basins[0] * basins[1] * basins[2];
};
