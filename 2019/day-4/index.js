const input = '109165-576723';
const range = input.split('-').map(Number);

/**
 * The password validator for Part One
 * 
 * @param {string} password 
 * @returns {boolean}
 */
function checkPassword1(password) {

  let foundSameAdjacent = false;
  for (let i = password.length - 1; i >= 0; i--) {
    const digit = Number(password[i]);
    const prevDigit = Number(password[i - 1]);

    if (!isNaN(prevDigit)) {
      if (prevDigit > digit) {
        return false;
      }
      if (prevDigit === digit) {
        foundSameAdjacent = true;
      }
    }
  }

  return foundSameAdjacent;
}

/**
 * The password validator for Part Two
 * 
 * @param {string} password 
 * @returns {boolean}
 */
function checkPassword2(password) {
  
  let duplicates = new Map();
  for (let i = password.length - 1; i >= 0; i--) {
    const digit = Number(password[i]);
    const prevDigit = Number(password[i - 1]);
    
    if (!isNaN(prevDigit)) {
      if (prevDigit > digit) {
        return false;
      }
      if (prevDigit === digit) {
        if (duplicates.has(digit)) {
          duplicates.set(digit, duplicates.get(digit) + 1);
        } else {
          duplicates.set(digit, 2);
        }
      }
    }
  }
  
  let foundValidSameAdjacent = false;
  for ([, occurance] of duplicates) {
    if (occurance === 2) {
      foundValidSameAdjacent = true;
    }
  }

  return foundValidSameAdjacent;
}

let numOfValidPasswords1 = 0;
let numOfValidPasswords2 = 0;
for (let i = range[0]; i <= range[1]; i++) {
  if (checkPassword1(String(i)) === true) {
    numOfValidPasswords1++;
  }
  if (checkPassword2(String(i)) === true) {
    numOfValidPasswords2++;
  }
}

console.log('Advent of Code (Day 4 / Part One): The answer is ' + numOfValidPasswords1);
console.log('Advent of Code (Day 4 / Part Two): The answer is ' + numOfValidPasswords2);