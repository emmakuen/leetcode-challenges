// 1. Two Sum

// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.

// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,5,4], 9) --> [1,2]

// --- Constraints
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

function twoSum(arr, target) {
  let visited = {};

  // for each number in the list
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    // find the addent that produces the target sum
    const addent = target - num;

    // if the addent has been visited
    if (addent in visited) {
      // make a list of the current index and the addent index
      // stop the loop and return the list
      return [i, visited[addent]];
    }
    // if the addent has not been visited, the answer is yet to be found
    // so, store the current number and its index in the visited object
    visited[num] = i;
  }
}
