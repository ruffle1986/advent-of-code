function isSmall(c) {
  return c === c.toLowerCase();
}

module.exports = function (input) { 
  const stack = [[['start'], { start: 1 }, false]];
  const paths = [];

  while (stack.length > 0) {
    const [path, visited, addedTwice] = stack.pop();
    const lastNode = path[path.length - 1];
    
    if (lastNode === 'end') {
      
      paths.push(path);

    } else {
      
      const adj = input[lastNode];
      
      for (let i = 0; i < adj.length; i++) {
        
        if (isSmall(adj[i])) {
          
          if (!visited[adj[i]]) {
            const newVisited = {
              ...visited,
              [adj[i]]: true
            };

            stack.push([[...path, adj[i]], newVisited, addedTwice]);
          
          } else {
            
            if (!addedTwice && !['start', 'end'].includes(adj[i])) {
              stack.push([[...path, adj[i]], visited, true]);
            }
          }
        } else {
          stack.push([[...path, adj[i]], visited, addedTwice]);
        }
      }
    }
  } 

  return paths.length;
};
