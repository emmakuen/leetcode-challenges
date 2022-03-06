// 435. Non-overlapping Intervals

// Given an array of intervals intervals where
// intervals[i] = [starti, endi], return
// the minimum number of intervals you need to remove
// to make the rest of the intervals non-overlapping.

// --- Examples
// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed
// and the rest of the intervals are non-overlapping.

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2]
// to make the rest of the intervals non-overlapping.

// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of
// the intervals since they're already non-overlapping.

// --- Constraints
// 1 <= intervals.length <= 105
// intervals[i].length == 2
// -5 * 104 <= starti < endi <= 5 * 104

const eraseOverlapIntervals = (intervals) => {
  // if there's less than two intervals,
  // there would be no overlap. So, return 0.
  if (intervals.length <= 1) return 0;

  // sort intervals by starting value of each interval
  intervals.sort((a, b) => a[0] - b[0]);

  // initialize a variable to keep track of
  // removed interval count
  let removedCount = 0;
  // initialize an end variable to check overlaps
  let end = intervals[0][1];

  // loop over the intervals
  for (let i = 1; i < intervals.length; i++) {
    // if the starting value of current interval is
    // less than the end value, there's an overlap
    if (intervals[i][0] < end) {
      // therefore, increase the count of removed intervals
      removedCount++;

      // to return minimum number of intervals to remove,
      // compare current interval's end to previous end
      // and keep whichever value is lower
      end = Math.min(intervals[i][1], end);
    } else {
      // if there's no overlap,
      // assign current interval's end value to end variable
      end = intervals[i][1];
    }
  }

  // return the number of intervals removed
  // to prevent overlaps
  return removedCount;
};
