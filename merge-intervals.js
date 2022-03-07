// 56. Merge Intervals
// Given an array of intervals where
// intervals[i] = [starti, endi], merge all
// overlapping intervals, and return an array of the
// non-overlapping intervals that cover
// all the intervals in the input.

// --- Examples
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps,
// merge them into [1,6].

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered
// overlapping.

// --- Constraints
// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

const merge = (intervals) => {
  // if there's less than two intervals, there's no overlap
  // so, return intervals
  if (intervals.length <= 1) return intervals;

  // else, sort intervals by their starting values
  intervals.sort((a, b) => a[0] - b[0]);

  // initialize a new array to keep track of non-overlapping intervals
  const merged = [intervals[0]];

  for (let i = 0; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = merged[merged.length - 1];
    // if current interval's starting value is greater than
    // merged array's last interval's ending value
    // there's an overlap
    if (currentInterval[0] <= lastMergedInterval[1]) {
      // in that case,
      // if current interval's ending value is greater than
      // the merged array's last interval's ending value,
      // merge them by updating the last interval's ending value
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      );
    } else {
      // if there's no overlap,
      // push current interval to merged array
      merged.push(currentInterval);
    }
  }

  // return the merged intervals
  return merged;
};
