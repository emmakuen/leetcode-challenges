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
  if (typeof s !== "string") return "";
  if (s.length < 1 || s.length > 1000) return "";
  if (s.length === 1) return s;

  let maxLength = 1;
  let startIndex = 0;

  const expandAroundMiddle = (left, right) => {
    // while letters at index left && right mirror each other
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      // if substring is longer than maxLength, make it the new maxLength
      const substringLength = right - left + 1;
      if (substringLength > maxLength) {
        maxLength = substringLength;
        startIndex = left;
      }
      // expand the substring to left and right
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    // expand for string of odd length
    expandAroundMiddle(i - 1, i + 1);
    // expand for string of even length
    expandAroundMiddle(i, i + 1);
  }

  // return the substring
  return s.slice(startIndex, startIndex + maxLength);
}
