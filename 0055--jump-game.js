// 55. Jump Game

// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Constraints:
// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

function canJump(nums) {
  // initially assume all nums are not reachable
  const reachables = new Array(nums.length).fill(false);
  // as it's always possible to jump to the first number in the array, first item is reachable
  reachables[0] = true;

  // in order to check if the num at index i is reachable
  // check for each of its preceding nums
  // --- whether preceding num j is reachable (reachables[j] &&)
  // --- whether the sum of its maximum jump length and index can cover i length (j + nums[j] >= i)
  // if these two conditions are met, num at index i is reachable (reachables[i] = true)
  // break the inner loop and check if the next number is reachable
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (reachables[j] && j + nums[j] >= i) {
        reachables[i] = true;
        break;
      }
    }
  }

  // after the loop, return whether last num is reachable
  return reachables[reachables.length - 1];
}
