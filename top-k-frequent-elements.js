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

const topKFrequent = function (nums, k) {
  const frequencyMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num in frequencyMap) {
      frequencyMap[num]++;
    } else {
      frequencyMap[num] = 1;
    }
  }

  const mostFrequentElements = Object.keys(frequencyMap).sort(
    (a, b) => frequencyMap[b] - frequencyMap[a]
  );

  return mostFrequentElements.slice(0, k);
};
