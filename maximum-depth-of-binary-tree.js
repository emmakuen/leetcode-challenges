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
function maxDepth1(root) {
  // define a depth first search function
  const dfs = (node, depth) => {
    // if nodes are exhausted,
    if (!node) {
      // update max depth if current depth is greater
      maxDepth = Math.max(depth, maxDepth);
      // stop the recursion
      return;
    } else {
      // else, call the function on right and left nodes recursively
      // depth will accumulate over each recursion
      // and eventually update max depth if it's greater
      dfs(node.right, depth + 1);
      dfs(node.left, depth + 1);
    }
  };

  // initialize a variable to keep track of max depth
  let maxDepth = 0;
  // call the depth first function on tree root
  // depth is initially set to zero
  dfs(root, 0);

  // after the recursive function finishes, return max depth
  return maxDepth;
}

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
