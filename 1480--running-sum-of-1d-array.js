// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

// --- Examples
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// --- Constraints
// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function (nums) {
  const runningSums = Array(nums.length);
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    runningSums[i] = sum;
  }

  return runningSums;
};
