// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true

const canAttendMeetings = (intervals) => {
  // initialize two arrays to keep track of meeting start and end times separately
  const starts = [];
  const ends = [];

  // loop over the intervals and fill out start, end arrays
  for (let i = 0; i < intervals.length; i++) {
    starts.push(intervals[i][0]);
    ends.push(intervals[i][1]);
  }

  // sort the arrays
  starts.sort((a, b) => a - b);
  ends.sort((a, b) => a - b);

  // loop over the array
  for (let i = 0; i < intervals.length; i++) {
    // if the next meeting starts
    // before the current meeting finishes,
    // you can't attend the meeting,
    // therefore return false
    if (starts[i + 1] < ends[i]) return false;
  }

  // if no meeting overlaps, you can attend all meetings
  // therefore, return true
  return true;
};

// Time Complexity: O(nlogn)
// Space complexity: O(n)
