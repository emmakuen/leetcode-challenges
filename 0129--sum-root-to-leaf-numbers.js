// https://leetcode.com/problems/sum-root-to-leaf-numbers/description/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = function (root, num = 0) {
  if (!root) return 0;
  num = num * 10 + root.val;
  if (!root.left && !root.right) return num;

  return sumNumbers(root.left, num) + sumNumbers(root.right, num);
};
