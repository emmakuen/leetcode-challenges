/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let popIndex = 0;
  let pushIndex = 0;

  for (const pushValue of pushed) {
    pushed[pushIndex] = pushValue;
    while (pushIndex >= 0 && pushed[pushIndex] === popped[popIndex]) {
      popIndex++;
      pushIndex--;
    }
    pushIndex++;
  }

  return pushIndex === 0;
};
