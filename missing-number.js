// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

// Examples
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

// Constraints
// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

const findMissingNumber = (nums) => {
  // the nums array contains distinct numbers from 0 to n and it's supposed to have n + 1 number of items. Now it has n distinct items as 1 item is missing.

  // the last item in the array should be equal to nums.length as the array starts from zero.
  let missingNum = nums.length;

  // iterate through each item in array
  for (let i = 0; i < nums.length; i++) {
    // the sum of all numbers including the missing number is equal to the sum of all indexes of nums array plus the last item (n + 1).
    // therefore, in each iteration, add the index to the sum and subtract the number at the current index.
    // the final difference would be the missing number
    missingNum += i - nums[i];
  }

  return missingNum;
};
