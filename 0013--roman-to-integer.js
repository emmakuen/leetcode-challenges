/**
 * @param {string} roman
 * @return {number}
 */
var romanToInt = function (roman) {
  const intForRoman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  if (roman.length === 1) return intForRoman[roman[0]];

  let integer = 0;

  for (let i = 1; i < roman.length; i++) {
    if (intForRoman[roman[i]] > intForRoman[roman[i - 1]]) {
      integer -= intForRoman[roman[i - 1]];
    } else {
      integer += intForRoman[roman[i - 1]];
    }

    if (i === roman.length - 1) integer += intForRoman[roman[i]];
  }

  return integer;
};
