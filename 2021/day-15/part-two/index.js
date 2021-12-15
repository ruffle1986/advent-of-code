const dijkstra = require('dijkstrajs');

function getAdjacents(pos, arr) {
  const [r, c] = pos;
  const adjP = [
    [r-1, c],
    [r, c+1],
    [r+1, c],
    [r, c-1]
  ];
  const adj = [];
  for (let a of adjP) {
    const [ar, ac] = a;
    if (arr[ar] && arr[ar][ac] != null) {
      adj.push([[ar, ac], arr[ar][ac]]);
    }
  }
  return adj;
}

function toAdjList(input) {
  const graph = {};
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      const pos = [i, j];
      if (!graph[pos]) {
        graph[pos] = {};
      }
      const adj = getAdjacents(pos, input);
      for (let a of adj) {
        const [p, w] = a;
        graph[pos][p] = w;
      }
    }
  }
  return graph;
} 

function increaseMap(graph) {
 
  let k = 0;
  let newGraph = [];

  while (k < 5) {
    
    const g = [];

    for (let i = 0; i < graph.length; i++) {
      const r = [];
      for (let j = 0; j < graph[i].length; j++) {
        const w = graph[i][j];
        if (w + k > 9) {
          r.push((w + k) - 9);
        } else {
          r.push(w + k);
        }
      }
      g.push(r);
    }

    newGraph = newGraph.concat(g);
    k++;
  }
  
  k = 0;
  graph = newGraph;
  newGraph = [];

  for (let i = 0; i < graph.length; i++) {
    let newRow = [];
    while (k < 5) {
      const r = [];
      for (let j = 0; j < graph[i].length; j++) {
         w = graph[i][j];
        
        if (w + k > 9) {
          r.push((w + k) - 9);
        } else {
          r.push(w + k);
        }
      }
      
      newRow = newRow.concat(r);
      k++;
    }

    newGraph.push(newRow);
    k = 0;
  }
  
  return newGraph;
}

module.exports = function (input) {
  input = increaseMap(input);

  const [endR, endC] = [input.length-1, input[0].length-1];
  const graph = toAdjList(input);
  const path = dijkstra.find_path(
    graph, 
    String([0, 0]), 
    String([endR, endC])
  );
  
  let sum = 0;
  for (let i = 1; i < path.length; i++) {
    const [r, c] = path[i].split(',');
    sum += input[r][c];
  }

  return sum;
}
