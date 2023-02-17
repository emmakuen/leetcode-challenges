// Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

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
const minDiffInBST = function (root) {
  const values = traverseInOrder(root);
  let minDiff = Infinity;

  for (let i = 1; i < values.length; i++) {
    minDiff = Math.min(values[i] - values[i - 1], minDiff);
  }

  return minDiff;
};

function traverseInOrder(root, values = []) {
  if (!root) return values;

  traverseInOrder(root.left, values);
  values.push(root.val);
  traverseInOrder(root.right, values);

  return values;
}
