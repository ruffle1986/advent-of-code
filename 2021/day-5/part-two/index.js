module.exports = function (input) {
  const map = {};

  for (let i = 0; i < input.length; i++) {
    const [start, end] = input[i];
    const [x1, y1] = start;
    const [x2, y2] = end;

    const horizontal = (x1 === x2);
    const vertical = (y1 === y2);

    if (horizontal || vertical) {
      if (horizontal) {
        let y = y1;
  
        if (!map[[x1, y]]) map[[x1, y]] = 1;
        else map[[x1, y]]++;
  
        while (y !== y2) {
          if (y1 < y2) y++;
          if (y1 > y2) y--;
  
          if (!map[[x1, y]]) map[[x1, y]] = 1;
          else map[[x1, y]]++;
        }
      }
      
      if (vertical) {
        let x = x1;
  
        if (!map[[x, y1]]) map[[x, y1]] = 1;
        else map[[x, y1]]++;
        
        while (x !== x2) {
          if (x1 < x2) x++;
          if (x1 > x2) x--;
  
          if (!map[[x, y1]]) map[[x, y1]] = 1;
          else map[[x, y1]]++;
        }
      }
    } else {
      let x = x1;
      let y = y1;
  
      if (!map[[x, y]]) map[[x, y]] = 1;
      else map[[x, y]]++;
  
      while (x !== x2 && y !== y2) {
        if (x > x2) x--
        if (x < x2 ) x++;
        if (y > y2) y--
        if (y < y2 ) y++;
        if (!map[[x, y]]) map[[x, y]] = 1;
        else map[[x, y]]++;
      }
    }
  }

  return Object.values(map).filter(val => val > 1).length;
};
