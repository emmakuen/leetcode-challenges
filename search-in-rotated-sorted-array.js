// 33. Search in Rotated Sorted Array

// There is an integer array nums sorted in ascending order
// (with distinct values).

// Prior to being passed to your function, nums is possibly
// rotated at an unknown pivot index k (1 <= k < nums.length)
// such that the resulting array is [nums[k], nums[k+1], ...,
// nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).
// For example, [0,1,2,4,5,6,7] might be rotated at pivot
// index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an
// integer target, return the index of target if it is in
// nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime
// complexity.

// ---- Examples
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Input: nums = [1], target = 0
// Output: -1

// ---- Constraints
// 1 <= nums.length <= 5000
// -104 <= nums[i] <= 104
// All values of nums are unique.
// nums is an ascending array that is possibly rotated.
// -104 <= target <= 104

function search(nums, target) {
  // if there's only one number in the array,
  // check if it's equal to target
  // if so, return its index (0), else return -1
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  /**
   * @description binary search for a part of array
   * @param {Array<Number>} arr
   * @param {Number} target
   * @param {Number} left search left bound index
   * @param {Number} right search right bound index
   * @returns {Number} index of target in the given array
   */
  const binarySearch = (arr, target, left, right) => {
    // if target is smaller than the min
    // or greater than the max in the sorted array,
    // array doesn't contain target
    // therefore, return -1
    if (arr[left] > target || arr[right] < target) {
      return -1;
    }

    // else, loop until two pointers meet
    while (left <= right) {
      // find the mid index
      const mid = Math.floor((left + right) / 2);
      // if mid value is equal to target,
      // stop the loop and return mid index
      if (arr[mid] === target) return mid;

      // if target is greater than mid value,
      // target is not in the left part of array
      // therefore, move left pointer to mid + 1
      // if target is less than mid value,
      // target is not in the right part of array
      // therefore, move right pointer to mid - 1
      arr[mid] < target ? (left = mid + 1) : (right = mid - 1);
    }

    // if target is not found, return -1
    return -1;
  };

  /**
   * @description find inflection index of rotated sorted array
   * @param {Array<Number>} arr
   * @returns {Number} inflection index (index of max value)
   */
  const findInflectionIndex = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] > arr[mid + 1]) {
        return mid;
      } else if (arr[mid - 1] > arr[mid]) {
        return mid - 1;
      } else {
        arr[mid] > arr[left] ? (left = mid + 1) : (right = mid - 1);
      }
    }
  };

  // initialize two pointers at the leftmost and rightmost indices of the array
  let left = 0;
  let right = nums.length - 1;

  // if the array is not rotated,
  // conduct binary search and return the result
  if (nums[left] < nums[right]) {
    return binarySearch(nums, target, left, right);
  } else {
    // if the array is rotated,
    // find the inflection point
    const inflectionIdx = findInflectionIndex(nums);

    // conduct binary search twice:
    // 1. from beginning of array to inflection index
    // 2. from inflection index + 1 to end of array

    // if the target is in the subarray, it returns 0 or positive index
    // if not, search returns -1

    // therefore, find the max of two binary search
    // and return the result.
    return Math.max(
      binarySearch(nums, target, left, inflectionIdx),
      binarySearch(nums, target, inflectionIdx + 1, right)
    );
  }
}
