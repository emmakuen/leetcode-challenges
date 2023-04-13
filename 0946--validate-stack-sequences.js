// Stack solution
var validateStackSequences = function (pushed, popped) {
  let popIndex = 0;
  const stack = [];

  for (const pushValue of pushed) {
    stack.push(pushValue);

    while (stack.length > 0 && stack[stack.length - 1] === popped[popIndex]) {
      stack.pop();
      popIndex++;
    }
  }

  return stack.length === 0;
};

// O(1) Space Solution
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
