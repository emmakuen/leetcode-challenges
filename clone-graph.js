// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

// --- Examples
// Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
// Output: [[2,4],[1,3],[2,4],[1,3]]
// Explanation: There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// Input: adjList = [[]]
// Output: [[]]
// Explanation: Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors.
// Input: adjList = []
// Output: []
// Explanation: This an empty graph, it does not have any nodes.

// --- Constraints
// The number of nodes in the graph is in the range [0, 100].
// 1 <= Node.val <= 100
// Node.val is unique for each node.
// There are no repeated edges and no self-loops in the graph.
// The Graph is connected and all nodes can be visited starting from the given node.

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = function (node) {
  // create a map to keep track of cloned nodes
  const clonedNodes = new Map();

  // define a recursive function
  function clone(node) {
    if (!node) return null;

    // if the current node is already cloned, return that node from the map
    if (clonedNodes.has(node)) {
      return clonedNodes.get(node);
    }

    // else, clone the node and add it to the map
    const clonedNode = new Node(node.val);
    clonedNodes.set(node, clonedNode);

    for (const neighbor of node.neighbors) {
      // clone each neighbor of the node using the clone function
      const clonedNeighbor = clone(neighbor);
      // and push the returned node to cloned node's neighbors array
      clonedNode.neighbors.push(clonedNeighbor);
    }

    return clonedNode;
  }

  return clone(node);
};
