const getDigit = (num, digit) => Math.floor(num / Math.pow(10, digit)) % 10;

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) return false;

  const length = Math.floor(Math.log10(x)) + 1;

  let left = length - 1;
  let right = 0;

  while (left >= right) {
    const leftDigit = getDigit(x, left);
    const rightDigit = getDigit(x, right);

    if (leftDigit !== rightDigit) return false;

    left--;
    right++;
  }

  return true;
};
