/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const chars = [];

  for (const char of s) char === "*" ? chars.pop() : chars.push(char);

  return chars.join("");
};
