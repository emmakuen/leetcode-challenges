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
  let endOfFirstHalf = head;
  let endOfList = head?.next;

  while (endOfList?.next) {
    endOfFirstHalf = endOfFirstHalf.next;
    endOfList = endOfList.next.next;
  }

  let headOfSecondHalf = reverse(endOfFirstHalf.next);
  endOfFirstHalf.next = null;

  while (head && headOfSecondHalf) {
    const headNext = head.next;
    head.next = headOfSecondHalf;
    const headOfSecondHalfNext = headOfSecondHalf.next;
    headOfSecondHalf.next = headNext;
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
