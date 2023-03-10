// Naive solution

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.values = [];
  let node = head;

  while (node) {
    this.values.push(node.val);
    node = node.next;
  }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let randomIndex = Math.floor(Math.random() * this.values.length);
  return this.values[randomIndex];
};
