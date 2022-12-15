// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path
// from the root node down to the farthest leaf node.

// --- Examples
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Input: root = [1,null,2]
// Output: 2

// --- Constraints
// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

// FIRST SOLUTION
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  function dfs(node, depth) {
    // if there's no more node to traverse, return the current depth
    if (!node) return depth;

    // else, find the depth of left and right nodes by calling the dfs recursively
    // increase depth by one to indicate we're going one level deeper
    const leftDepth = dfs(node.left, depth + 1);
    const rightDepth = dfs(node.right, depth + 1);
    // return whichever's greater as current node's depth
    return Math.max(leftDepth, rightDepth);
  }

  return dfs(root, 0);
};

// SECOND SOLUTION
function maxDepth(root) {
  // if the tree is exhausted, break the recursion and return 0
  if (!root) return 0;

  // else, call the function recursively on right and left nodes of tree
  // for each level of depth,
  // compare the depth of right and left nodes
  // and return whichever's larger + 1
  // 1 represents the current level of depth
  // depth accumulates over the recursion
  // and eventually return the maximum depth of the tree
  return 1 + Math.max(maxDepth(root.right), maxDepth(root.left));
}
