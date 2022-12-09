// 125. Valid Palindrome

// Palindrome: a phrase which reads the same forward and backward after
// converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters.

// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // if the character at the left pointer is non-alphanum, move up the pointer
    if (!isAlphaNum(s, left)) {
      left++;
      continue;
    }

    // else if, the character at the right pointer is non-alphanum, move down the pointer
    if (!isAlphaNum(s, right)) {
      right--;
      continue;
    }

    // else if, left and right characters don't match when converted to lowercase, return false
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    // if characters match, move up the left pointer and move down the right pointer for the next comparison
    left++;
    right--;
  }

  // if the loop finishes without returning false, the string is palindrome
  return true;
};

function isAlphaNum(str, index) {
  const charcode = str.charCodeAt(index);
  const isNumber = charcode >= 48 && charcode <= 57;
  const isUpperLetter = charcode >= 65 && charcode <= 90;
  const isLowerLetter = charcode >= 97 && charcode <= 122;

  return isUpperLetter || isLowerLetter || isNumber;
}
