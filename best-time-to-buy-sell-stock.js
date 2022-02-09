// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is
// the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day
// to buy one stock and choosing a different day in the future
// to sell that stock.

// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

// ---- Examples
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6),
// profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed
// because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// ---- Constraints
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

var maxProfit = function (prices) {
  // track minimum price and max profit with the following two variables
  let minPrice = prices[0];
  let profit = 0;

  for (let currentPrice of prices) {
    // if current price is cheaper than min, assign the value to min price
    minPrice = Math.min(currentPrice, minPrice);
    // if the difference between min price and current price is bigger than
    // previous max profit, make it the new max profit
    profit = Math.max(profit, currentPrice - minPrice);
  }

  // return the max profit
  return profit;
};

// Time Complexity: O(n)
// Space Complexity: O(1)
