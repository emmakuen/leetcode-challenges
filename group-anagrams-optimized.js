// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Examples
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Input: strs = [""]
// Output: [[""]]
// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const anagramMap = {};
  const aCharCode = "a".charCodeAt(0);

  for (let strIndex = 0; strIndex < strs.length; strIndex++) {
    const charCounts = Array(26).fill(0);
    const str = strs[strIndex];

    for (let charIndex = 0; charIndex < str.length; charIndex++) {
      const charCountsIndex = str.charCodeAt(charIndex) - aCharCode;
      charCounts[charCountsIndex]++;
    }

    const mapKey = charCounts.toString();
    if (mapKey in anagramMap) {
      anagramMap[mapKey].push(str);
    } else {
      anagramMap[mapKey] = [str];
    }
  }

  return Object.values(anagramMap);
};
