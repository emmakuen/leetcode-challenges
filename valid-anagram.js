// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Constraints
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters

// --- Examples
// s = "anagram", t = "nagaram" ==> true
// s = "rat", t = "car" ==> false

function isAnagram(s, t) {
  if (s.length !== t.length) return false; // if lengths don't match, they're not anagrams
  if (s === t) return true; // if they're the same strings, they're anagrams

  const charMap = {};

  // map all characters of s string
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    charMap[currentChar] = charMap[currentChar] + 1 || 1; // count all the occurances of the char
  }

  // check the same number of each character of t string exists in s string
  for (let i = 0; i < t.length; i++) {
    const currentChar = t[i];
    // if current character is not in the s string, they're not anagrams
    if (!charMap[currentChar] || charMap[currentChar] < 0) return false;
    charMap[currentChar]--;
  }

  return true;
}
