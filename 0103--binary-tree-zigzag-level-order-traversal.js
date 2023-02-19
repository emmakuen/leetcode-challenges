// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
// (i.e., from left to right, then right to left for the next level and alternate between).

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
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const values = [];

  while (queue.length > 0) {
    const length = queue.length;

    const level = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();

      level.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    if (values.length & 1) {
      level.reverse();
    }
    values.push(level);
  }

  return values;
};
