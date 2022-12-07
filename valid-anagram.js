// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Constraints
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters

// --- Examples
// s = "anagram", t = "nagaram" ==> true
// s = "rat", t = "car" ==> false

/**
 * @param {string} firstStr
 * @param {string} secondStr
 * @return {boolean}
 */
var isAnagram = function (firstStr, secondStr) {
  if (firstStr.length !== secondStr.length) return false;

  const charFrequency = {};
  // count the frequency of each character in the first string
  for (const char of firstStr) {
    charFrequency[char] = charFrequency[char] + 1 || 1;
  }

  for (const char of secondStr) {
    // if the current character doesn't exist in the first string or if it appears more frequently in the second string, return false
    if (!(char in charFrequency) || charFrequency[char] <= 0) return false;

    // decrement the character count
    charFrequency[char]--;
  }

  // if all characters match, return true
  return true;
};
