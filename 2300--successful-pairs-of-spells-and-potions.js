/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);
  let pairCounts = [];

  for (const spell of spells) {
    const minPotion = Math.ceil(success / spell);
    let min = 0;
    let max = potions.length;
    if (potions[max] < minPotion) {
      pairCounts.push(0);
      continue;
    }

    while (min < max) {
      const mid = Math.floor((min + max) / 2);

      if (potions[mid] < minPotion) {
        min = mid + 1;
      } else {
        max = mid;
      }
    }

    pairCounts.push(potions.length - min);
  }

  return pairCounts;
};
