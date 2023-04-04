/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  let appeared = new Set();
  let wordCount = 0;

  for (const char of s) {
    if (appeared.has(char)) {
      wordCount++;
      appeared.clear();
    }

    appeared.add(char);
  }

  if (appeared.size > 0) {
    wordCount++;
  }

  return wordCount;
};
