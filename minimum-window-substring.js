/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (s.length === 0) return "";

  const neededCharCount = {};
  const includedCharCount = {};
  let minLength = Infinity;

  for (const char of t) {
    if (char in neededCharCount) {
      neededCharCount[char]++;
    } else {
      neededCharCount[char] = 1;
    }
  }

  let included = 0;
  let needed = Object.keys(neededCharCount).length;
  let minWindow = [-1, -1];

  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (char in includedCharCount) {
      includedCharCount[char]++;
    } else {
      includedCharCount[char] = 1;
    }

    if (
      char in neededCharCount &&
      neededCharCount[char] === includedCharCount[char]
    ) {
      included++;

      while (included === needed) {
        // update result if necessary
        if (right - left + 1 < minLength) {
          minLength = right - left + 1;
          minWindow = [left, right];
        }

        const lChar = s[left];
        includedCharCount[lChar]--;
        if (
          lChar in neededCharCount &&
          includedCharCount[lChar] < neededCharCount[lChar]
        ) {
          included--;
        }

        left++;
      }
    }
  }

  return minLength === Infinity
    ? ""
    : s.substring(minWindow[0], minWindow[1] + 1);
};
