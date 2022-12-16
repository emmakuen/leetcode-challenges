/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode();
  let currentNode = dummyHead;

  let carry = 0;
  while (l1 || l2 || carry) {
    // calculate
    const val1 = l1?.val || 0;
    const val2 = l2?.val || 0;
    const sum = val1 + val2 + carry;

    // create the node
    currentNode.next = new ListNode(sum % 10);
    // memoize carry for the next iteration
    carry = Math.floor(sum / 10);

    // move pointers
    l1 = l1?.next;
    l2 = l2?.next;
    currentNode = currentNode.next;
  }

  return dummyHead.next;
};
