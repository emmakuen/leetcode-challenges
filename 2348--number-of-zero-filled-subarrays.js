/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  // Initialize variables for counting zero-filled subarrays
  let count = 0; // Total count of zero-filled subarrays
  let subcount = 0; // Length of the current subarray of contiguous 0s

  // Iterate over each element in the input array
  for (const num of nums) {
    // If the current element is not zero,
    // the current subarray of contiguous 0s has ended
    if (num !== 0) {
      // So, reset the length of the current subarray of contiguous 0s
      // and move on to the next element in the input array
      subcount = 0;
      continue;
    }

    // If the current element is zero,
    // increment the length of the current subarray of contiguous 0s
    subcount++;

    // And add the length of the current subarray of contiguous 0s
    // to the total count of zero-filled subarrays
    count += subcount;
  }

  // Return the total count of zero-filled subarrays in the input array
  return count;
};
