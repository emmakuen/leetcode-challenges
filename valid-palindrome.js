// 125. Valid Palindrome

// Palindrome: a phrase which reads the same forward and backward after
// converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters.

// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

function isPalindrome(s) {
  if (typeof s !== "string") return false;
  if (s.length <= 1) return true;

  // Sanitize input to convert it lowercase and remove non-alphanumerics
  s = s.toLocaleLowerCase().replace(/[\W_]/g, "");

  // Initialize pointers
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // if the left does not mirror the right, return false
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  // if all letters mirror each other, return true
  return true;
}

//// ============= NAIVE APPROACH =============== //
//// split to create an array of letters, reverse that array and join it into a string
//// compare it to the initial string and return true if they're equal
//      const reverseString = s.split("").reverse().join("");
//      return s === reverseString;
