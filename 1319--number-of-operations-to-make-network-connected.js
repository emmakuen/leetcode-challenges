/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  // If number of connections is less than required to connect all the nodes
  // then it's not possible to connect all computers
  if (connections.length < n - 1) return -1;

  // create an empty object to store the neighbors of each node
  let neighbors = {};

  // create an array to track whether each node has been visited during traversal
  let isVisited = Array(n).fill(false);

  // initialize each node's neighbors array to be empty
  for (let node = 0; node < n; node++) neighbors[node] = [];

  // Loop through each connection and add each node to the other's list of neighbors
  for (const connection of connections) {
    neighbors[connection[0]].push(connection[1]);
    neighbors[connection[1]].push(connection[0]);
  }

  // initialize a counter for the number of separate networks in the network
  let networkCount = 0;

  // loop through each node in the network
  for (let node = 0; node < n; node++) {
    // if the node has not been visited yet, traverse its network of connected nodes
    if (!isVisited[node]) {
      traverseNetwork(node);
      // increment the network count because we have found another separate network
      networkCount++;
    }
  }

  // The number of additional connections needed to connect all computers is equal to the
  // number of networks found minus 1 (since one connection connects 2 networks)
  return networkCount - 1;

  // This is a recursive function that performs a depth-first search traversal of the network
  // starting at the given source node. It marks each visited node as visited in the isVisited array.
  // The purpose of this function is to find all the nodes that are connected to the same network.
  function traverseNetwork(sourceNode) {
    isVisited[sourceNode] = true;

    // For each neighbor of the source node, if the neighbor has not been visited,
    // perform a recursive traversal from the neighbor node.
    for (const neighborNode of neighbors[sourceNode]) {
      if (!isVisited[neighborNode]) {
        traverseNetwork(neighborNode);
      }
    }
  }
};
