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
  const charcodeForA = "a".charCodeAt(0);

  for (const str of strs) {
    const charCount = Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
      const countIndex = str.charCodeAt(i) - charcodeForA;
      charCount[countIndex]++;
    }

    const anagramKey = charCount.join(",");
    if (anagramKey in anagramMap) {
      anagramMap[anagramKey].push(str);
    } else {
      anagramMap[anagramKey] = [str];
    }
  }

  return Object.values(anagramMap);
};
