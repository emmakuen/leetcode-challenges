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

// Recursive
var longestPalindromeSubseq = function (s) {
  const maxLengthFor = {};

  return getMaxLengthFor(0, s.length - 1);

  function getMaxLengthFor(start, end) {
    const substring = `${start}-${end}`;
    if (substring in maxLengthFor) return maxLengthFor[substring];
    if (start > end) return 0;
    if (start === end) return 1;

    if (s[start] === s[end]) {
      maxLengthFor[substring] = getMaxLengthFor(start + 1, end - 1) + 2;
    } else {
      maxLengthFor[substring] = Math.max(
        getMaxLengthFor(start + 1, end),
        getMaxLengthFor(start, end - 1)
      );
    }
    return maxLengthFor[substring];
  }
};
