// 198. House Robber

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// --- Examples
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// --- Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400

const rob = (nums) => {
  // create two pointers
  // current max is the maximum money robbable from house 0 to house n
  let currentMax = 0;
  // previous max is the maximum robbable from house 0 to house n - 1
  let previousMax = 0;

  for (const num of nums) {
    // when we move on to the next house,
    // previous max would now become the max of all money that can be robbed from house 0 to house n - 2, therefore prevPreviousMax
    const prevPreviousMax = previousMax;
    // and current max would become the max that can be robbed from house 0 to house n - 1, therefore previousMax
    previousMax = currentMax;
    // now compare the maximum money robbable from house 0 to house n - 2 (prevPreviousMax) plus the money from the current house (num)
    // to the maximum robbable from house 0 to house n - 1
    // and whichever's greater becomes the current max
    currentMax = Math.max(prevPreviousMax + num, previousMax);
  }

  return currentMax;
};
