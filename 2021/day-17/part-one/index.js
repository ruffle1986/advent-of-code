module.exports = function (tX, tY) {
  let maxY = 0;

  function step(x, y, vx, vy) {
    x += vx;
    y += vy;

    if (vx > 0) vx--;
    if (vx < 0) vx++;

    vy--;

    if (y > maxY) maxY = y;

    if (x >= tX[0] && x <= tX[1] && y >= tY[0] && y <= tY[1]) {
      return maxY;
    } else if (x > tX[1] || y < tY[0]) {
      return -1;
    } else {
      return step(x, y, vx, vy);
    } 
  }

  const maxArr = [];

  for (let i = tX[1]; i>= 0; i--) {
    for (let j = tX[1]; j >= tY[0]; j--) {
      maxY = 0
      const max = step(0, 0, i, j);
      if (max > 0) {
        maxArr.push(max);
      }
    }
  }

  return Math.max(...maxArr);
};
