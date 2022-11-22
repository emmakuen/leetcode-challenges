// 91. Decode Ways

/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
  const countFor = {
    [s.length]: 1,
  };

  function dfs(index) {
    // if the count for the current index is already cached or it's the last index, return the count
    if (index in countFor) return countFor[index];
    // if code at the current index is zero, return zero as the leading zeroes are not allowed
    if (s[index] === "0") return 0;

    // else, find the count of possible decodings for the substring starting from the next index
    let count = dfs(index + 1);
    // if there's a next code, and if two digits created from the current and next code can be decoded (valid two digit would be between 10 to 26)
    // get the count of possible decodings for the substring starting from index + 2 and add it to the current count
    if (index + 1 < s.length) {
      const doubleDigits = parseInt(s.slice(index, index + 2));
      if (doubleDigits <= 26) {
        count += dfs(index + 2);
      }
    }

    // memoize the count
    countFor[index] = count;

    // and return it
    return count;
  }

  return dfs(0);
};
