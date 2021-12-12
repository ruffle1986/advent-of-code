function isSmall(c) {
  return c === c.toLowerCase();
}

module.exports = function (input) {
  
  const stack = [['start']];
  const paths = [];
  while (stack.length > 0) {
    const path = stack.pop();
    const lastNode = path[path.length - 1];
    if (lastNode === 'end') {
      paths.push(path);
    } else {
      const adj = input[lastNode];
      for (let i = 0; i < adj.length; i++) {
        
        if (isSmall(adj[i])) {
          if (!path.includes(adj[i])) {
            stack.push([...path, adj[i]]);
          } 
        } else {
          stack.push([...path, adj[i]]);
        }
      }
    }
  } 
  
  return paths.length;
};
