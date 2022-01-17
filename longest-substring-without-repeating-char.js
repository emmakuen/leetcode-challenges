// 3. Longest Substring Without Repeating Characters

// Given a string, return the length of the longest substring without repeating characters.

// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

// --- Constraints
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstring(s) {
  if (typeof s !== "string") return undefined;
  if (s.length <= 1) return s.length;

  let charsMap = {}; // map substring letters & their indices in the string

  let startIndex = 0; // start of substring
  let maxLength = 0; // length of longest substring

  for (let endIndex = 0; endIndex < s.length; endIndex++) {
    let endChar = s[endIndex];

    // if there's a duplicate value in substring, exclude it
    if (charsMap[endChar] >= startIndex) {
      startIndex = charsMap[endChar] + 1;
    }
    // set or update index of end character
    charsMap[endChar] = endIndex;

    // if current substring length is greater, update max length
    maxLength = Math.max(maxLength, endIndex - startIndex + 1);
  }

  return maxLength;
}
