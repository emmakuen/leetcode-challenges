// https://leetcode.com/problems/kth-missing-positive-number/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let num = 1;
  let index = 0;
  while (k > 0) {
    arr[index] === num ? index++ : k--;
    num++;
  }
  return num - 1;
};
