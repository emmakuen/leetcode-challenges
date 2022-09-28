// 3. Longest Substring Without Repeating Characters

// Given a string, return the length of the longest substring without repeating characters.

// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

// --- Constraints
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstring(s) {
  if (s.length < 2) return s.length;
  let seen = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // if the current character is repeated, slide the window from left until there's no repeating character
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }

    // add the new character and update max
    seen.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
