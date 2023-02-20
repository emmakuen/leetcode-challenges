// Recursive Solution
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target, start = 0, end = nums.length - 1) {
  if (start >= end) return nums[start] >= target ? start : start + 1;

  let mid = Math.floor((start + end) / 2);

  if (nums[mid] > target) return searchInsert(nums, target, start, mid - 1);
  if (nums[mid] < target) return searchInsert(nums, target, mid + 1, end);

  return mid;
};

// Iterative Solution
const searchInsert1 = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return nums[left] > target ? left + 1 : left;
};
