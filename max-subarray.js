// Given an integer array nums, find the contiguous subarray
// (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// ---- Examples
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Input: nums = [1]
// Output: 1
// Input: nums = [5,4,-1,7,8]
// Output: 23

// ---- Constraints
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

function maxSubArray(nums) {
  // if there's only one number in the array, return that number as the largest sum
  if (nums.length === 1) return nums[0];

  // make an array maxSums
  // it tracks the largest sum for subarrays up to the given index in nums
  // for example, maxSums[10] represents the largest sum of subarrays from nums[0] to nums[10]
  const maxSums = [nums[0]];

  // make a variable to track the largest sum of all subarrays in nums
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // find the largest sum of subarrays up to i index
    const maxSum = Math.max(nums[i], nums[i] + maxSums[i - 1]);
    // push the value to maxSums array
    maxSums.push(maxSum);
    // if current maxSum is larger than previous max, update the max
    max = Math.max(max, maxSum);
  }

  // return the largest sum
  return max;
}

// Time Complexity = O(n)
// Space Complexity = O(n)
