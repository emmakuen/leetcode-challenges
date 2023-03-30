const hasSameChars = (word1, word2) => {
  if (word1.length !== word2.length) return false;

  const charCount = {};

  for (let i = 0; i < word1.length; i++) {
    const char1 = word1[i];
    const char2 = word2[i];
    charCount[char1] = char1 in charCount ? charCount[char1] + 1 : 1;
    charCount[char2] = char2 in charCount ? charCount[char2] - 1 : -1;
  }

  for (const char in charCount) {
    if (charCount[char] !== 0) return false;
  }

  return true;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2, memo = {}) {
  const key = `${s1}-${s2}`;
  if (key in memo) return memo[key];
  if (s1 === s2) return true;
  if (!hasSameChars(s1, s2)) {
    memo[key] = false;
    return false;
  }

  const length = s1.length;

  for (let i = 1; i < length; i++) {
    if (
      (isScramble(s1.slice(0, i), s2.slice(0, i), memo) &&
        isScramble(s1.slice(i), s2.slice(i), memo)) ||
      (isScramble(s1.slice(0, i), s2.slice(length - i), memo) &&
        isScramble(s1.slice(i), s2.slice(0, length - i), memo))
    ) {
      memo[key] = true;
      return true;
    }
  }

  memo[key] = false;
  return false;
};
