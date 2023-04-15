/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function (piles, k) {
  const dp = Array.from(Array(piles.length + 1), () => Array(k + 1).fill(0));

  for (let pile = 1; pile <= piles.length; pile++) {
    for (let coinCount = 0; coinCount <= k; coinCount++) {
      let currentSum = 0;

      for (
        let currentCoinCount = 0;
        currentCoinCount <= Math.min(piles[pile - 1].length, coinCount);
        currentCoinCount++
      ) {
        if (currentCoinCount > 0) {
          currentSum += piles[pile - 1][currentCoinCount - 1];
        }
        dp[pile][coinCount] = Math.max(
          dp[pile][coinCount],
          dp[pile - 1][coinCount - currentCoinCount] + currentSum
        );
      }
    }
  }
  return dp[piles.length][k];
};
