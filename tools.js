module.exports = {
  numArr2D: {
    parse(input) {
      return input.split('\n').filter(Boolean).map(rows => {
        return rows.split('').map(Number);
      });
    }
  }
} 
