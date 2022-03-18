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
function mergeTwoLists(l1, l2) {
  // Create a dummy head to handle edge cases
  const dummyHead = { next: null };
  // Initialize a current variable to track the current node
  // and assign the dummy head to it
  let current = dummyHead;

  // while both lists are not exhausted
  while (l1 && l2) {
    // if l1 node's value is smaller
    if (l1.val < l2.val) {
      // point current node's next pointer to it
      current.next = l1;
      // move the current pointer up
      current = current.next;
      // move the l1 pointer up to its next node
      l1 = l1.next;
    } else {
      // if l2 node's value is smaller,
      // point current node's next pointer to l2 node
      current.next = l2;
      // move the current pointer up
      current = current.next;
      // move the l2 pointer up to its next node
      l2 = l2.next;
    }
  }

  // when the loop finishes, connect the merged list to
  // whichever list that has remaining nodes
  current.next = l1 || l2;
  // return the merged list
  return dummyHead.next;
}
