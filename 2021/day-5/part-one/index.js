module.exports = function (input) {
  const map = {};
  let overlapCount = 0;

  for (let i = 0; i < input.length; i++) {
    const [start, end] = input[i];
    const [x1, y1] = start;
    const [x2, y2] = end;

    const horizontal = (x1 === x2);
    const vertical = (y1 === y2);

    if (horizontal) {
      let minY = Math.min(y1, y2);
      let maxY = Math.max(y1, y2);
      for (let y = minY; y <= maxY; y++) {
        if (!map[[x1, y]]) map[[x1, y]] = 1;
        else {
          map[[x1, y]]++;
          if (map[[x1, y]] === 2) overlapCount++;
        }
      }
    } else if (vertical) {
      let minX = Math.min(x1, x2);
      let maxX = Math.max(x1, x2);
      for (let x = minX; x <= maxX; x++) {
        if (!map[[x, y1]]) map[[x, y1]] = 1;
        else {
          map[[x, y1]]++;
          if (map[[x, y1]] === 2) overlapCount++;
        }
      }
    }
  }

  return overlapCount;
};
