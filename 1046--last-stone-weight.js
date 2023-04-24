/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  if (stones.length === 1) return stones[0];

  stones.sort((a, b) => a - b);
  const last = stones.pop();
  const secondLast = stones.pop();

  stones.push(last - secondLast);

  return lastStoneWeight(stones);
};
