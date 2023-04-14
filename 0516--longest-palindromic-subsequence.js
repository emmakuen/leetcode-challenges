// https://leetcode.com/problems/longest-palindromic-subsequence/

// Iterative
var longestPalindromeSubseq = function (s) {
  const dp = Array.from(Array(s.length), () => Array(s.length).fill(0));

  for (let start = s.length - 1; start >= 0; start--) {
    dp[start][start] = 1;
    for (let end = start + 1; end < s.length; end++) {
      if (s.charAt(start) === s.charAt(end)) {
        dp[start][end] = 2 + dp[start + 1][end - 1];
      } else {
        dp[start][end] = Math.max(dp[start + 1][end], dp[start][end - 1]);
      }
    }
  }

  return dp[0][s.length - 1];
};
