// A binary string is monotone increasing if it consists of some number of 0's (possibly none), followed by some number of 1's (also possibly none).
// You are given a binary string s. You can flip s[i] changing it from 0 to 1 or from 1 to 0.
// Return the minimum number of flips to make s monotone increasing.

/**
 * @param {string} s
 * @return {number}
 */
const minFlipsMonoIncr = function (s) {
  let minFlips = 0;
  let ones = 0;

  for (const num of s) {
    if (num === "0") {
      // if current number is zero, there might have been ones appeared before this
      // to ensure the string is monotone increasing, we have two choices
      // 1. flip all the ones appeared before this zero
      // 2. flip current zero to one and flip previous numbers minimum times to produce monotone increasing string
      // we choose whichever choice that produces minimum number of flips
      minFlips = Math.min(minFlips + 1, ones);
    } else {
      // if current number is one, it's already monotone increasing string
      // so increment the count of ones and move on to the next iteration
      ones++;
    }
  }

  return minFlips;
};
