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

// O(n) solution with bucket sort

const topKFrequent = (nums, k) => {
  const counts = new Array(nums.length);
  const countMap = {};
  const topKFrequentNums = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num in countMap) {
      countMap[num]++;
    } else {
      countMap[num] = 1;
    }
  }

  Object.keys(countMap).map((num) => {
    const count = countMap[num];
    const parsedNum = parseInt(num);
    if (counts[count] instanceof Array) {
      counts[count].push(parsedNum);
    } else {
      counts[count] = [parsedNum];
    }

    return;
  });

  let i = counts.length - 1;

  while (i >= 0 && topKFrequentNums.length < k) {
    const nums = counts[i];

    if (nums && nums.length > 0) {
      topKFrequentNums.push(...nums);
    }

    i--;
  }

  return topKFrequentNums;
};
