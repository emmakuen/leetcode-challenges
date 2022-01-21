// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//----Examples
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Input: strs = [""]
// Output: [[""]]

//----Constraints
//1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

function groupAnagrams(strs) {
  const groups = {};
  strs.forEach((str) => {
    // if characters of anagrams are alphabetically sorted, they produce the same string
    // so, split to alphabetically sort each characters in a string and join them back to create a group key
    const key = str.split("").sort().join("");
    // if groups already has this key, push the string to array under that key
    // else, create a new array with the string
    // it will produce groups of anagrams
    groups[key] ? groups[key].push(str) : (groups[key] = [str]);
  });

  // return the grouped anagrams
  return Object.values(groups);
}
