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
  const dummyHead = { next: null };
  let current = dummyHead;
  const endOfFirstHalf = findEndOfFirstHalf(head);
  let headOfSecondHalf = reverse(endOfFirstHalf.next);
  endOfFirstHalf.next = null;

  while (head && headOfSecondHalf) {
    current.next = head;
    head = head.next;
    current.next.next = headOfSecondHalf;
    headOfSecondHalf = headOfSecondHalf.next;
    current = current.next.next;
  }

  current.next = head || headOfSecondHalf;

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

  function findEndOfFirstHalf(head) {
    let endOfFirstHalf = head;
    let endOfList = head && head.next;

    while (endOfList?.next) {
      endOfFirstHalf = endOfFirstHalf.next;
      endOfList = endOfList.next.next;
    }

    return endOfFirstHalf;
  }
};
