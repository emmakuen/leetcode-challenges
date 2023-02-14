/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let shortStr = a.length > b.length ? b : a;
  let longStr = a.length > b.length ? a : b;

  // add zeroes to the shorter string to make its length equal to the longer one
  for (let i = shortStr.length; i < longStr.length; i++) {
    shortStr = "0" + shortStr;
  }

  let sum = "";
  let carry = 0;

  // iterate from the last digit to calculate the sum and carry
  for (let i = longStr.length - 1; i >= 0; i--) {
    const shortNum = parseInt(shortStr[i]);
    const longNum = parseInt(longStr[i]);
    const currentSum = shortNum + longNum + carry;

    sum = (currentSum % 2) + sum;
    carry = Math.floor(currentSum / 2);
  }

  return carry ? carry + sum : sum;
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary1 = (a, b) => (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
