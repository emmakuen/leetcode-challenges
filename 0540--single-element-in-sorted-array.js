/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    const isEvenlyDivided = !(mid % 2);
    if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
      return nums[mid];
    }

    (isEvenlyDivided && nums[mid] === nums[mid - 1]) ||
    (!isEvenlyDivided && nums[mid] === nums[mid + 1])
      ? (end = mid - 1)
      : (start = mid + 1);
  }

  return nums[start];
};
