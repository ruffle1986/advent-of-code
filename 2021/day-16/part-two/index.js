const m = new Map((new Array(16)).fill(0).map((_, i) => {
  const m = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' };
  const hex = i < 10 ? i : m[i];
  const binary = i.toString(2).padStart(4, '0');
  return [String(hex), binary];
}));

function convertToBinary(hex) {
  let binary = '';
  for (let i = 0; i < hex.length; i++) {
    binary += m.get(hex[i]);
  }
  return binary;
}

function substr(str, start, end) {
  return str.substring(start, end);
}

function parse(bits, i) {
  
  const version = parseInt(substr(bits, i, i+3), 2);
  const type = parseInt(substr(bits, i+3, i+6), 2);

  if (type === 4) {
    i += 6;
    let j = i;
    const parts = [];
    while (bits[j] !== '0') {
      parts.push(substr(bits, j+1, j+5));
      j += 5;
    }
    parts.push(substr(bits, j+1, j+5));
    const val = parseInt(parts.join(''), 2);
    i = j + 5;
    return [val, i];

  } else {
    
    const lenId = parseInt(bits[i+6], 2);
    
    const vals = [];
    if (lenId === 0) {

      const lenBits = substr(bits, i+7, i+7+15);
      const len = parseInt(lenBits, 2);
      const startI = i + 7 + 15;
      i = startI;
      while (true) {
        const [val, nextI] = parse(bits, i);
        vals.push(val);
        i = nextI;
        if ((nextI - startI) === len) {
          break;
        }
      }
    } else {

      const countBits = substr(bits, i+7, i+7+11);
      const count = parseInt(countBits, 2);
      i = i + 7 + 11;
      for (let j = 0; j < count; j++) {
        const [val, nextI] = parse(bits, i);
        vals.push(val);
        i = nextI;
      }  
    }

    switch (type) {
      case 0: {
        let sum = vals.reduce((acc, val) => acc + val, 0);
        return [sum, i];
      }
      case 1: {
        let prod = vals.reduce((acc, val) => acc * val, 1);
        return [prod, i];
      }
      case 2: {
        return [Math.min(...vals), i];
      }
      case 3: {
        return [Math.max(...vals), i];
      }
      case 5: {
        return [(vals[0] > vals[1] ? 1 : 0), i];
      }
      case 6: {
        return [(vals[0] < vals[1] ? 1 : 0), i];
      }
      case 7: {
        return [(vals[0] === vals[1] ? 1 : 0), i];
      }
    }
  }
}


module.exports = function (input) {

  const bits = convertToBinary(input);
  const [val] = parse(bits, 0);
  return val;
}
