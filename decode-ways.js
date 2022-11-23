// 91. Decode Ways

/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
  const decodingCountFor = Array(s.length + 1).fill(Infinity);
  // if the end of string is reachable, consider there's one way to decode the string
  decodingCountFor[s.length] = 1;

  function findDecodingCountFor(index) {
    // if we already know the number of decodings for the current index (if it's cached), return that count
    if (decodingCountFor[index] !== Infinity) return decodingCountFor[index];

    // if the character at current index is zero, return zero as the leading zeroes are not allowed in the encoding
    if (s[index] === "0") return 0;

    // else, find the count of possible decodings for the substring starting from the next index
    let decodingCount = findDecodingCountFor(index + 1);

    // if we haven't reached the end of the string, and if current character can create a valid (10~26) double digit code when combined with the next character, this would be another decoding variation
    // if so, get the count of possible decodings for the substring starting from index + 2 and add it to the current count
    if (index + 1 < s.length) {
      const doubleDigitCode = parseInt(s.slice(index, index + 2));
      if (doubleDigitCode <= 26 && doubleDigitCode >= 10) {
        decodingCount += findDecodingCountFor(index + 2);
      }
    }

    // memoize the count
    decodingCountFor[index] = decodingCount;

    // and return it
    return decodingCount;
  }

  return findDecodingCountFor(0);
};

console.log(numDecodings("121"));
