/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let minIndex = 0;
  let maxIndex = nums.length - 1;

  while (minIndex <= maxIndex) {
    let midIndex = Math.floor((minIndex + maxIndex) / 2);

    if (nums[midIndex] === target) return midIndex;
    // if the number at the middle index is greater than the target, all the numbers to the right side of it are also greater than target
    // so, shrink the search window to exclude these numbers
    if (nums[midIndex] > target) {
      maxIndex = midIndex - 1;
      // if the mid number is less than the target, all the numbers on the left side of the mid index are also less than the target
      // so exclude them from the search window
    } else {
      minIndex = midIndex + 1;
    }
  }

  // if target hasn't been found, return -1
  return -1;
};
