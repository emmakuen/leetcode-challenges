// You are given an array of strings ideas that represents a list of names
// to be used in the process of naming a company. The process of naming a company is as follows:

// Choose 2 distinct names from ideas, call them ideaA and ideaB.
// Swap the first letters of ideaA and ideaB with each other.
// If both of the new names are not found in the original ideas,
// then the name ideaA ideaB (the concatenation of ideaA and ideaB, separated by a space) is a valid company name.
// Otherwise, it is not a valid name.
// Return the number of distinct valid names for the company.

// --- Examples
// Input: ideas = ["coffee","donuts","time","toffee"]
// Output: 6
// Explanation: The following selections are valid:
// - ("coffee", "donuts"): The company name created is "doffee conuts".
// - ("donuts", "coffee"): The company name created is "conuts doffee".
// - ("donuts", "time"): The company name created is "tonuts dime".
// - ("donuts", "toffee"): The company name created is "tonuts doffee".
// - ("time", "donuts"): The company name created is "dime tonuts".
// - ("toffee", "donuts"): The company name created is "doffee tonuts".
// Therefore, there are a total of 6 distinct company names.

// The following are some examples of invalid selections:
// - ("coffee", "time"): The name "toffee" formed after swapping already exists in the original array.
// - ("time", "toffee"): Both names are still the same after swapping and exist in the original array.
// - ("coffee", "toffee"): Both names formed after swapping already exist in the original array.

// Input: ideas = ["lack","back"]
// Output: 0
// Explanation: There are no valid selections. Therefore, 0 is returned.

// --- Constraints
// 2 <= ideas.length <= 5 * 104
// 1 <= ideas[i].length <= 10
// ideas[i] consists of lowercase English letters.
// All the strings in ideas are unique.

const OFFSET = 97;

/**
 * @param {string[]} ideas
 * @return {number}
 */
const distinctNames = function (ideas) {
  let validNameCount = 0;
  const ideasByInitial = Array.from(Array(26), () => new Set());

  for (const idea of ideas) {
    const initial = idea.charCodeAt(0) - OFFSET;
    ideasByInitial[initial].add(idea.slice(1));
  }

  for (let i = 0; i < 25; i++) {
    for (let j = i + 1; j < 26; j++) {
      const ideasA = ideasByInitial[i];
      const ideasB = ideasByInitial[j];

      let overlapCount = 0;
      for (const ideaA of ideasA) {
        if (ideasB.has(ideaA)) {
          overlapCount++;
        }
      }

      validNameCount +=
        (ideasA.size - overlapCount) * (ideasB.size - overlapCount) * 2;
    }
  }

  return validNameCount;
};
