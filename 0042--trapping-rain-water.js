/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxLeft = height[left];
  let maxRight = height[right];
  let trappedAmount = 0;

  while (left < right) {
    if (maxLeft <= maxRight) {
      left++;
      maxLeft = Math.max(maxLeft, height[left]);
      trappedAmount += maxLeft - height[left];
    } else {
      right--;
      maxRight = Math.max(maxRight, height[right]);
      trappedAmount += maxRight - height[right];
    }
  }

  return trappedAmount;
};
