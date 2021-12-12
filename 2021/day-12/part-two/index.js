function isSmall(c) {
  return c === c.toLowerCase();
}

module.exports = function (input) { 
  const queue = [[['start'], { start: 1 }, false]];
  const paths = [];

  while (queue.length > 0) {
    const [path, visited, addedTwice] = queue.shift();
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

            queue.push([[...path, adj[i]], newVisited, addedTwice]);
          
          } else {
            
            if (!addedTwice && !['start', 'end'].includes(adj[i])) {
              queue.push([[...path, adj[i]], visited, true]);
            }
          }
        } else {
          queue.push([[...path, adj[i]], visited, addedTwice]);
        }
      }
    }
  } 

  return paths.length;
};
