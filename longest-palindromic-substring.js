// 5. Longest Palindrome

//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("babad") --> "bab"
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("a") --> "a"

// --- CONSTRAINTS
// 1 <= s.length <= 1000
// s consist of only digits and English letters.

function longestPalindrome(s) {
  if (s.length < 2) return s;

  let maxLength = 1;
  let startIndex = 0;

  function expand(leftIndex, rightIndex) {
    if (
      leftIndex < 0 ||
      rightIndex >= s.length ||
      s[leftIndex] !== s[rightIndex]
    )
      return;

    const substringLength = rightIndex - leftIndex + 1;
    if (maxLength < substringLength) {
      maxLength = substringLength;
      startIndex = leftIndex;
    }
    expand(leftIndex - 1, rightIndex + 1);
  }

  for (let i = 0; i < s.length; i++) {
    expand(i - 1, i + 1);
    expand(i, i + 1);
  }

  return s.slice(startIndex, startIndex + maxLength);
}
