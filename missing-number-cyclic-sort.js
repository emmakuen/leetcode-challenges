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
  let currentIndex = 0;
  const lastNum = nums.length;

  // sort numbers
  while (currentIndex < nums.length) {
    const num = nums[currentIndex];
    const correctIndex = num;

    // if the number is not the last one and the current index of the number is not the correct one, switch the number to place it at its correct index
    if (num < lastNum && correctIndex !== currentIndex) {
      [nums[correctIndex], nums[currentIndex]] = [
        nums[currentIndex],
        nums[correctIndex],
      ];
    } else {
      // if the number is in its correct index, move to the next index
      currentIndex++;
    }
  }

  // reset index
  currentIndex = 0;

  while (currentIndex < nums.length) {
    // if the number at the current index is not the correct one, it's the missing number
    if (currentIndex !== nums[currentIndex]) {
      return currentIndex;
    } else {
      currentIndex++;
    }
  }

  // if every number in the array are at their correct index, the last number is the missing number
  return lastNum;
};
