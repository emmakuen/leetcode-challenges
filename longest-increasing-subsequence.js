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

function lengthOfLIS(nums) {
  // if the array is empty, the length of subsequence is zero
  if (nums.length === 0) return 0;

  // each item in array can constitute a subsequence with length of 1
  // therefore, initialize a new array where each item is equal to 1
  const LIS = Array(nums.length).fill(1);

  // initialize a temporary that keeps track of the current longest subsequence length
  let max = 1;

  // for number i
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      // if preceding number at index i is less than them, nums[i] and nums[j] are increasing subsequence
      if (nums[j] < nums[i]) {
        // therefore, increase the subsequence length at LIS[j] index by 1
        // compare it to subsequence length at LIS[i] and assign whichever's greater to LIS[i]
        LIS[i] = Math.max(LIS[i], LIS[j] + 1);
      }
    }
    // after comparing nums[i] to each of its preceding num in the array
    // compare current max subsequence length to subsequence length at LIS[i]
    // assign whichever's greater to max
    max = Math.max(max, LIS[i]);
  }

  // return the longest subsequence length
  return max;
}

// Time Complexity --- O(amount * coins.length)
// Space Complexity --- O(amount)
