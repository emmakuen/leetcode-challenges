/* 
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

For example, for arr = [2,3,4], the median is 3.
For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
Implement the MedianFinder class:

MedianFinder() initializes the MedianFinder object.
void addNum(int num) adds the integer num from the data stream to the data structure.
double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

--- Examples
Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0

--- Constraints
-105 <= num <= 105
There will be at least one element in the data structure before calling findMedian.
At most 5 * 104 calls will be made to addNum and findMedian.

--- Follow Up
If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
*/

class MedianFinder {
  constructor() {
    this.leftHeap = new BinaryHeap(true);
    this.rightHeap = new BinaryHeap(false);
  }

  addNum(num) {
    if (this.leftHeap.peek() === null || num < this.leftHeap.peek()) {
      this.leftHeap.add(num);
    } else {
      this.rightHeap.add(num);
    }

    if (this.leftHeap.size - this.rightHeap.size > 1) {
      const max = this.leftHeap.poll();
      this.rightHeap.add(max);
    } else if (this.rightHeap.size - this.leftHeap.size > 1) {
      const min = this.rightHeap.poll();
      this.leftHeap.add(min);
    }
  }

  findMedian() {
    if (!this.leftHeap.size && !this.rightHeap.size) return null;
    if (this.leftHeap.size === this.rightHeap.size) {
      return (this.leftHeap.peek() + this.rightHeap.peek()) / 2;
    }
    if (this.leftHeap.size < this.rightHeap.size) {
      return this.rightHeap.peek();
    }

    return this.leftHeap.peek();
  }
}

class BinaryHeap {
  constructor(isMaxHeap) {
    this.values = [];
    this.compare = isMaxHeap ? this.maxCompare : this.minCompare;
  }

  get size() {
    return this.values.length;
  }

  minCompare(index1, index2) {
    return this.values[index1] - this.values[index2];
  }

  maxCompare(index1, index2) {
    return this.values[index2] - this.values[index1];
  }

  add(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  peek() {
    return this.values[0] || null;
  }

  poll() {
    if (this.values.length <= 1) return this.values.pop();

    const root = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.bubbleDown();

    return root;
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = this.getParentIndex(index);

    while (this.compare(index, parentIndex) < 0) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;

    while (true) {
      let swapIndex = null;
      let leftIndex = this.getLeftChildIndex(index);
      let rightIndex = this.getRightChildIndex(index);

      if (leftIndex && this.compare(leftIndex, index) < 0) {
        swapIndex = leftIndex;
      }

      if (
        rightIndex &&
        ((swapIndex === null && this.compare(rightIndex, index) < 0) ||
          (swapIndex && this.compare(rightIndex, leftIndex) < 0))
      ) {
        swapIndex = rightIndex;
      }

      if (!swapIndex) break;

      this.swap(index, swapIndex);
      index = swapIndex;
    }
  }

  getLeftChildIndex(index) {
    const leftChildIndex = index * 2 + 1;
    return leftChildIndex >= this.values.length ? null : leftChildIndex;
  }

  getRightChildIndex(index) {
    const rightChildIndex = index * 2 + 2;
    return rightChildIndex >= this.values.length ? null : rightChildIndex;
  }

  getParentIndex(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    return parentIndex < 0 ? null : parentIndex;
  }

  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }
}
