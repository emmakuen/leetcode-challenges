// 21. Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1
// and list2.

// Merge the two lists in a one sorted list. The list should
// be made by splicing together the nodes of the first two
// lists.

// Return the head of the merged linked list.

// --- Examples
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Input: list1 = [], list2 = []
// Output: []
// Input: list1 = [], list2 = [0]
// Output: [0]

// --- Constraints
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // create a dummy head to handle edge cases
  const dummyHead = { next: null };
  // create a current node and assign dummy head to it initially
  let currentNode = dummyHead;

  // while both lists are not exhausted
  while (list1 && list2) {
    // if the list1's value is smaller
    if (list1.val < list2.val) {
      // link the current node to it
      currentNode.next = list1;
      // and move the list1 pointer to the next node
      list1 = list1.next;
    } else {
      // else, link the current node to list2
      currentNode.next = list2;
      // and move the list2 pointer to the next node
      list2 = list2.next;
    }
    // move the currentNode pointer to its next node
    currentNode = currentNode.next;
  }

  // when the loop breaks, one of the lists can have remaining nodes
  // link the current node to the nodes of the non-exhausted list
  currentNode.next = list1 || list2;

  // return the merged list
  return dummyHead.next;
};
