// 1. Two Sum

// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.

// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,5,4], 9) --> [1,2]

// --- Constraints
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const indexOfAddendFor = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // if current number's addend exists,
    // return the index of the current number and the index of the addend
    if (num in indexOfAddendFor) return [i, indexOfAddendFor[num]];

    // else, store the current number's index at the key of its addend that would make the target sum
    indexOfAddendFor[target - num] = i;
  }

  return [];
};
