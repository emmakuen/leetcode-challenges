// There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.
// You are given a list of strings words from the alien language's dictionary where the strings in words are sorted lexicographically by the rules of this new language.

// Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "".
// If there are multiple solutions, return any of them.

// A string s is lexicographically smaller than a string t if at the first letter where they differ, the letter in s comes before the letter in t in the alien language.
// If the first min(s.length, t.length) letters are the same, then s is smaller if and only if s.length < t.length.

// --- Examples
// Input: words = ["wrt", "wrf", "er", "ett", "rftt"]
// Output: "wertf"

/**
 *
 * @param {string[]} words
 * @returns {string}
 */
function alienOrder(words) {
  const neighborCharsOf = {};
  for (const word of words) {
    for (const char of word) {
      if (!(char in neighborCharsOf)) {
        neighborCharsOf[char] = new Set();
      }
    }
  }

  for (let wordIndex = 0; wordIndex < words.length - 1; wordIndex++) {
    const word1 = words[wordIndex];
    const word2 = words[wordIndex + 1];
    const substringLength = Math.min(word1.length, word2.length);
    const haveSameSubstring =
      word1.substring(0, substringLength) ===
      word2.substring(0, substringLength);

    if (haveSameSubstring && word1.length > word2.length) return "";

    if (!haveSameSubstring) {
      for (let charIndex = 0; charIndex < substringLength; charIndex++) {
        const char1 = word1[charIndex];
        const char2 = word2[charIndex];

        if (char1 !== char2) {
          neighborCharsOf[char1].add(char2);
          break;
        }
      }
    }
  }

  const visitedChars = {};
  const reverseOrderedChars = [];

  function dfs(char) {
    if (char in visitedChars) {
      return visitedChars[char];
    }

    // mark the current character true to indicate it's been visited and it's in the current path
    visitedChars[char] = true;
    for (const neighborChars of neighborCharsOf[char]) {
      if (dfs(neighborChars)) return true;
    }

    // mark it false after the loop to mark it's no longer in the current path
    visitedChars[char] = false;

    reverseOrderedChars.push(char);
  }

  for (const char of Object.keys(neighborCharsOf)) {
    if (dfs(char)) return "";
  }

  // reverse the array to produce the correct order and join them into a string before returning it
  return reverseOrderedChars.reverse().join("");
}

console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]));
