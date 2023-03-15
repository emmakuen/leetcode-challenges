// https://leetcode.com/problems/check-completeness-of-a-binary-tree/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  let queue = [root]; // Initialize a queue with the root node

  let isPreviousNodeNull = false; // Keep track of whether the previous node was null or not
  while (queue.length > 0) {
    // Loop until there are no more nodes in the queue
    const node = queue.shift(); // Get the next node from the queue

    if (!node) {
      // If the node is null
      isPreviousNodeNull = true; // Set the flag to true, indicating that the previous node was null
      continue; // Continue to the next node in the queue
    }

    if (isPreviousNodeNull) return false; // If the previous node was null but the current node is not, then the binary tree is not complete

    // Add the left and right children of the current node to the queue
    queue.push(node.left, node.right);
  }

  return true; // If the loop completes without finding any missing nodes, then the binary tree is complete
};
