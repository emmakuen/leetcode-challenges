// 543. Diameter of Binary Tree

// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

// --- Examples
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// Input: root = [1,2]
// Output: 1

// --- Constraints
// The number of nodes in the tree is in the range [1, 104].
// -100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  // max diameter is initially zero
  let maxDiameter = 0;

  function getHeight(node) {
    // if there's no node, the height would be zero
    if (!node) return 0;

    // else, find the heights of its left and right nodes
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);

    // current node's height is equal to the max of its left and right children's heights plus one (one represents the current node)
    const height = 1 + Math.max(leftHeight, rightHeight);
    // current node's diameter would be equal to the sum of its left and right children's heights
    const diameter = leftHeight + rightHeight;
    // if it's greater than the maximum diameter, update the max
    maxDiameter = Math.max(diameter, maxDiameter);

    // return the current node's height
    return height;
  }

  getHeight(root);

  return maxDiameter;
};
