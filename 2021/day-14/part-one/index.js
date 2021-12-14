module.exports = function (template, insertions) {
  
  let formula = template.split('');
  let steps = 0;
  let extended = [];
  while (steps < 10) {
    for (let i = 0; i < formula.length-1; i++) {
      const ch1 = formula[i];
      const ch2 = formula[i+1];
      const key = ch1 + ch2;
      
      extended.push(ch1);

      if (insertions.has(key)) {
        const ch3 = insertions.get(key);
        extended.push(ch3);
      }
    }

    const lastCh = formula[formula.length - 1];
    
    extended.push(lastCh);

    formula = [...extended];
    extended = [];

    steps++;
  }

  let countMap = new Map();
  for (let i = 0; i < formula.length; i++) {
    const ch = formula[i];
    if (!countMap.has(ch)) countMap.set(ch, 0);
    countMap.set(ch, countMap.get(ch) + 1);
  }

  let mostCommon = 0;
  let leastCommon = Infinity;
  for (const ch of countMap) {
    const [, count] = ch;
    if (count > mostCommon) mostCommon = count;
    if (count < leastCommon) leastCommon = count;
  }

  return mostCommon - leastCommon;
};
