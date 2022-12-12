// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// --- Examples
// Input: s = "()"
// Output: true

// Input: s = "(]"
// Output: false

// --- Constraints
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'

/**
 * @param {string} brackets
 * @return {boolean}
 */
var isValid = function (brackets) {
  const closingBracketFor = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  // create a stack to keep track of opening brackets and pop them to check if they're closed in the correct order
  const openingBrackets = [];

  for (const bracket of brackets) {
    // if the current bracket is an opening bracket, push it to the stack
    if (bracket in closingBracketFor) {
      openingBrackets.push(bracket);
      // else if, the current bracket is not the closing bracket for the most recent opening bracket,
      // it's not closed in the correct order,
      // so return false
    } else if (closingBracketFor[openingBrackets.pop()] !== bracket) {
      return false;
    }

    // else, the bracket is closed in the correct order, so continue the loop
  }

  // if all opening brackets are popped off the stack and closed in the correct order, return true
  // if there are still some opening brackets remaining, return false
  return openingBrackets.length === 0;
};
