// 15. Three Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// ----- Examples
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Input: nums = []
// Output: []
// Input: nums = [0]
// Output: []

// ----- Constraints
// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

const threeSum = (nums) => {
  // sort the numbers
  nums.sort((a, b) => a - b);
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    // if the current number is repeated, skip it to avoid duplicate triplets
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // the remaining two number should be equal to the negation of the current number to make their sum zero.
    // therefore, target is the negation of the current number
    const target = -nums[i];
    // left variable points to the next number
    let left = i + 1;
    // right variable points to the last number
    let right = nums.length - 1;
    // loop until right and left pointers meet
    while (right > left) {
      const twoSum = nums[right] + nums[left];
      // if the sum of leftmost and rightmost values is equal to the target,
      if (target === twoSum) {
        // add the list of these three numbers to the answer list
        answer.push([nums[i], nums[left], nums[right]]);
        // move the left pointer up. (or you can move the right pointer down.)
        left++;
        // while the left value is equal to the previous left value, skip it to avoid duplicate triplets
        while (nums[left] === nums[left - 1]) {
          left++;
        }
      } else {
        // if target is greater than the sum of two numbers, move the left pointer up to increase the sum
        // if target is less than the sum of two numbers, move the right pointer down to decrease the sum
        target > twoSum ? left++ : right--;
      }
    }
  }

  // return the answer list
  return answer;
};

threeSum([1, 15, 2, -2]);

module.exports = threeSum;
