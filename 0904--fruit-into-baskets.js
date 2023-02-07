// You are visiting a farm that has a single row of fruit trees
// arranged from left to right. The trees are represented by an integer array
// fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has
// some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of
// fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit
// from every tree (including the start tree) while moving to the right.
// The picked fruits must fit in one of your baskets. Once you reach a tree
// with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// --- Examples
// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.
// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].
// Input: fruits = [1,2,3,2,2]
// Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].

/**
 * @param {number[]} fruits
 * @return {number}
 */
const totalFruit = function (fruits) {
  const fruitCounts = {};
  let maxCount = 0;
  let startIndex = 0;

  for (let endIndex = 0; endIndex < fruits.length; endIndex++) {
    const addedFruitType = fruits[endIndex];
    fruitCounts[addedFruitType] = (fruitCounts[addedFruitType] || 0) + 1;

    while (Object.keys(fruitCounts).length > 2) {
      const removedFruitType = fruits[startIndex];
      fruitCounts[removedFruitType]--;
      if (fruitCounts[removedFruitType] === 0) {
        delete fruitCounts[removedFruitType];
      }

      startIndex++;
    }

    maxCount = Math.max(maxCount, endIndex - startIndex + 1);
  }

  return maxCount;
};
