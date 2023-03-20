/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const conversion = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  if (s.length === 1) return conversion[s[0]];

  let integer = 0;

  for (let i = 1; i < s.length; i++) {
    if (conversion[s[i]] > conversion[s[i - 1]]) {
      integer -= conversion[s[i - 1]];
    } else {
      integer += conversion[s[i - 1]];
    }

    if (i === s.length - 1) integer += conversion[s[i]];
  }

  return integer;
};
