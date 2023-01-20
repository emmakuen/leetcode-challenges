// Given an integer array nums, return all the different possible non-decreasing subsequences of the given array with at least two elements.
// You may return the answer in any order.

// --- Examples
// Input: nums = [4,6,7,7]
// Output: [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
// Input: nums = [4,4,3,2,1]
// Output: [[4,4]]

// --- Constraints
// 1 <= nums.length <= 15
// -100 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findSubsequences = function (nums) {
  const subsequences = [];
  const appeared = new Set();

  function dfs(index, subsequence = []) {
    const subsequenceStr = subsequence.join("-");
    // if current subsequence's length is
    if (subsequence.length > 1 && !appeared.has(subsequenceStr)) {
      subsequences.push([...subsequence]);
      appeared.add(subsequenceStr);
    }

    if (index >= nums.length) return;

    if (
      subsequence.length === 0 ||
      nums[index] >= subsequence[subsequence.length - 1]
    ) {
      subsequence.push(nums[index]);
      dfs(index + 1, subsequence);
      subsequence.pop();
    }

    dfs(index + 1, subsequence);
  }

  dfs(0, []);

  return subsequences;
};
