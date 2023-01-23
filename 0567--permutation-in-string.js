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

function matches(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusionArr = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const s1Chars = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Chars[s1.charCodeAt(i) - CHARCODE_A]++;
  }

  for (let i = 0; i <= s2.length - s1.length; i++) {
    const s2Chars = Array(26).fill(0);
    for (let j = i; j < i + s1.length; j++) {
      s2Chars[s2.charCodeAt(j) - CHARCODE_A]++;
    }

    if (matches(s1Chars, s2Chars)) return true;
  }

  return false;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusionSlidingWindow = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const s1Chars = Array(26).fill(0);
  const s2Chars = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Chars[s1.charCodeAt(i) - CHARCODE_A]++;
    s2Chars[s2.charCodeAt(i) - CHARCODE_A]++;
  }

  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    if (matches(s1Chars, s2Chars)) return true;

    s2Chars[s2.charCodeAt(i) - CHARCODE_A]--;
    s2Chars[s2.charCodeAt(s1.length + i) - CHARCODE_A]++;
  }

  return false;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
  // if the second string is shorter than the first string, it can't contain the permutation of the first string
  // so, return false
  if (s1.length > s2.length) return false;

  // each word contains lowercase english letters; we can count their frequency using an array with the length of 26
  const s1Chars = Array(26).fill(0);
  const s2Chars = Array(26).fill(0);
  let matchedCharsCount = 0;

  // count all the characters of the first string
  // and count the same number of characters of the second string
  for (let i = 0; i < s1.length; i++) {
    s1Chars[s1.charCodeAt(i) - CHARCODE_A]++;
    s2Chars[s2.charCodeAt(i) - CHARCODE_A]++;
  }

  // iterate over each character count of the first string
  for (let i = 0; i < s1Chars.length; i++) {
    // if the character appears the same number of times in the second string,
    // increment the matched chars count
    if (s1Chars[i] === s2Chars[i]) {
      matchedCharsCount++;
    }
  }

  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    // if all the characters appear the same number of times,
    // it means the second string contains the permutation of the first string
    // so, return true
    if (matchedCharsCount === 26) return true;

    // else, remove the preceding character and add the succeeding character from the second string to create a new substring
    let charRemoved = s2.charCodeAt(i) - CHARCODE_A;
    let charAdded = s2.charCodeAt(i + s1.length) - CHARCODE_A;

    // increment the count of the added character
    // if this character appears the same number of times in the first string,
    // increment the matched characters count
    s2Chars[charAdded]++;
    if (s2Chars[charAdded] === s1Chars[charAdded]) {
      matchedCharsCount++;
      // if this character's count previously matched that of the first string,
      // decrement the matched characters count
    } else if (s2Chars[charAdded] === s1Chars[charAdded] + 1) {
      matchedCharsCount--;
    }

    // do the same for the removed character
    s2Chars[charRemoved]--;
    if (s2Chars[charRemoved] === s1Chars[charRemoved]) {
      matchedCharsCount++;
    } else if (s2Chars[charRemoved] === s1Chars[charRemoved] - 1) {
      matchedCharsCount--;
    }
  }

  // if all the characters match, return true
  // else, return false
  return matchedCharsCount === 26;
};
