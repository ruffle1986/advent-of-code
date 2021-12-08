function analyze(patterns, knownPatterns) {
  const result = {...knownPatterns};
  const seven = Object.keys(knownPatterns).find(p => knownPatterns[p] === 7).split('');
  const four = Object.keys(knownPatterns).find(p => knownPatterns[p] === 4).split('');

  for (let i = 0; i < patterns.length; i++) {
    const pattern = patterns[i];
    
    if (pattern.length === 5) {
      if (seven.every(letter => pattern.includes(letter))) {
        result[pattern] = 3;
      } else {
        let lettersFromFour = 0;

        for (let j = 0; j < pattern.length; j++) {
          for (let k = 0; k < four.length; k++) {
            if (four[k] === pattern[j]) {
              lettersFromFour++;
            }
          }
        }

        if (lettersFromFour === 3) {
          result[pattern] = 5;
        } else {
          result[pattern] = 2;
        }
      }
    } else if (pattern.length === 6) {
      if (four.every(letter => pattern.includes(letter))) {
        result[pattern] = 9;
      } else if (seven.every(letter => pattern.includes(letter))) {
        result[pattern] = 0;
      } else {
        result[pattern] = 6;
      }
    }
  }

  return result;
}


function identifyDigits(patterns) {
  patterns = [...patterns];
  const sorted = patterns.sort((a, b) => a.length - b.length);
  
  const knownPatterns = {
    [sorted.shift()]: 1,
    [sorted.shift()]: 7,
    [sorted.shift()]: 4,
    [sorted.pop()]: 8,
  };

  return analyze(sorted, knownPatterns);
}

function digitArrToNum(digits) {
  let i = 0;
  let j = digits.length - 1;
  let result = 0;
  while (i < digits.length) {
    result += digits[i] * 10 ** j;
    i++;
    j--;
  }
  return result;
}

module.exports = function (input) {
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    const [patterns, output] = input[i];
    const digits = identifyDigits(patterns);
    const decimalDigits = [];

    for (let j = 0; j < output.length; j++) {
      Object.keys(digits).forEach(pattern => {
        if ([...pattern].sort().join('') === [...output[j]].sort().join('')) {
          decimalDigits.push(digits[pattern]);
        }
      });
    }

    sum += digitArrToNum(decimalDigits);
  }

  return sum;
};
