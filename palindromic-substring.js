// 647. Palindromic Substrings

/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
  if (s.length < 2) return s.length;

  let count = s.length;

  function expandPalindrome(startIndex, endIndex) {
    if (startIndex < 0 || endIndex >= s.length || s[startIndex] !== s[endIndex])
      return;

    count++;

    expandPalindrome(startIndex - 1, endIndex + 1);
  }

  for (let i = 0; i < s.length; i++) {
    expandPalindrome(i - 1, i + 1);
    expandPalindrome(i, i + 1);
  }

  return count;
};
