// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.
// You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// --- Examples
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// --- Constraints:
// 0 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 105
// intervals is sorted by starti in ascending order.
// newInterval.length == 2
// 0 <= start <= end <= 105

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function (intervals, newInterval) {
  const mergedIntervals = [];
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];

    if (interval[0] > newInterval[1]) {
      // if the new interval ends before the next interval starts, it wouldn't overlap with the current interval and any of the remaining intervals
      // so, add the new interval and the remaining intervals to the merged intervals array and return it
      mergedIntervals.push(newInterval);
      return mergedIntervals.concat(intervals.slice(i));
    } else if (interval[1] < newInterval[0]) {
      // if the current interval ends before the new interval starts, they don't overlap and the current interval comes before the new interval
      // so, add the current interval to the merged intervals array
      mergedIntervals.push(interval);
    } else {
      // else, the current interval overlaps with the new interval
      // so, update the new interval by merging it with the current interval
      newInterval = [
        Math.min(interval[0], newInterval[0]),
        Math.max(interval[1], newInterval[1]),
      ];
    }
  }

  // if we haven't returned the merged intervals, it means we haven't added our newInterval to it yet
  // so, add the new interval and return the merged intervals
  mergedIntervals.push(newInterval);
  return mergedIntervals;
};
