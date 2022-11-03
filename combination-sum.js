// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
// frequency of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// --- Examples
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Input: candidates = [2], target = 1
// Output: []

// --- Constraints
// 1 <= candidates.length <= 30
// 2 <= candidates[i] <= 40
// All elements of candidates are distinct.
// 1 <= target <= 40

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const results = [];

  function dfs(candidateIndex, addends, sum) {
    // if current addends add up to target sum, add it to the results
    if (sum === target) {
      // copy the addends array instead of directly pushing it to the results as we may want to modify it when considering other combinations
      results.push([...addends]);
      return;
    }

    // if either there's no more candidate to consider or sum exceeds target, abandon the search and backtrack
    if (candidateIndex >= candidates.length || sum > target) return;

    // add the current candidate to the addends
    addends.push(candidates[candidateIndex]);
    // recursively conduct depth-first search with the updated array and the updated sum
    dfs(candidateIndex, addends, sum + candidates[candidateIndex]);
    // after the search, pop the current candidate off the addends array
    addends.pop();

    // recursively conduct depth-first search on the next candidate using the non-updated addends and the sum
    dfs(candidateIndex + 1, addends, sum);
  }

  // when we call the dfs, it would modify the results array
  dfs(0, [], 0);

  // return the results
  return results;
};
