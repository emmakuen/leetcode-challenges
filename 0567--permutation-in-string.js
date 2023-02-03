// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.

// --- Examples
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// --- Constraints
// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

const CHARCODE_A = 97;

const checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const charFrequency = Array(26).fill(0);
  const charFrequency2 = Array(26).fill(0);
  let matchCount = 0;

  for (let i = 0; i < s1.length; i++) {
    charFrequency[s1.charCodeAt(i) - CHARCODE_A]++;
    charFrequency2[s2.charCodeAt(i) - CHARCODE_A]++;
  }

  for (let i = 0; i < charFrequency.length; i++) {
    if (charFrequency[i] === charFrequency2[i]) {
      matchCount++;
    }
  }

  for (let i = s1.length; i < s2.length; i++) {
    if (matchCount === 26) return true;

    const addedCharIndex = s2.charCodeAt(i) - CHARCODE_A;
    charFrequency2[addedCharIndex]++;

    if (charFrequency2[addedCharIndex] === charFrequency[addedCharIndex]) {
      matchCount++;
    }

    if (charFrequency2[addedCharIndex] === charFrequency[addedCharIndex] + 1) {
      matchCount--;
    }

    if (i >= s1.length) {
      const removedCharIndex = s2.charCodeAt(i - s1.length) - CHARCODE_A;
      charFrequency2[removedCharIndex]--;

      if (
        charFrequency[removedCharIndex] === charFrequency2[removedCharIndex]
      ) {
        matchCount++;
      }

      if (
        charFrequency2[removedCharIndex] ===
        charFrequency[removedCharIndex] - 1
      ) {
        matchCount--;
      }
    }
  }

  return matchCount === 26;
};
