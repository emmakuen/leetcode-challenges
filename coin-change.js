// 322. Coin Change
/**

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

--- Examples
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Input: coins = [2], amount = 3
Output: -1

Input: coins = [1], amount = 0
Output: 0

--- Constraints
1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104

 */

function coinChange(coins, amount) {
  // make an array with a length of (amount + 1) to include indexes from 0 to given amount.
  // indexes represent amounts; item at each index represents number of coins that makes up the amount
  // initially assume all amounts can't be made up of existing coins and fill each item with Infinity
  const minCoinsFor = Array(amount + 1).fill(Infinity);

  // amount of zero can be made up of zero number of coins
  minCoinsFor[0] = 0;

  // for each subamounts ranging from 1 to amount
  for (let subamount = 1; subamount <= amount; subamount++) {
    for (let i = 0; i < coins.length; i++) {
      const coinValue = coins[i];

      // if a coin value doesn't exceed the current subamount
      if (subamount >= coinValue) {
        const remainingAmount = subamount - coinValue;
        // add 1 (representing current coin) to number of coins needed to make up the remaining amount
        // compare this value to number of coins needed to make up subamount
        // assign whichever's smaller to dp[subamount]
        minCoinsFor[subamount] = Math.min(
          minCoinsFor[subamount],
          1 + minCoinsFor[remainingAmount]
        );
      }
    }
  }

  // if amount can't be made up of given coins, (Infinity) won't be updated.
  // so if dp[amount] equals Infinity, return -1
  // else, return the minimum number of coins at dp[amount]
  return minCoinsFor[amount] !== Infinity ? minCoinsFor[amount] : -1;
}
