const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

class Node {
  constructor(value) {
    this.value = value;
    this.adjacent = [];
  }
}

function toHashmap(arr) {
  return arr.reduce((map, orbit) => {
    const [parent, child] = orbit.split(')').map(s => s.trim());
    if (map.has(child)) {
      throw Error('uh oh');
    }
    map.set(child, parent);
    return map;
  }, new Map());
}

function getTotalOrbits(map) {
  let totalCount = 0;
  for ([child, parent] of map) {
    while (parent) {
      totalCount++;
      parent = map.get(parent);
    }
  }
  return totalCount;
}

function toGraph(arr) {
  return arr.reduce((map, orbit) => {
    const [parent, child] = orbit.split(')').map(s => s.trim());
    const parentNode = map.has(parent) ? map.get(parent) : new Node(parent);
    const childNode = map.has(child) ? map.get(child) : new Node(child);
    parentNode.adjacent.push(childNode);
    childNode.adjacent.push(parentNode);
    
    if (!map.has(parent)) {
      map.set(parent, parentNode);
    }
    if (!map.has(child)) {
      map.set(child, childNode);
    }

    return map;
  }, new Map());
}

/**
 * Breadth first search (bfs)
 */
function getShortestPath(source, target, graph) {
  const queue = [];
  const visited = {};
  queue.push([source]);
  while (queue.length > 0) {
    const path = queue.shift();
    const nodeId = path[path.length - 1];
    if (target !== undefined && nodeId === target) {
      return path;
    }
    if (visited[nodeId]) {
      continue;
    }
    const node = graph.get(nodeId);
    if (!node) {
      throw new Error('node not found');
    }
    visited[nodeId] = true;
    for (let i = 0; i < node.adjacent.length; i++) {
      const adjNodeId = node.adjacent[i].value;
      if (!visited[adjNodeId]) {
        const newPath = [...path];
        newPath.push(adjNodeId);
        queue.push(newPath);
      }
    }
  } 
}

function getTotalJumps(path) {
  // path includes YOU and SAN and total jumps = path.length - 1
  return path.length - 3;
}

console.log('Advent of Code (Day 6 / Part One): The answer is ' + getTotalOrbits(toHashmap(input)));
console.log('Advent of Code (Day 6 / Part two): The answer is ' + getTotalJumps(getShortestPath('YOU', 'SAN', toGraph(input))));