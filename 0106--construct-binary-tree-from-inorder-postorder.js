// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const inorderIndexFor = {};
  for (const [index, value] of inorder.entries()) {
    inorderIndexFor[value] = index;
  }

  return build(0, inorder.length - 1);

  function build(startIndex, endIndex) {
    if (startIndex > endIndex) return null;

    let root = new TreeNode(postorder.pop());
    let rootIndex = inorderIndexFor[root.val];

    root.right = build(rootIndex + 1, endIndex);
    root.left = build(startIndex, rootIndex - 1);

    return root;
  }
};
