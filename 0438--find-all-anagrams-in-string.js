// Given two strings s and p, return an array of
// all the start indices of p's anagrams in s.
// You may return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, typically using all the original letters
// exactly once.

// --- Examples
// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// --- Constraints
// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.

const OFFSET = 97; // charcode of lowercase a
const CHAR_COUNT = 26;
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  const startIndices = [];

  if (p.length > s.length) return startIndices;

  const pCharFrequency = Array(CHAR_COUNT).fill(0);
  const sCharFrequency = Array(CHAR_COUNT).fill(0);
  let matchCount = 0;

  for (let i = 0; i < p.length; i++) {
    pCharFrequency[p.charCodeAt(i) - OFFSET]++;
    sCharFrequency[s.charCodeAt(i) - OFFSET]++;
  }

  for (let i = 0; i < CHAR_COUNT; i++) {
    if (pCharFrequency[i] === sCharFrequency[i]) {
      matchCount++;
    }
  }

  for (let i = p.length; i < s.length; i++) {
    if (matchCount === CHAR_COUNT) {
      startIndices.push(i - p.length);
    }

    const addedCharIndex = s.charCodeAt(i) - OFFSET;
    sCharFrequency[addedCharIndex]++;

    if (pCharFrequency[addedCharIndex] === sCharFrequency[addedCharIndex]) {
      matchCount++;
    }

    if (pCharFrequency[addedCharIndex] + 1 === sCharFrequency[addedCharIndex]) {
      matchCount--;
    }

    const removedCharIndex = s.charCodeAt(i - p.length) - OFFSET;
    sCharFrequency[removedCharIndex]--;

    if (pCharFrequency[removedCharIndex] === sCharFrequency[removedCharIndex]) {
      matchCount++;
    }

    if (
      pCharFrequency[removedCharIndex] - 1 ===
      sCharFrequency[removedCharIndex]
    ) {
      matchCount--;
    }
  }

  if (matchCount === CHAR_COUNT) {
    startIndices.push(s.length - p.length);
  }

  return startIndices;
};
