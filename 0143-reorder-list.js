/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  // find the start of second half of the list
  let tailOfFirstHalf = head;
  let tail = head?.next;

  while (tail?.next) {
    // when the fast pointer reaches the tail, slow pointer would point at the tail of the first half
    tailOfFirstHalf = tailOfFirstHalf.next;
    tail = tail.next.next;
  }

  let headOfSecondHalf = reverse(tailOfFirstHalf.next);
  tailOfFirstHalf.next = null;

  while (head && headOfSecondHalf) {
    // reorder by mixing head and tail nodes
    const headNext = head.next;
    head.next = headOfSecondHalf;
    const headOfSecondHalfNext = headOfSecondHalf.next;
    headOfSecondHalf.next = headNext;
    // update the pointers
    head = headNext;
    headOfSecondHalf = headOfSecondHalfNext;
  }

  function reverse(head) {
    let previous = null;
    let current = head;
    while (current) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    return previous;
  }
};
