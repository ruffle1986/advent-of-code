module.exports = function (dots, folds) {
  let set = new Set(dots);

  for (let j = 0; j < folds.length; j++) {

    const [a, f] = folds[j];
    
    for (const coords of set) {
      const [x, y] = coords.split(',');
      let newX, newY;

      if (a === 'y' && y > f) {
        newX = x;
        newY = f - Math.abs(f-y);
      
      } else if (a === 'x' && x > f) {
        newX = f - Math.abs(f-x);
        newY = y;
      }

      if (newX !== undefined && newY !== undefined) {
        set.add(String([newX, newY]));
        set.delete(String([x, y]));
      }
    }
  }

  let maxX = 0;
  let maxY = 0;

  for (const coord of set) {
    const [x, y] = coord.split(',').map(Number);
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
  }
  
  let code = '\n';
  for (let y = 0; y <= maxY; y++) {
    let dots = '';
    for (let x = 0; x <= maxX; x++) {
      if (set.has(String([x, y]))) {
        dots += '#';
      } else {
        dots += ' ';
      }
    }
    code += dots + '\n';
  }

  return code;
};
