// https://leetcode.com/problems/koko-eating-bananas/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function (piles, h) {
  let maxSpeed = Math.max.apply(null, piles);
  let minSpeed = 1;

  while (minSpeed < maxSpeed) {
    const speed = Math.floor((maxSpeed + minSpeed) / 2);
    let hours = 0;

    for (const pile of piles) {
      hours += Math.ceil(pile / speed);
    }

    // if it takes too long to finish the bananas, increase the minimum speed
    // else, decrease the max speed
    hours > h ? (minSpeed = speed + 1) : (maxSpeed = speed);
  }

  return minSpeed;
};
