module.exports = function (tX, tY) {

  function step(x, y, vx, vy) {
    x += vx;
    y += vy;

    if (vx > 0) vx--;
    if (vx < 0) vx++;

    vy--;

    if (x >= tX[0] && x <= tX[1] && y >= tY[0] && y <= tY[1]) {
      return true;
    } else if (x > tX[1] || y < tY[0]) {
      return false;
    } else {
      return step(x, y, vx, vy);
    } 
  }

  let count = 0;

  for (let i = tX[1]; i>= 0; i--) {
    for (let j = tX[1]; j >= tY[0]; j--) {
      if (step(0, 0, i, j) === true) {
        count++;
      }
    }
  }

  return count;
};
