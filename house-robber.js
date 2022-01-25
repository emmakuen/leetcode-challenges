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

// Version 1
function robber1(nums) {
  // if there's no house, no money is robbed
  if (nums.length === 0) return 0;
  // if there's one house, rob money of that house
  if (nums.length === 1) return nums[0];
  // if there are two houses, rob the wealthier one (can't rob the other one as they're adjacent)
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  // initialize two pointers that keep track of maximum total loots of previous non-adjacent houses
  // first total represents max total that can be looted from non-adjacent houses up to n-2th
  // assign it the money of first house as loop starts from the third house
  let firstTotal = nums[0];

  // second total represents max total that can be looted from non-adjacent houses up to n-1th
  // assign it money of whichever's wealthier of first two houses
  let secondTotal = Math.max(nums[0], nums[1]);

  // loop to calculate maximum total loot
  for (let i = 2; i < nums.length; i++) {
    // current total = nth house money + max total loot of non-adjacent houses up to n-2th
    let currentTotal = firstTotal + nums[i];
    // shift the first pointer up
    firstTotal = secondTotal;
    // compare the max total loots of non-adjacent houses up to n-1th vs nth
    // assign whichever's bigger to the second pointer so that it always tracks the maximum loot amount
    secondTotal = Math.max(currentTotal, secondTotal);
  }

  // return the maximum amount of money that can be looted
  return secondTotal;
}

// Version 2
function robber2(nums) {
  // if there's no house, no money is robbed
  if (nums.length === 0) return 0;
  // if there's one house, rob money of that house
  if (nums.length === 1) return nums[0];
  // if there are two houses, rob the wealthier one (can't rob the other one as they're adjacent)
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    // compare max total loot of houses up to i-2th or i-3th
    // add whichever's bigger to the current house $$
    // this loop accumulates the max totals to the end of the array
    nums[i] = Math.max(nums[i - 2] + nums[i], (nums[i - 3] || 0) + nums[i]);
  }

  // return whichever's bigger of last two max totals in the array
  return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
}

// Version 3

function robber3(nums) {
  // initialize two pointers to track two accumulated total values
  let currentMax = 0;
  let previousMax = 0;

  // loop over houses and compare two accumulated total values to come up with max
  nums.forEach((current) => {
    // as loop moves up, previous max becomes previous of previous as it tracks houses up to n-2 index
    let prevPreviousMax = previousMax;
    // assign whichever's bigger of two max to previous max
    previousMax = Math.max(currentMax, previousMax);
    // add prevPreviousMax to current value and assign it to current max
    // prevPreviousMax tracks houses up to n-2 index, so currentMax would be total of non-adjacent houses
    currentMax = prevPreviousMax + current;
  });

  return Math.max(currentMax, previousMax);
}
