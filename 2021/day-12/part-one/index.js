function isSmall(c) {
  return c === c.toLowerCase();
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
          if (!path.includes(adj[i])) {
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
