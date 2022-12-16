class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.random = null;
  }
}

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const originalToCopy = new Map();
  originalToCopy.set(null, null);
  let originalNode = head;

  while (originalNode) {
    originalToCopy.set(originalNode, new Node(originalNode.val));
    originalNode = originalNode.next;
  }

  originalNode = head;
  while (originalNode) {
    const copyNode = originalToCopy.get(originalNode);
    copyNode.next = originalToCopy.get(originalNode.next);
    copyNode.random = originalToCopy.get(originalNode.random);
    originalNode = originalNode.next;
  }

  return originalToCopy.get(head);
};
