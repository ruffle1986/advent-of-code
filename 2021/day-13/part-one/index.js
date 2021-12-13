module.exports = function (dots, folds) {
  let set = new Set(dots);

  const [a, f] = folds[0];
  
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

  return set.size;
};
