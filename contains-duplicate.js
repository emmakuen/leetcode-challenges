// 217. Contains Duplicate
/**
 Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 -- Examples
    Input: nums = [1,2,3,1]
    Output: true
    Input: nums = [1,2,3,4]
    Output: false
 -- Constraints
    1 <= nums.length <= 105
    -109 <= nums[i] <= 109
 */

const containsDuplicate = (nums) => {
  // create an object to keep track of numbers that have appeared so far
  const appeared = {};
  // for each number in the array
  for (let num of nums) {
    // if it's the first time num appears,
    if (!appeared[num]) {
      // add it to the object
      appeared[num] = true;
    } else {
      // else, it has a duplicate value;
      // therefore, return true
      return true;
    }
  }

  // if the loop finishes without returning true, it has no duplicate
  // so, return false
  return false;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
