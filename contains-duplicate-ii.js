/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const numIndexMap = {};

  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];

    // if there was a duplicate of current number and the gap between that duplicate's index and current index is less than k, return true
    if (num in numIndexMap && Math.abs(numIndexMap[num] - index) <= k)
      return true;

    // else, assign or replace the num property of the map with current index
    numIndexMap[num] = index;
  }

  // if there's no duplicate, return false
  return false;
};
