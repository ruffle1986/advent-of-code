
function isSmall(c) {
  return c === c.toLowerCase();
}

function count(x, path) {
  let count = 0;
  for (let i = 0; i < path.length; i++) {
    if (path[i] === x) {
      count++;
    }
  }
  return count;
}

function hasRepEl(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

function canIaddMore(x, path) {
  if (x === 'end' && count(x, path) === 1) return false;
  if (x === 'start' && count(x, path) === 1) return false;

  path = path.filter((p) => {
    if (p === 'start') return false;
    if (p === 'end') return false;
    return isSmall(p);
  });


  return !hasRepEl(path);
}

module.exports = function (input) {
  
  const queue = [['start']];
  const paths = [];
  while (queue.length > 0) {
    const path = queue.shift();
    const lastNode = path[path.length - 1];
    if (lastNode === 'end') {
      paths.push(path);
    } else {
      const adj = input[lastNode];
      for (let i = 0; i < adj.length; i++) {
        
        if (isSmall(adj[i])) {
          if (!path.includes(adj[i]) || canIaddMore(adj[i], path)) {
            queue.push([...path, adj[i]]);
          } 
        } else {
          queue.push([...path, adj[i]]);
        }
      }
    }
  } 

  return paths.length;
};
