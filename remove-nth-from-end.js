// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node
// from the end of the list and return its head.

// --- Examples
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Input: head = [1], n = 1
// Output: []
// Input: head = [1,2], n = 1
// Output: [1]

// --- Constraints
// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// Follow up: Could you do this in one pass?

function removeNthFromEnd(head, n) {
  // initialize a dummy head variable and point it to head
  // to easily deal with edge cases such as empty list
  let dummyHead = { next: head };

  // initialize two pointers and point both to dummy head
  let left = dummyHead;
  let right = dummyHead;

  // move the right pointer until it's n nodes ahead of left
  for (let i = 0; i <= n; i++) {
    right = right.next;
  }

  // until the right pointer reaches the end of the list
  // move both pointers up by one
  while (right) {
    left = left.next;
    right = right.next;
  }

  // when the right pointer is at the end of the list,
  // left pointer will be at n-1th node from the end
  // so, we can remove the nth node by
  // making the left pointer point to two nodes ahead of it
  left.next = left.next.next;

  // return the current head saved to dummy head's next node
  return dummyHead.next;
}
