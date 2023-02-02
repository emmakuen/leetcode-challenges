// In an alien language, surprisingly, they also use English lowercase letters,
// but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet,
// return true if and only if the given words are sorted lexicographically in this alien language.

// --- Examples
// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1],
// hence the sequence is unsorted.
// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.)
// According to lexicographical rules "apple" > "app", because 'l' > '∅',
// where '∅' is defined as the blank character which is less than any other character.

// --- Constraints
// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// order.length == 26
// All characters in words[i] and order are English lowercase letters.

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const orderOf = {};

  for (let i = 0; i < order.length; i++) {
    orderOf[order[i]] = i;
  }

  for (let i = 1; i < words.length; i++) {
    const leftWord = words[i - 1];
    const rightWord = words[i];
    let isOrdered = false;

    for (
      let charIndex = 0;
      charIndex < Math.min(leftWord.length, rightWord.length);
      charIndex++
    ) {
      const leftCharOrder = orderOf[leftWord[charIndex]];
      const rightCharOrder = orderOf[rightWord[charIndex]];
      // if the left character appears before the right character,
      // they're ordered correctly
      if (leftCharOrder < rightCharOrder) {
        isOrdered = true;
        break;
      }

      if (leftCharOrder > rightCharOrder) return false;
    }

    // if all chars match, but the first word is shorter, they're ordered incorrectly
    // therefore, return false
    if (!isOrdered && leftWord.length > rightWord.length) return false;
  }

  return true;
};
