/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (
  nums,
  target,
  startIndex = 0,
  endIndex = nums.length - 1
) {
  if (startIndex >= endIndex) {
    return nums[startIndex] >= target ? startIndex : startIndex + 1;
  }

  let midIndex = Math.floor((startIndex + endIndex) / 2);

  if (nums[midIndex] > target) {
    return searchInsert(nums, target, startIndex, midIndex - 1);
  } else if (nums[midIndex] < target) {
    return searchInsert(nums, target, midIndex + 1, endIndex);
  } else {
    return midIndex;
  }
};
