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

const isValid = (s) => {
  // if there are odd number of brackets, return false
  if (s.length % 2 === 1) return false;

  // create map of opening & closing bracket pairs. Opening brackets are keys & closing ones are values.
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  // initialize a stack to keep track of opening brackets & pop if they're closed in the correct order
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    // if current char is an opening bracket, add it to the stack
    if (char in pairs) {
      stack.push(char);

      // else if current char is not the closing bracket of the last char on the stack,
      // it's not correctly closed. Therefore, return false.
    } else if (pairs[stack.pop()] !== char) {
      return false;
    }
  }

  // if the stack is empty, all brackets are correctly closed ==> return true. Else, return false.
  return stack.length === 0;
};
