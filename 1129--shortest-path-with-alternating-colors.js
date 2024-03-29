// You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1.
// Each edge is red or blue in this graph, and there could be self-edges and parallel edges.

// You are given two arrays redEdges and blueEdges where:

// redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai to node bi in the graph, and
// blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj to node vj in the graph.
// Return an array answer of length n, where each answer[x] is the length of the shortest path from node 0 to node x
// such that the edge colors alternate along the path, or -1 if such a path does not exist.

// --- Examples
// Input: n = 3, redEdges = [[0,1],[1,2]], blueEdges = []
// Output: [0,1,-1]
// Input: n = 3, redEdges = [[0,1]], blueEdges = [[2,1]]
// Output: [0,1,-1]

// --- Constraints
// 1 <= n <= 100
// 0 <= redEdges.length, blueEdges.length <= 400
// redEdges[i].length == blueEdges[j].length == 2
// 0 <= ai, bi, uj, vj < n

const getNodeInfo = (node, color) => `${node}-${color}`;
const RED = 0;
const BLUE = 1;

/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  const edgesByColor = [redEdges, blueEdges];
  const destNodesByColor = [new Map(), new Map()];
  const distances = Array(n).fill(-1);

  for (let node = 0; node < n; node++) {
    destNodesByColor[RED][node] = [];
    destNodesByColor[BLUE][node] = [];
  }

  for (const [color, edges] of edgesByColor.entries()) {
    for (const [srcNode, destNode] of edges) {
      destNodesByColor[color][srcNode].push(destNode);
    }
  }

  const queue = [[0, 0, null]]; // source node, source distance, source edge color
  const visited = new Set([getNodeInfo(0, null)]);

  while (queue.length > 0) {
    const [srcNode, srcDistance, srcColor] = queue.shift();
    if (distances[srcNode] === -1) {
      distances[srcNode] = srcDistance;
    } else {
      distances[srcNode] = Math.min(distances[srcNode], srcDistance);
    }

    for (const [destColor, destNodes] of destNodesByColor.entries()) {
      if (srcColor !== destColor) {
        for (const destNode of destNodes[srcNode]) {
          const destInfo = getNodeInfo(destNode, destColor);
          if (!visited.has(destInfo)) {
            visited.add(destInfo);
            queue.push([destNode, srcDistance + 1, destColor]);
          }
        }
      }
    }
  }

  return distances;
};
