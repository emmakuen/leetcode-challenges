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
  // if there's only one number, return that number
  if (nums.length === 1) return nums[0];
  // make a list of max and min products of subarrays
  const maxProducts = [nums[0]];
  const minProducts = [nums[0]];
  // initialize a max variable to store the largest product
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // compare the following three values
    // the max product of subarrays up to i-1 index * current number VS
    // current number by itself VS
    // the min product of subarrays up to i-1 index * current number
    const maxProduct = Math.max(
      nums[i],
      nums[i] * maxProducts[i - 1],
      nums[i] * minProducts[i - 1]
    );

    const minProduct = Math.min(
      nums[i],
      nums[i] * maxProducts[i - 1],
      nums[i] * minProducts[i - 1]
    );
    // push the largest value to max products array
    maxProducts.push(maxProduct);
    // push the smallest product to min products array
    minProducts.push(minProduct);

    // if current max product is larger than previous max, update the max
    max = Math.max(max, maxProduct);
  }

  // return the largest product
  return max;
}

// Time complexity: O(n)
// Space complexity: O(n)
