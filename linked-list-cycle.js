// 141. Linked List Cycle

// Given head, the head of a linked list, determine
// if the linked list has a cycle in it.

// There is a cycle in a linked list if there is
// some node in the list that can be reached again
// by continuously following the next pointer. Internally,
// pos is used to denote the index of the node that tail's
// next pointer is connected to. Note that pos is not
// passed as a parameter.

// Return true if there is a cycle in the linked list.
// Otherwise, return false.

// --- Examples
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list,
// where the tail connects to the 1st node (0-indexed).

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list,
// where the tail connects to the 0th node.

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// --- Constraints
// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

function hasCycle(head) {
  // initialize two pointers
  // slow pointer shifts up by one while fast pointer by two nodes
  let slowPointer = head;
  let fastPointer = head;

  // check if fast pointer and its next node aren't null
  // if its next node is null, fast pointer won't be able to
  // jump by two nodes and the code will throw error
  while (fastPointer && fastPointer.next) {
    // shift both pointers up
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    // if two pointers meet, the list has a circle
    if (slowPointer === fastPointer) {
      // therefore, return true
      return true;
    }
  }

  // if two pointers don't meet, there's no circle
  // therefore, return false
  return false;
}
