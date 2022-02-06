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

const productExceptSelf = (nums) => {
  // initialize an array to keep track of products
  let output = Array(nums.length).fill(1);
  // initialize a variable that keeps track of the product
  let product = 1;

  // multiply from left to right
  for (let i = 0; i < nums.length; i++) {
    // product is initially 1 but then takes the value to the left of current num (nums[i])
    // multiply product with 1 in the output array
    // the output will be array of products produced from multiplying nums one by one
    // from left to right
    output[i] = output[i] * product;
    product = product * nums[i];
  }

  // reset product variable to 1
  product = 1;

  // multiply from right to left
  for (let j = nums.length - 1; j >= 0; j--) {
    // product is initially 1 but then takes the value to the right of current num (nums[i])
    // now output[j] holds the multiplication of nums to the left of the current number (nums[i])
    // multiply it with product and assign it to output[j]
    output[j] = output[j] * product;
    product = product * nums[j];
  }

  // return the output array
  return output;
};

// Time complexity = O(n)
// Space complexity = O(1)
