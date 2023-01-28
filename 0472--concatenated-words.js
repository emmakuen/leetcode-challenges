// Given an array of strings words (without duplicates),
// return all the concatenated words in the given list of words.

// A concatenated word is defined as a string that is comprised entirely of at least
// two shorter words in the given array.

// --- Examples
// Input: words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
// Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
// Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats";
// "dogcatsdog" can be concatenated by "dog", "cats" and "dog";
// "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
// Input: words = ["cat","dog","catdog"]
// Output: ["catdog"]

// --- Constraints
// 1 <= words.length <= 104
// 1 <= words[i].length <= 30
// words[i] consists of only lowercase English letters.
// All the strings of words are unique.
// 1 <= sum(words[i].length) <= 105

/**
 * @param {string[]} words
 * @return {string[]}
 */
const findAllConcatenatedWordsInADict = function (words) {
  const dictionary = new Set(words);
  const concatenatedWords = [];

  for (const word of words) {
    const dp = Array(word.length + 1).fill(false);
    dp[0] = true;

    for (let endIndex = 1; endIndex <= word.length; endIndex++) {
      for (
        let startIndex = 0;
        !dp[endIndex] && startIndex < endIndex;
        startIndex++
      ) {
        // to avoid comparing the word to itself, skip the iteration if start === 0 && end === word.length
        if (startIndex === 0 && endIndex === word.length) continue;

        dp[endIndex] =
          dp[startIndex] && dictionary.has(word.slice(startIndex, endIndex));
      }
    }

    if (dp[word.length]) concatenatedWords.push(word);
  }
  return concatenatedWords;
};

/**
 * @param {string[]} words
 * @return {string[]}
 */
const findAllConcatenatedWordsInADictDFS = (words) => {
  const dictionary = new Set(words);
  const concatenatedWords = [];

  for (const word of words) {
    if (isConcat(word)) concatenatedWords.push(word);
  }

  return concatenatedWords;

  function isConcat(word) {
    for (let i = 1; i < word.length; i++) {
      const prefix = word.slice(0, i);
      const suffix = word.slice(i);

      if (
        dictionary.has(prefix) &&
        (dictionary.has(suffix) || isConcat(suffix))
      )
        return true;
    }

    return false;
  }
};
