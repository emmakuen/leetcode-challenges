// 206. Reverse Linked List

// Given the head of a singly linked list,
// reverse the list, and return the reversed list.

// --- Examples
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Input: head = [1,2]
// Output: [2,1]
// Input: head = []
// Output: []

// --- Constraints
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000

// --- Follow Up
// A linked list can be reversed either iteratively
// or recursively. Could you implement both?

// RECURSIVE
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseListRecursively = (head) => {
  // Base case 1 => if there's no linked list,
  // break the recursion and return null
  if (!head) return null;
  // Base case 2 => if there's no next node,
  // break the recursion and return head
  if (!head.next) return head;

  // initialize a newHead and assign current head to it
  let newHead = head;

  // if head is linked to a next node,
  if (head.next) {
    // call the reverse list function recursively on it
    // make the returned value the new head
    newHead = reverseListRecursively(head.next);
    // reverse the next node's pointer and
    // link it to current head
    head.next.next = head;
  }
  // set break the head's next link and set it to null
  head.next = null;

  // return the new head
  return newHead;
};

// ITERATIVE
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  // initialize two pointers and
  // assign head node to current node variable
  // when we reverse the list, the first node becomes the last node and it should point to null
  // so, assign null to previous node variable
  let currentNode = head;
  let previousNode = null;

  // while current node is not null
  while (currentNode) {
    // store the current node's next node to a variable
    const nextNode = currentNode.next;
    // break the link and point it to its previous node
    currentNode.next = previousNode;

    // move on to the next node
    // now current node becomes the previous node
    // and next node becomes the current node
    previousNode = currentNode;
    currentNode = nextNode;
  }

  // when current node equals null, the loop breaks
  // and reversed linked list will be stored in the previousNode
  // therefore, return the value of previousNode
  return previousNode;
};
