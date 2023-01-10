// 11. Container With Most Water
// You are given an integer array height of length n. There are n vertical lines drawn
// such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container,
// such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// ------ Examples
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Input: height = [1,1]
// Output: 1

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);

    height[left] > height[right] ? right-- : left++;
  }

  return max;
};
