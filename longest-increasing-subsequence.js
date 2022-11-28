// 300. Longest Increasing Subsequence
/**
Given an integer array nums, return the length of the longest strictly increasing subsequence.
A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].
 */

// Examples
/**
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Input: nums = [0,1,0,3,2,3]
Output: 4
Input: nums = [7,7,7,7,7,7,7]
Output: 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  // each number can be a subsequence on their own
  // so, the maximum length of subsequence can be 1 at minimum
  let maxLength = 1;
  // create an array to memoize the max length of a subsequence for each number in nums
  const maxLengthFor = Array(nums.length).fill(1);

  // for each number starting from the second last index
  for (let i = nums.length - 2; i >= 0; i--) {
    // compare it to each one of its next numbers
    for (let j = i + 1; j < nums.length; j++) {
      // if it's less than the next number, they are an increasing subsequence
      if (nums[i] < nums[j]) {
        // in that case, compare the current number's memoized max length of a subsequence with
        // the next number's memoized max subsequence length + 1 (1 representing the current number)
        // whichever's greater becomes the maxLength for the number at the [i]th index
        maxLengthFor[i] = Math.max(maxLengthFor[j] + 1, maxLengthFor[i]);
      }
    }
    // if the max length of the subsequence including the current number is greater than the overall max
    // update the max length
    maxLength = Math.max(maxLength, maxLengthFor[i]);
  }

  return maxLength;
};

// Time Complexity --- O(n2)
// Space Complexity --- O(n)
