// 152. Maximum Product Subarray

// Given an integer array nums, find a contiguous
// non-empty subarray within the array that has
// the largest product, and return the product.

// The test cases are generated so that the answer will
// fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

// ---- Examples
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2,
// because [-2,-1] is not a subarray.

// ---- Constraints
// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
// The product of any prefix or suffix of nums is
// guaranteed to fit in a 32-bit integer.

function maxProduct(nums) {
  let max = -Infinity;

  // create variables to keep track of the previous maximum and minimum products
  // and initially assign 1 to both (because 1 * num = num while 0 * num = 0)
  // the reason why we're tracking the minimum is because it can become maximum when multiplied by a negative number
  let previousMin = 1;
  let previousMax = 1;

  // iterate over each number
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // find the current minimum and maximum by comparing the number itself with it's product with previous min/max
    const currentMin = Math.min(num, previousMin * num, previousMax * num);
    const currentMax = Math.max(num, previousMin * num, previousMax * num);
    // if the current max is greater than the max, update the max
    max = Math.max(currentMax, max);

    // for the next iteration, current min/max would become previous min/max
    previousMin = currentMin;
    previousMax = currentMax;
  }

  return max;
}

// Time complexity: O(n)
// Space complexity: O(1)
