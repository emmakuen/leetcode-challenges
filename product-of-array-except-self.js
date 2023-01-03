// 238. Product of Array Except Self
/**
 Given an integer array nums, return an array answer such that answer[i] 
is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

--- Examples
    Input: nums = [1,2,3,4]
    Output: [24,12,8,6]
    Input: nums = [-1,1,0,-3,3]
    Output: [0,0,9,0,0]
--- Constraints
    2 <= nums.length <= 105
    -30 <= nums[i] <= 30
    The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

    Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  // initialize an array to keep track of products
  const products = Array(nums.length).fill(1);

  // for each number, find the product of all the numbers on its left
  for (let i = 1; i < nums.length; i++) {
    // products[i - 1] is the product of nums[0] to nums[i - 2]
    // if we multiply it by nums[i - 1], we get the product of all the numbers on the left of nums[i]
    products[i] = products[i - 1] * nums[i - 1];
  }

  let rightNumsProduct = 1;

  // for each number, find the product of all the numbers on its right
  // multiply the product of left nums and right nums to find the product except the number itself
  for (let i = nums.length - 1; i >= 0; i--) {
    products[i] = products[i] * rightNumsProduct;
    rightNumsProduct *= nums[i];
  }

  return products;
};

// Time complexity = O(n)
// Space complexity = O(1)
