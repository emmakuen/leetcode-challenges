var cloneGraph = function (node, clonedNodes = new Map()) {
  // If the input node is null, return null
  if (!node) return null;

  // If the input node has already been cloned, return the corresponding cloned node
  if (clonedNodes.has(node)) return clonedNodes.get(node);

  // Create a new node object that is a copy of the input node
  const clonedNode = new Node(node.val);

  // Add the input node and its corresponding cloned node to the clonedNodes map
  clonedNodes.set(node, clonedNode);

  // Loop over each neighbor of the input node
  for (const neighbor of node.neighbors) {
    // Recursively call cloneGraph on the neighbor to create a deep copy of the neighbor node
    const clonedNeighbor = cloneGraph(neighbor, clonedNodes);

    // Add the cloned neighbor to the clonedNode.neighbors array to preserve the graph structure
    clonedNode.neighbors.push(clonedNeighbor);
  }

  // Return the cloned node object
  return clonedNode;
};
