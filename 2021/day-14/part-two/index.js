module.exports = function (t, r) {
  
  let steps = 0;
  let map = {};
  
  for (let i = 0; i < t.length-1; i++) {
    const ch1 = t[i];
    const ch2 = t[i+1];
    if (map[ch1 + ch2] === undefined) map[ch1 + ch2] = 0;
    map[ch1 + ch2]++;
  }


  while (steps < 40) {
 
    const newMap = {}
    for (const pair in map) {
      const d = r.get(pair);
      if (newMap[pair[0] + d] === undefined) newMap[pair[0] + d] = 0;
      if (newMap[d + pair[1]] === undefined) newMap[d + pair[1]] = 0;

      newMap[pair[0] + d] += map[pair];
      newMap[d + pair[1]] += map[pair];
    }
    
    map = newMap;
    
    steps++;
  }

  const finalMap = {};
  for (const pair in map) {
    if (finalMap[pair[0]] === undefined) finalMap[pair[0]] = 0;
    finalMap[pair[0]] += map[pair];
  }

  finalMap[t[t.length - 1]] += 1;

  let max = 0;
  let min = Infinity;

  for (const pair in finalMap) {
    if (finalMap[pair] > max) max = finalMap[pair];
    if (finalMap[pair] < min) min = finalMap[pair];
  }

  return max - min;
};

