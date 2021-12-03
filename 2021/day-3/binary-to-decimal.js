module.exports = function binaryToDecimal(binary) {
  const len = binary.length;
  let decimal = 0;
  let i = 0;
  let exponent = len - 1;

  while (i < len) {
    if (binary[i] === '1') {
      decimal += 2 ** exponent;
    }
    i++;
    exponent--;
  }

  return decimal;
}
