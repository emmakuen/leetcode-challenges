// Description
// Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

// Please implement encode and decode

// ------ Examples
// Input: ["lint","code","love","you"]
// Output: ["lint","code","love","you"]
// Explanation:
// One possible encode method is: "lint:;code:;love:;you"
// Input: ["we", "say", ":", "yes"]
// Output: ["we", "say", ":", "yes"]
// Explanation:
// One possible encode method is: "we:;say:;:::;yes"

const encode = (strs) => {
  let encodedString = "";
  for (const str of strs) {
    encodedString += `${str.length}*${str}`;
  }

  return encodedString;
};

const decode = (str) => {
  const strs = [];
  const delimiter = "*";

  let codeStart = 0;
  // each word is encoded at its beginning
  // find the encoded portion
  while (codeStart < str.length) {
    for (let codeEnd = codeStart; codeEnd < str.length; codeEnd++) {
      const char = str[codeEnd];
      // get the delimiter
      if (char === delimiter) {
        // its previous part contains the length of string
        const length = Number.parseInt(str.substring(codeStart, codeEnd));

        // extract string using the length
        const decodedStr = str.substring(codeEnd + 1, codeEnd + length + 1);
        strs.push(decodedStr);

        // go to the next code start
        codeStart = codeEnd + length + 1;
      }
    }
  }

  return strs;
};
