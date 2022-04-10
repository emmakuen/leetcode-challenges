// 235. Lowest Common Ancestor of a Binary Search Tree

// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes
// p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a
// descendant of itself).”

// --- Examples
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself
// according to the LCA definition.
// Input: root = [2,1], p = 2, q = 1
// Output: 2

// --- Constraints
// The number of nodes in the tree is in the range [2, 105].
// -109 <= Node.val <= 109
// All Node.val are unique.
// p != q
// p and q will exist in the BST.

function lowestCommonAncestor(root, p, q) {
  let currentNode = root;

  // binary search tree's nodes each store a key greater than all the keys in the node's left subtree
  // and less than those in its right subtree.
  // therefore, if the node is greater than one of the input node and less than the other,
  // it should be the lowest common ancestor of them.

  // following this logic, loop over each node in the tree
  while (currentNode) {
    // and if the current node's value is greater than values of input nodes
    // traverse to the left
    if (currentNode.val > p.val && currentNode.val > q.val) {
      currentNode = currentNode.left;
      // if the current node's value is less than the values of p, q
      // traverse to the right
    } else if (currentNode.val < p.val && currentNode.val < q.val) {
      currentNode = currentNode.right;
      // else, return it as the lowest common ancestor
    } else {
      return currentNode;
    }
  }
}
