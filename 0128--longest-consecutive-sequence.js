// 128. Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:
// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const numsSet = new Set(nums);

  let maxLength = 0;
  for (const num of nums) {
    let length = 0;
    // if the current number is the start of a sequence
    if (!numsSet.has(num - 1)) {
      // find the length of the sequence
      while (numsSet.has(num + length)) {
        length++;
      }

      // update maxLength if the current sequence is greater in length
      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
};
