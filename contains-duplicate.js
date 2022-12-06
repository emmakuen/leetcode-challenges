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
  // memoize numbers that have appeared
  const appeared = new Set();

  for (const num of nums) {
    // if the current number has already appeared before, there's a duplicate
    if (appeared.has(num)) return true;

    // else, add that number in the set
    appeared.add(num);
  }

  // if no number has appeared twice, there's no duplicate
  return false;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
