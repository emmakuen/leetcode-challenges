// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
// ---- Examples
// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

// Constraints:

// 0 <= n <= 105

/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {
  const counts = Array(n + 1).fill(0);
  let offset = 1;

  for (let i = 1; i < counts.length; i++) {
    if (offset * 2 === i) {
      offset = i;
    }

    counts[i] = 1 + counts[i - offset];
  }

  return counts;
};
