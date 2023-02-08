// You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].
// Each element nums[i] represents the maximum length of a forward jump from index i.
// In other words, if you are at nums[i], you can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n
// Return the minimum number of jumps to reach nums[n - 1].
// The test cases are generated such that you can reach nums[n - 1]

// --- Examples
// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2.
// Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Input: nums = [2,3,0,1,4]
// Output: 2

// --- Constraints
// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
  if (nums.length < 2) return 0;

  const minStepsFor = Array(nums.length).fill(Infinity);

  minStepsFor[0] = 0;

  for (let i = 0; i < nums.length; i++) {
    const availableSteps = nums[i];

    for (
      let step = 1;
      step <= availableSteps && step + i < nums.length;
      step++
    ) {
      minStepsFor[i + step] = Math.min(
        minStepsFor[i + step],
        minStepsFor[i] + 1
      );
    }
  }

  return minStepsFor[nums.length - 1];
};

const jumpWindow = (nums) => {
  let jumpCount = 0;
  let startIndex = 0;
  let endIndex = 0;
  let maxReachableIndex = 0;

  // iterate until we reach the last number
  while (endIndex < nums.length - 1) {
    // find the maximum reachable index from the current window
    for (let i = startIndex; i <= endIndex; i++) {
      maxReachableIndex = Math.max(maxReachableIndex, i + nums[i]);
    }

    //update the window and increment the jump count
    startIndex = endIndex + 1;
    endIndex = maxReachableIndex;
    jumpCount++;
  }

  return jumpCount;
};
