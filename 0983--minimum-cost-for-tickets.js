/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const minCosts = new Array(days[days.length - 1] + 1).fill(0);
  const daySet = new Set(days);
  for (let day = 1; day < minCosts.length; day++) {
    if (!daySet.has(day)) {
      minCosts[day] = minCosts[day - 1];
    } else {
      minCosts[day] = Math.min(
        minCosts[day - 1] + costs[0],
        minCosts[Math.max(0, day - 7)] + costs[1],
        minCosts[Math.max(0, day - 30)] + costs[2]
      );
    }
  }
  return minCosts[minCosts.length - 1];
};
