/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = function (num) {
  let stepCount = 0;

  while (num > 0) {
    stepCount += num & 1 ? 2 : 1;
    num >>= 1;
  }

  return stepCount ? stepCount - 1 : stepCount;
};
