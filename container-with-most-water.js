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

function maxArea(height) {
  let maxArea = 0;
  // initialize right, left pointers to keep track of the gap between them for area calculation
  let rightPointer = height.length - 1;
  let leftPointer = 0;

  // while there's gap (if there's no gap, they can't contain water)
  while (rightPointer - leftPointer > 0) {
    // find the minimum of two heights, because water can be held to that point
    // multiply it with the gap size
    const currentArea =
      Math.min(height[leftPointer], height[rightPointer]) *
      (rightPointer - leftPointer);

    // replace max area if current area is bigger
    maxArea = Math.max(currentArea, maxArea);

    // to find the max area, bigger value should be kept
    // if value of left pointer is bigger, decrement right pointer
    // if value of right pointer is bigger, increment left pointer
    height[leftPointer] > height[rightPointer] ? rightPointer-- : leftPointer++;
  }

  // return the max area
  return maxArea;
}
