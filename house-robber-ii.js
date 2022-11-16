// 213. House Robber II
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle.
// That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// --- Examples
// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Input: nums = [1,2,3]
// Output: 3

// --- Constraints
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000

function getRobbableMax(nums, startIndex, endIndex) {
  let previousMax = 0;
  let currentMax = 0;
  for (let i = startIndex; i <= endIndex; i++) {
    const prevPreviousMax = previousMax;
    previousMax = currentMax;
    currentMax = Math.max(prevPreviousMax + nums[i], previousMax);
  }
  return currentMax;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  if (nums.length === 1) return nums[0];

  // we wouldn't want to rob the first and the last houses at the same time,
  // so, find the maximum money robbable from houses excluding the last
  const max1 = getRobbableMax(nums, 0, nums.length - 2);
  // find the maximum robbable from houses excluding the first
  const max2 = getRobbableMax(nums, 1, nums.length - 1);

  // and rob whichever's greater
  return Math.max(max1, max2);
};
