// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

// Examples
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Input: nums = [1], k = 1
// Output: [1]

// ---Constraints
// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const frequencyFor = {};

  for (const num of nums) {
    frequencyFor[num] = frequencyFor[num] + 1 || 1;
  }

  const frequencyBuckets = Array(nums.length);

  for (const [num, frequency] of Object.entries(frequencyFor)) {
    const parsedNum = parseInt(num);
    if (frequency in frequencyBuckets) {
      frequencyBuckets[frequency].push(parsedNum);
    } else {
      frequencyBuckets[frequency] = [parsedNum];
    }
  }

  const topFrequentNums = [];
  for (
    let i = frequencyBuckets.length - 1;
    i >= 0 && topFrequentNums.length < k;
    i--
  ) {
    if (frequencyBuckets[i]) {
      topFrequentNums.push(...frequencyBuckets[i]);
    }
  }

  return topFrequentNums;
};
