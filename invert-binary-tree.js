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

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return root;

  const leftNode = root.left;
  root.left = root.right;
  root.right = leftNode;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};
