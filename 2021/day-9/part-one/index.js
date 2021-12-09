module.exports = function (input) {
  let sum = 0;
  
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      const num = input[i][j];
      const top = (input[i-1] && input[i-1][j]) !== undefined ? input[i-1][j] : Infinity;
      const right = input[i][j+1] !== undefined ? input[i][j+1] : Infinity;
      const bottom = (input[i+1] && input[i+1][j]) !== undefined ? input[i+1][j] : Infinity;;
      const left = input[i][j-1] !== undefined ? input[i][j-1] : Infinity;
      
      if (num < top && num < right && num < bottom && num < left) {
        sum += 1 + num;
      }
    }
  }

  return sum;
};
