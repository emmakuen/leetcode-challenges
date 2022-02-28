// 153. Find Minimum in Rotated Sorted Array

// Suppose an array of length n sorted in ascending order is
// rotated between 1 and n times. For example, the array nums
// = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array
// [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array
// [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements,
// return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// ---- Examples
// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

// ---- Constraints:
// n == nums.length
// 1 <= n <= 5000
// -5000 <= nums[i] <= 5000
// All the integers of nums are unique.
// nums is sorted and rotated between 1 and n times.

function findMin(nums) {
  // if there's only one number, that's the minimum
  // therefore, return that number
  if (nums.length === 1) return nums[0];

  // initialize left, right pointers pointing at leftmost,
  // and rightmost indexes of the array
  let left = 0;
  let right = nums.length - 1;

  // if value at left index is less than value at right index,
  // the array is not rotated
  // therefore, return the value at left index
  if (nums[left] < nums[right]) return nums[left];

  // loop over nums until pointers meet or minimum is found
  while (left <= right) {
    // find the midpoint of array between the pointers
    const mid = Math.floor((left + right) / 2);

    // any value in the ordered array should be
    // less than its next value
    // if not, it should be the inflection point (max)
    // and its next value should be the minimun

    // following the logic above,
    // if value at mid index is greater than its next value, it's the inflection point (max)
    // therefore, return the value at mid + 1 index
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }

    // else if the value to the left of mid is greater than the mid value, it's the inflection point
    // in that case, return the mid value as minimum
    if (nums[mid - 1] > nums[mid]) return nums[mid];

    // else if mid value is greater than value at left pointer,
    // inflection point is not between mid and left pointers
    // in that case, move left pointer to mid + 1 index
    // else, the inflection point is between the mid and left pointers
    // therefore, move right pointer to mid - 1 index
    nums[mid] > nums[left] ? (left = mid + 1) : (right = mid - 1);
    // resume the loop until the minimum value is returned
  }
}
