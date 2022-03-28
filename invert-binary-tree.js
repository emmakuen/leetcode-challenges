// 226. Invert Binary Tree

// Given the root of a binary tree, invert the tree, and return its root.

// --- Examples
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Input: root = [2,1,3]
// Output: [2,3,1]
// Input: root = []
// Output: []

// --- Constraints
// The number of nodes in the tree is in the range
// [0, 100].
// -100 <= Node.val <= 100

function invertTree(root) {
  // recursively invert nodes
  invertRecursively(root);
  // return the inverted tree
  return root;

  // define a helper function that would swap
  // left and right node values recursively
  function invertRecursively(node) {
    // if nodes are exhausted, finish recursion
    if (!node) return;
    // else, save left value to a temp variable
    const temp = node.left;
    // and swap left and right node values
    node.left = node.right;
    node.right = temp;
    // call this function recursively
    // on left and right nodes
    invertRecursively(node.left);
    invertRecursively(node.right);
  }
}
