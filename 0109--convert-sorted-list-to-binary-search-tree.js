// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) return null;

  let mid = breakListByMid(head);
  let root = new TreeNode(mid.val);
  if (head === mid) return root;

  // recursively build the left and right subtrees
  // the left subtree is the sublist from the head to the node before the mid
  root.left = sortedListToBST(head);
  // the right subtree is the sublist from the node after the mid to the tail
  root.right = sortedListToBST(mid.next);

  return root;
};

function breakListByMid(head) {
  let mid = head;
  let tail = head;
  let previousMid = null;

  while (tail && tail.next) {
    previousMid = mid;
    mid = mid.next;
    tail = tail.next.next;
  }

  // break the list in half by breaking the link between the mid and its previous node
  if (previousMid) previousMid.next = null;

  return mid;
}
