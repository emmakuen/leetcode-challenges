// Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.
// You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

// for the graph to be a valid tree, it can't have any loops and all nodes should be connected

// --- Examples
// Input: n = 5 edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
// Output: true.
// Input: n = 5 edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
// Output: false.
/**
 * @param n: An integer
 * @param edges: a list of undirected edges
 * @return: true if it's a valid tree, or false
 */
function validTree(n, edges) {
  // if there's no node, consider it a valid tree and return true
  if (n === 0) return true;

  // create a set to track visited nodes
  const visitedNodes = new Set();
  // create an adjacency list for all nodes and store their neighbors in an array
  const neighborNodesOf = Array.from(Array(n), () => []);

  for (const [node1, node2] of edges) {
    neighborNodesOf[node1].push(node2);
    neighborNodesOf[node2].push(node1);
  }

  // create a function that checks if a node is traversable without loop
  function traversableWithoutLoop(node, previousNode) {
    // if the node is already visited, there's a loop
    // so return false
    if (visitedNodes.has(node)) return false;

    // else, add this node to the visited nodes set
    visitedNodes.add(node);

    for (const neighborNode of neighborNodesOf[node]) {
      // current node pointing to the previous node wouldn't produce a loop, so skip this iteration of loop and continue
      if (neighborNode === previousNode) continue;

      // check if the neighbor node is traversable without loop
      // and return false immediately if there's loop
      if (!traversableWithoutLoop(neighborNode, node)) return false;
    }

    // if all nodes are traversable without loop, return true
    return true;
  }

  // if nodes can be traversable without loop and all nodes are connected, return true
  return traversableWithoutLoop(0, -1) && visitedNodes.size === n;
}

// Time Complexity: O(V + E)
