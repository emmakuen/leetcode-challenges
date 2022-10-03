// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// ---Examples
// Input: a = 1, b = 2
// Output: 3
// Input: a = 2, b = 3
// Output: 5

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = function (a, b) {
  while (b) {
    const temp = (a & b) << 1;
    a = a ^ b;
    b = temp;
  }

  return a;
};
