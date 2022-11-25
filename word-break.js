// 139. Word Break

/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
const wordBreak = function (s, words) {
  // create an array to store the segmentability for substring starting from each index
  // initially, mark substring starting from each index as nonsegmentable
  const segmentabilityFor = Array(s.length + 1).fill(false);
  // if we reach the end of the string, the whole string is segmentable
  segmentabilityFor[s.length] = true;

  // iterate from the end of the string
  for (let i = s.length - 1; i >= 0; i--) {
    const substringLength = s.length - i;

    for (const word of words) {
      // if the substring contains the word
      if (
        substringLength >= word.length &&
        s.slice(i, i + word.length) === word
      ) {
        // the substring starting from the current index is segmentable if the remaining substring starting from i + word.length is segmentable
        segmentabilityFor[i] = segmentabilityFor[i + word.length];
      }

      // if the current substring is segmentable, we don't have to check the rest of the words
      // so, break the inner loop
      if (segmentabilityFor[i]) break;
    }
  }

  // when the loop starting from the end of the string finishes, if the substring starting from the first index is marked as segmentable
  // it means the whole string is segmentable
  // therefore, return the value stored in the first index
  return segmentabilityFor[0];
};

// n - string length; m - words array length
// Space: O(n)
// Time: O(n2 * m)
