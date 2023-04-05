/**
 * @param {number[]} nums
 * @return {number}
 */
const minimizeArrayValue = (nums) => {
  let max = 0;
  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    max = Math.max(max, Math.ceil(prefixSum / (i + 1)));
  }

  return max;
};
